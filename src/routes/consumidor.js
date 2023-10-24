const { Router } = require("express");
const router = Router();
const userSchema = require("../models/user");

router.post("/consumidor/add", async (req, res) => {
  try {
    const usuario = userSchema(req.body);
    await usuario.save();
  } catch (error) {
    console.log(error);
  }
});

router.get("/consumidor/list", async (req, res) => {
  const usuarios = await userSchema.find().lean();
  res.render("usuariosList", { usuarios: usuarios });
});

router.get("/consumidor/edit/:id", async (req, res) => {
  const usuario = await userSchema.findById(req.params.id).lean();
  res.render("usuarioEdit", { usuario: usuario });
});

router.post("/consumidor/edit/:id", async (req, res) => {
  await userSchema.findByIdAndUpdate(req.params.id, req.body);
  res.render("usuariosList");
});

module.exports = router;
