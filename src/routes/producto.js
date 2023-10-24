const { Router } = require("express");
const router = Router();

router.get("/producto", (req, res) => {
    res.send("leche")
});

module.exports = router;
