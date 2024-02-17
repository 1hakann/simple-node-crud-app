const router = require("express").Router();
const ProductController = require("../controllers/ProductController");
// const {getProduct, ...} = require("../controllers/ProductController");

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProduct);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;