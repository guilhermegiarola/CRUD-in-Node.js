const controller = require("../controllers/users");
const router = require("express").Router();

router.put("/login", controller.encontrarLogin);
router.get("/", controller.listarUsuarios);
router.get("/:id", controller.encontrarUsuario);
router.post("/", controller.inserirUsuario);
router.put("/:id", controller.alterarUsuario);
router.delete("/:id", controller.excluirUsuario);

module.exports = router;
