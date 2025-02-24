import { productos } from "../models/productos.js";

export async function createProductos(req, res) {
  try {
    const { nombre_producto, precio, stock, categoria_id } = req.body;
    const newproductos = await productos.create({
      categoria_id,
      nombre_producto,
      precio,
      stock,
    });
    res.json(newproductos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getProductos = async (req, res )=>{
  try {
      const listaProductos = await productos.findAll()
      res.json(listaProductos);
  } catch (error) {
      return res.status(500).json({message: error.message})
  }
  
};

export const updateProductos = async (req, res) => {
  try {
      const { id_producto } = req.params;
      const { nombre_producto, precio,stock,categoria_id } = req.body;

      const producto = await productos.findByPk(id_producto);

      if (!producto) {
          return res.status(404).json({ message: "Producto no encontrado" });
      }

     producto.nombre_producto = nombre_producto;
     producto.precio = precio;
     producto.stock = stock;
     producto.categoria_id = categoria_id;
      

      await producto.save();

      return res.json({ message: 'producto  updated successfully ', producto});

  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
};


export const deleteProductos = async (req, res) => {
  try {
      const { id_producto } = req.params;
      const deleted = await productos.destroy({
          where: { id_producto },
      });

      if (!deleted) {
          return res.status(404).json({ message: "Productos no encontrado" });
      }

      return res.json({ message: 'Productos deleted successfully' });

  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
};

export async function get_Productos(req, res) {
  const { id_producto } = req.params;
  try {
      const producto = await productos.findOne({
          where: { id_producto },
      });

      if (!producto) {
          return res.status(404).json({ message: "Producto no encontrado" });
      }

      res.json(producto);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

