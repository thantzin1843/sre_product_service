const express = require("express");

const controller = require("../controllers/product_controller");

const authorizeRole = require("../middlewares/authorizeRole_middleware");

const router = express.Router();

router.get("/", 
    controller.getAll);

router.get("/:id", 
    controller.getById);

router.post("/", 
    authorizeRole,
    controller.create);

router.put("/:id", 
    authorizeRole,
    controller.update);

router.delete("/:id", 
    authorizeRole,
    controller.delete);

module.exports = router;