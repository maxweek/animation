import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>, outerRef: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = (e: MouseEvent) => {
      const element = ref.current!;

    //   const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const x = e.offsetX - element.offsetWidth / 2;
      const y = e.offsetY - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    outerRef.current?.addEventListener("pointermove", handlePointerMove);

    return () => outerRef.current?.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}
