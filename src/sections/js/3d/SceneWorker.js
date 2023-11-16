
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


let TIME = 0;


export default class SceneWorker {
    scene = {};
    stats = {};
    camera = {};
    renderer = {};
    inited = false;
    fbx = {}
    items = [];
    constructor(box, sets) {

        // debugger
        this.box = box;
        this.settings = sets

        this.init();
        if (!this.settings.onlyShader) {
            this.buildModel()
        }
        this.initControls();
        if (this.settings.shader) {
            this.initComposer();
            if (this.settings.onlyShader) {
                this.createShaderObject()
            }
        }
        this.animate();
        this.inited = true;
    }
    init = () => {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, this.box.clientWidth / this.box.clientHeight, 0.1, 1000);
        // this.camera = new THREE.OrthographicCamera(20, 20, 20, 20, 0.1, 1000)
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        const pixelRatio = window.devicePixelRatio;
        const desiredWidth = this.box.clientWidth * pixelRatio | 0;
        const desiredHeight = this.box.clientHeight * pixelRatio | 0;
        this.renderer.setSize(desiredWidth, desiredHeight, false);
        this.fbxLoader = new FBXLoader();
        this.textureLoader = new THREE.TextureLoader();

        this.hmLight = new THREE.HemisphereLight('#ffffff', '#f0f0f0', 10);

        // this.hmLight.intensity = 6;
        // this.hmLight.color = '#fff'
        // this.hmLight.groundColor = '#9900ff'
        this.hmLightHelper = new THREE.HemisphereLightHelper(this.hmLight);
        this.scene.add(this.hmLight);
        this.gLight_1 = new THREE.SpotLight('#ff0000', 10);
        this.gLight_2 = new THREE.SpotLight('#0f0fff', 100);

        this.gLight_1.position.x = 2
        this.gLight_2.position.x = -2

        // this.gLight_1_Helper = new THREE.PointLightHelper(this.gLight_1)
        // this.gLight_2_Helper = new THREE.SpotLightHelper(this.gLight_2)
        this.objectsGroup = new THREE.Group();
        this.lightGroup = new THREE.Group();

        this.lightGroup.add(this.gLight_1)
        this.lightGroup.add(this.gLight_2)



        // this.gLight_1_Helper.position.set(1,0,0)
        // this.gLight_2_Helper.position.set(-1,0,0)
        // this.lightGroup.position.set(-1, 0, 0)
        this.scene.add(this.lightGroup)
        // this.scene.add(this.hmLightHelper);

