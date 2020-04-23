export function toPathUrl(path: string[]) {
    let str = '';
    const pathLen = path.length - 1;
    for (let i = pathLen; i >= 0; i--) {
        const url = `/${path[i]}`;
        str += url;
    };
    return str;
};