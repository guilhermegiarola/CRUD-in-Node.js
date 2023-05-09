const controller = require("../controllers/users");
const router = require("express").Router();

router.put("/login", controller.encontrarLogin);
router.put("/recuperarSenha", controller.recuperarSenha);
router.get("/listar", controller.listarUsuarios);
router.get("/", controller.encontrarUsuario);
router.post("/", controller.inserirUsuario);
router.put("/", controller.alterarUsuario);
router.put("/bloquear", controller.bloquearUsuario);
router.put("/excluir/:id", controller.excluirUsuario);

module.exports = router;