        this.groundGeo = new THREE.PlaneGeometry(20, 20, 20, 20)
        this.groundMat = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x040404, flatShading: true });
        this.groundMesh = new THREE.Mesh(this.groundGeo, this.groundMat)
        this.groundMesh.rotation.x = Math.PI / -2
        this.groundMesh.position.y = -0.35

        this.box.appendChild(this.renderer.domElement)

        this.camera.position.z = 1.5;
        this.camera.position.x = 1.5;
        this.camera.position.y = 0.5;

        this.scene.add(this.groundMesh);
        this.scene.add(this.objectsGroup)
        // this.camera.position.y = 3;
    }
    initControls() {
        // this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    }
    animate = () => {
        if (this.stopped) return
        this.anim = requestAnimationFrame(this.animate);

        if (this.controls) {
            this.controls.update();
        }
        if (this.model && this.model.rotation) {
            this.objectsGroup.rotation.y += 0.01;
            this.lightGroup.rotation.y += 0.01
            this.lightGroup.rotation.x += 0.01
        }
        if (this.settings.shader && !this.settings.onlyShader) {
            TIME += 0.005;
            this.updateUniforms();
            this.composer.render()
        } else {
            if (this.settings.onlyShader) {
                TIME += 0.005;
                this.updateUniforms();
            }
            this.renderer.render(this.scene, this.camera);
        }

    }
    start = () => {
        this.anim = requestAnimationFrame(this.animate);
    }
    stop = () => {
        cancelAnimationFrame(this.anim)
    }
    destroy = () => {
        this.stopped = true
        this.box.innerHTML = ''
    }
    buildModel = () => {

        this.fbxLoader.load(this.settings.model, (fbx) => {
            fbx.traverse((child) => {
                if (child.isMesh) {
                    // child.material = material
                    // child.rotateX(Math.PI / -2)
                    // child.rotateY(Math.PI / -2)
                    // child.rotateX(Math.PI / 2);
                }
            });
            // debugger
            this.model = fbx.children[0];
            if (this.settings.texture) {
                let material = new THREE.MeshStandardMaterial({
                    // color: 0x000000,
                    color: 0xffffff,
                    // depthTest: true,
                    // depthWrite: true,
                    flatShading: false,
                    metalness: 1,
                    roughness: 0.4

                });
                if (this.settings.texture === 'basic') {
                    material = new THREE.MeshPhongMaterial({
                        color: 0x5f5f5f,
                    });
                    // material.color = '#ff8585';
                    // material.color = '#ffffff'
                } else if (this.settings.texture === 'normal') {
                    material = new THREE.MeshNormalMaterial({
                        color: 0x5f5f5f,
                    });
                } else if (this.settings.texture === 'wireframe') {
                    material.wireframe = true;
                } else {
                    const texture = this.textureLoader.load(this.settings.texture);
                    material.map = texture;
                }

                this.model.material = material;
            }

            if (this.settings.shader) {
                this.model.scale.set(0.5, 0.5, 0.5)
            } this.objectsGroup.add(this.model);
            // debugger
            if (this.settings.shader) {
                this.createShaderObject(false)
            }
        });

    }

    updateUniforms() {
        this.scene.traverse(function (child) {
            if (child instanceof THREE.Mesh
                && child.material.type === 'ShaderMaterial') {
                child.material.uniforms.uTime.value = TIME;
                child.material.needsUpdate = true;
            }
        });
        // console.log(TIME)
    }

    initComposer() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.setSize(window.innerWidth, window.innerHeight);

        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight), 2, 1, 0.04);
        bloomPass.renderToScreen = true;
        this.composer.addPass(bloomPass);

        // debugger
        // console.log(this.composer)
    }
    createShaderObject = (type = true) => {

        const geometry1 = new THREE.SphereGeometry(25, 64, 64);
        const geometry2 = new THREE.SphereGeometry(30, 64, 64);

        const phongMaterial = new THREE.MeshPhongMaterial({
            // color: 0x782b7f,
            color: 0xa05000,
            emissive: 0x180819,
            depthTest: true,
            depthWrite: true,
            transparent: true,
            opacity: .5,

        });

        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: TIME }
            },
            // depthTest: true,
            // depthWrite: true,
            transparent: true,
            side: THREE.DoubleSide,
            vertexShader: `
            uniform float uTime;

            varying vec2 vUv;

            void main() {
                vUv = uv;

                vec3 delta = normal * sin(position.x * position.y * uTime / 10.0);
                vec3 newPosition = position + delta;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }`,
            fragmentShader: `
            uniform float uTime;
        
            varying vec2 vUv;
        
            float rand(vec2 seed);
            float noise(vec2 position);
        
            void main() {
                vec2 position1 = vec2(vUv.x * 4.0, vUv.y - uTime);
                vec2 position2 = vec2(vUv.x * 4.0, vUv.y - uTime * 2.0);
                vec2 position3 = vec2(vUv.x * 4.0, vUv.y - uTime * 3.0);
        
                float color = (
                    noise(position1 * 5.0)
                    + noise(position2 * 10.0)
                    + noise(position3 * 15.0)) / 3.0;
        
                gl_FragColor = vec4(0.0, 0.0, 0.0, color - smoothstep(0.1, 1.3, vUv.y));
            }
        
            float rand(vec2 seed) {
                return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453123);
            }
        
            float noise(vec2 position) {
                vec2 blockPosition = floor(position);
        
                float topLeftValue     = rand(blockPosition);
                float topRightValue    = rand(blockPosition + vec2(1.0, 0.0));
                float bottomLeftValue  = rand(blockPosition + vec2(0.0, 1.0));
                float bottomRightValue = rand(blockPosition + vec2(1.0, 1.0));
        
                vec2 computedValue = smoothstep(0.0, 1.0, fract(position));
        
                return mix(topLeftValue, topRightValue, computedValue.x)
                    + (bottomLeftValue  - topLeftValue)  * computedValue.y * (1.0 - computedValue.x)
                    + (bottomRightValue - topRightValue) * computedValue.x * computedValue.y;
            }`
        });

        // const sphere1 = new THREE.Mesh(geometry1, phongMaterial);
        // const sphere2 = new THREE.Mesh(geometry2, shaderMaterial);
        let sphere1;
        let sphere2;

        this.sGroup = new THREE.Group();


        if (type) {
            sphere1 = new THREE.Mesh(geometry1, phongMaterial);
            sphere2 = new THREE.Mesh(geometry2, shaderMaterial);

            this.sGroup.scale.set(0.02, 0.02, 0.02)
        } else {
            sphere1 = this.model.clone();
            sphere2 = this.model.clone();

            sphere1.material = phongMaterial;
            sphere2.material = shaderMaterial;

            this.model.visible = false;
            sphere1.scale.set(1.1, 1.1, 1.1)
            sphere2.scale.set(1.2, 1.2, 1.2)
        }
        // sphere1.scale(0.2, 0.2)
        // sphere1.scale.set(1)
        // sphere2.scale(0.2)
        this.sGroup.add(sphere1);
        this.sGroup.add(sphere2);
        this.objectsGroup.add(this.sGroup)

    }
}