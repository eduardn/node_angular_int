
/**
 * Get products from DB
 *
 * @return {Array} Array of all the products
 */
function getProducts() {
    return require('./products.json');
}

/**
 * Get all the products from DB
 *
 * @return {Array} An Array of all the products
 */
function getAll() {
    return getProducts();
}

/**
 * Find a product by id
 *
 * @param  {number} id The id of the product
 *
 * @return {Object}    The product with the specified id
 */
function getById(id) {
    return getAll().find(product => product._id === id);
}

module.exports = {
    getAll,
    getById
};