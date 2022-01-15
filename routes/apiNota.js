const { Router } = require("express");
const controladorNota = require("../controllers/notaController")
const router = Router();


router.post("/new", controladorNota.crear);
router.get("/find", controladorNota.obtener);
router.get("/buscar/:id", controladorNota.buscar);
router.put("/like", controladorNota.like);
router.delete("/eliminar/:id", controladorNota.eliminar)

module.exports = router;