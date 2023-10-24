const { Router } = require("express");
const router = Router();
const productSchema = require("../models/product");

router.get("/product", async (req, res) => {
  res.render("prod");
});

router.post("/product/add", async (req, res) => {
  try {
    const product = productSchema(req.body);
    await product.save();
    const products = await productSchema.findById(req.params.id).lean();
    res.render("productEdit", { products: products });
  } catch (error) {
    console.log(error);
  }
});

router.get("/product/list", async (req, res) => {
  const product = await productSchema.find().lean();
  res.render("prodList", { product: product });
});

router.get("/product/edit/:id", async (req, res) => {
  const product = await productSchema.findById(req.params.id).lean();
  res.render("productEdit", { product: product });
});

router.post("/product/edit/:id", async (req, res) => {
  await productSchema.findByIdAndUpdate(req.params.id, req.body);
  const producto = await productSchema.find().lean();
  res.render("productoList", { producto: producto });
  res.render("productoList");
});

router.get("/producto/delete/:id", async (req, res) => {
  await productSchema.findByIdAndDelete(req.params.id, req.body);
  const producto = await productSchema.find().lean();
  res.render("productoList", { producto: producto });
});

module.exports = router;
