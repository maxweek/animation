import AppStore from "./store/store";

export function getCl(condition?: boolean, conditionTrue?: string, conditionFalse: string = ''): string {
    return condition ? `__${conditionTrue}` : (conditionFalse ? `__${conditionFalse}` : '');
}

export function getClR(className: any): string {
    return className ? className : ''
}
export function getCls(classNames: string[]): string {
    let arr: string[] = [];
    classNames.map(el => {
        if (el) {
            arr.push(el)
        }
    })
    return arr.join(' ')
}

export function getRawHtml(element: any) {
    return { __html: element }
}

export function getRandomInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const _WIDTH_MOBILE = 495;
export const _WIDTH_TABLET = 820;

export async function fetchSvgMarkup(src: string, setter: (markup: any) => void, loader: (status: boolean) => void = () => { }): Promise<void> {
    try {
        const response = await fetch(src);
        const svgMarkup = await response.text();
        if (svgMarkup.includes('<svg')) {
            setter(svgMarkup)
            loader(true)
        } else {
            setter(null)
            loader(false)
        }
        // console.log('icon success', src)
    } catch (error) {
        console.error('Failed to fetch SVG markup:', error);
        setter(null)
        loader(false)
    }
}

export function loadImage(url: string) {
    return new Promise((resolve: (url: string) => void, reject) => {
        const image = new Image();

        image.onload = () => {
            resolve(url);
        };

        image.onerror = () => {
            reject(new Error(`Failed to load image from ${url}`));
        };

        image.src = url;
    });
}

export function setCookie(name: string, value: any, options: any = {}) {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
export function getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
export function deleteCookie(name: string) {
    setCookie(name, "", {
        'max-age': -1
    })
}

export const _MONTH = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

export function getFormattedDate(dateOrTimestamp: Date | number, expectedFormat?: string): string {
    if (!dateOrTimestamp) {
        return ''
    }
    let date: Date;
    let format: string = 'dd.MM.yyyy';
    let locale = 'ru-RU'

    if (dateOrTimestamp instanceof Date) {
        date = dateOrTimestamp;
    } else {
        date = new Date(dateOrTimestamp);
    }

    if (expectedFormat) {
        format = expectedFormat
    }

    const formattedDate = format.replace(/(yyyy|MM|MW|dd|hh|mm|ss)/g, (match) => {
        switch (match) {
            case 'yyyy':
                return date.toLocaleDateString(locale, { year: 'numeric' });
            case 'MM':
                return date.toLocaleDateString(locale, { month: '2-digit' });
            case 'MW':
                return date.toLocaleDateString(locale, { month: 'long', day: 'numeric' }).split(' ')[1];
            case 'dd':
                return date.toLocaleDateString(locale, { day: '2-digit' });
            case 'hh':
                return date.toLocaleTimeString(locale, { hour: '2-digit' });
            case 'mm':
                const minutes = date.getMinutes();
                return minutes < 10 ? `0${minutes}` : minutes.toString();
            case 'ss':
                const seconds = date.getSeconds();
                return seconds < 10 ? `0${seconds}` : seconds.toString();
            default:
                return match;
        }
    });

    return formattedDate
}

export function getDateFromFormattedDate(date: string, expectedFormat?: string): Date | number | null {
    if (!date) {
        return null;
    }

    const matchResult = date.match(/\d+/g);
    let format: string = 'dd.MM.yyyy';
    if (!matchResult) {
        return null;
    }

    if (expectedFormat) {
        format = expectedFormat
    }

    const parsedValues = matchResult.map(Number);
    const now = new Date();
    const parts: any = {};

    format.split(/[.-/: ]/).forEach((segment, index) => {
        switch (segment) {
            case 'yyyy':
                parts.year = parsedValues[index];
                break;
            case 'MM':
                parts.month = parsedValues[index] - 1;
                break;
            case 'dd':
                parts.day = parsedValues[index];
                break;
            case 'hh':
                parts.hour = parsedValues[index];
                break;
            case 'mm':
                parts.minute = parsedValues[index];
                break;
            case 'ss':
                parts.second = parsedValues[index];
                break;
        }
    });

    const parsedDate = new Date(
        parts.year || now.getFullYear(),
        parts.month ?? now.getMonth(),
        parts.day ?? 1,
        parts.hour ?? 0,
        parts.minute ?? 0,
        parts.second ?? 0
    );

    if (isNaN(parsedDate.getTime())) {
        return null;
    }

    return parsedDate;
}
export function getTimestampFromDate(date: Date): number {

    return date.getTime();
}

export function getTimestampWithoutTimeZone(date: Date): number {
    return Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    );
}


export function fixWindow(type: boolean) {
    if (type) {
        setTimeout(function () {
            /* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
            if (!document.body.hasAttribute('data-body-scroll-fix')) {
                // Получаем позицию прокрутки
                let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                // Ставим нужные стили
                document.body.setAttribute('data-body-scroll-fix', scrollPosition.toString()); // Cтавим атрибут со значением прокрутки
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = '-' + scrollPosition + 'px';
                document.body.style.left = '0';
                document.body.style.width = '100%';
            }
        }, 15);
    } else {
        if (document.body.hasAttribute('data-body-scroll-fix')) {
            // Получаем позицию прокрутки из атрибута
            let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
            // Удаляем атрибут
            document.body.removeAttribute('data-body-scroll-fix');
            // Удаляем ненужные стили
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            // Прокручиваем страницу на полученное из атрибута значение
            if (scrollPosition !== null) {
                window.scroll(0, parseInt(scrollPosition));
            }
        }
    }
}

export function isImageFile(file: File): boolean {
    const imageExtensions: string[] = ['.jpg', '.jpeg', '.png', '.tiff', '.bmp', '.svg'];
    const fileName: string = file.name.toLowerCase();

    for (const extension of imageExtensions) {
        if (fileName.endsWith(extension)) {
            return true;
        }
    }

    return false;
}


export function anchorTo(target: string, needHeader?: boolean) {
    const targetBox = document.querySelector('#' + target)
    if (!targetBox) return
    let header = undefined
    if (needHeader) {
        header = document.querySelector('header');
        if (!header) return
    }

    const options: any = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        offset: header ? -(header.offsetHeight + 24) : 0
    };

    targetBox.scrollIntoView(options);
}