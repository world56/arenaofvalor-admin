export function toPathUrl(url: React.Key[]) {
    let str = '';
    let i = url.length - 1;
    for (i; i >= 0; i--) str += `/${url[i]}`;
    return str;
};