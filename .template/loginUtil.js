export const findFirstPath = (menus = []) => {
    for (let i = 0; i < menus.length; i++) {
        const { path, children } = menus[i];
        if (path) {
            return path;
        }
        if (children?.length) {
            const firstPath = findFirstPath(children);
            if (firstPath) {
                return firstPath;
            }
        }
    }
};
