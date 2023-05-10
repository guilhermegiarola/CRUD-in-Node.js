const controller = require("../controllers/util");
const router = require("express").Router();

router.put("/generatedocument", controller.gerarDOC);

module.exports = router;
