const menuItems = [
    {
        title: 'Products',
        url: '/products',
        active: false
    },
    {
        title: 'Contact',
        url: '/contact',
        active: false
    }
];

/**
 * Middleware to set the active item based on the defined url
 */
function setup(req, res, next) {
    menuItems.forEach(menuItem => {
        if (req.path.length > 1 && req.path.indexOf(menuItem.url) === 0) {
            menuItem.active = true;
        } else {
            menuItem.active = false;
        }
    });

    res.locals.menuItems = menuItems;

    next();
}

module.exports = { setup };

