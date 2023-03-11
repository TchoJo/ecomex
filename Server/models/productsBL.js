const Product = require('./productModel');

const getProducts = async () => {
    return Product.find( {} );
};

const getProduct = async (id) => {
    return Product.findById(id);
};

const addProduct = async (newProduct) => {
    const product = new Product(newProduct);
    const newPr = await product.save();
    return `${newPr.id} Added.`;
};

const updateProduct = async (id, update) => {
    const productUpdate = await Product.findByIdAndUpdate(id, update);
    reutrn `${productUpdate.id} Has Been Updated.`
};

const deleteProduct = async (id) => {
    await Product.findByIdAndRemove(id);
    return `Product ${id} Deleted.`
};

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct };