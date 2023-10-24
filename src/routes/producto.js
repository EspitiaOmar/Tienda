const { Router } = require("express");
const router = Router();
const productSchema = require("../models/product");

router.get("/product", async (req, res) => {
    res.render("prod")
  });

router.post("/product/add", async (req, res) => {
    try {
      const product = productSchema(req.body);
      await product.save();  
    } catch (error) {
      console.log(error)
    }
    });
    
    router.get("/product/list", async (req, res) => {
      const products =  await productSchema.find().lean();
      res.render("prod", { products:products})
    });

    router.get("/product/edit/:id", async (req, res) => {
        const product = await userSchema.findById(req.params.id).lean()
        res.render("usuariosEdit", { usuarios})
      });
      
      router.post("/product/edit/:id", async (req, res) => {
        
      
      });

module.exports = router;
