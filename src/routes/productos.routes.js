import { Router } from "express";
import {
  createProductos,
  getProductos,
  updateProductos,
  deleteProductos,
  get_Productos,
} from "../controllers/productos.controller.js";

const router = Router();

// Routes
router.post("/productos", createProductos);
router.put("/productos/:id_producto", updateProductos);
router.delete("/productos/:id_producto", deleteProductos);
router.get("/productos", getProductos);
router.get("/productos/:id_producto", get_Productos);

export default router;
