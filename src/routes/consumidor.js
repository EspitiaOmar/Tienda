const { Router } = require("express");
const router = Router();
const userSchema = require("../models/user")

router.get("/consumidor", (req, res) => {
  res.send("adsadf");
});

router.post("/consumidor", (req, res) => {
  const user = userSchema(req.body);
  res.send("crear usuario");
  user.save().then((data)=>res.json(data)).catch((error)=>(res.json({message: error})))
});

module.exports = router;
