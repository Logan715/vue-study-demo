export const findActiveMenuKey = (menus, activePath) => {
    for (let index = 0; index < menus.length; index++) {
        const { id, path, children } = menus[index];
        if (path === activePath) {
            return id;
        } else if (children?.length) {
            const activeMenuKey = findActiveMenuKey(children, activePath);
            if (activeMenuKey) {
                return activeMenuKey;
            }
        }
    }
};
