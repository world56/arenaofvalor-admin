export function initMenuState(url: string) {
    return url.substr(1, url.length - 1).split('/');
};