export function ComponentNoUpdate() {
    return true;
};

export function initMenu(url: string) {
    return url.substr(1, url.length - 1).split('/');
};