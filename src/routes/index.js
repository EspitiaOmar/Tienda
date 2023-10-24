const { Router } = require("express");
const { request } = require("../app");
const router = Router("./model/user");


router.get("/", (req, res) => {
  res.render('usuario.hbs')
});

module.exports = router;
