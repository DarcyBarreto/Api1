import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import categoriasRoutes from "./routes/categorias.routes.js";
import productosRoutes from "./routes/productos.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(categoriasRoutes)
app.use(productosRoutes)

export default app;
