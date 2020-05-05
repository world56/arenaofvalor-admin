export function toPathUrl(url: string[]) {
    let str = '';
    let i = url.length - 1;
    for (i; i >= 0; i--) str += `/${url[i]}`;
    return str;
};