const { Router } = require('express');
const router = Router();
const productSchema = require("../models/order");

router.post("/order/add", async (req, res) => {
    try {
      const product = productSchema(req.body);
      await product.save();
      const products = await productSchema.findById(req.params.id).lean();
      res.render("productEdit", { products: products });
    } catch (error) {
      console.log(error);
    }
  });
module.exports=router;