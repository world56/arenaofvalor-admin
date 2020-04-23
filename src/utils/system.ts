export function initMenuState(url: string) {
    const path = url.substr(1, url.length - 1).split('/');
    return path;
};