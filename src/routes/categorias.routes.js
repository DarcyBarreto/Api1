import { Router } from "express";
import {
  getCategorias,
  createCategorias,
  updateCategorias,
  getCategorias_id,
  deleteCategorias,
  getCategoriasproductos,
} from "../controllers/categorias.controller.js";

const router = Router();

// Routes
router.post("/categorias", createCategorias);
router.get("/categorias", getCategorias);
router.put("/categorias/:id_categoria", updateCategorias);
router.delete("/categorias/:id_categoria", deleteCategorias);
router.get("/categorias/:id_categoria", getCategorias_id);

router.get("/categorias/:id/productos ", getCategoriasproductos);

export default router;
