import { categorias } from "../models/categorias.js";
import { productos } from "../models/productos.js";

export async function getCategorias(req, res) {
  try {
    const categorias_1 = await categorias.findAll({
      atributes: ["id_categoria", "nombre_categoria"],
    });
    res.json(categorias_1);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCategorias(req, res) {
  const { nombre_categoria} = req.body;
  try {
    let newcategoria = await categorias.create(
      {
        nombre_categoria
      },
      {
        fields: ["nombre_categoria"],
      }
    );
    return res.json(newcategoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getCategorias_id(req, res) {
  const { id_categoria } = req.params;
  try {
    const categoria = await categorias.findOne({
      where: {
        id_categoria,
      },
    });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateCategorias = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const { nombre_categoria } = req.body;

    const categoria = await categorias.findByPk(id_categoria);
    categoria.nombre_categoria = nombre_categoria;
    await categoria.save();

    res.json(categoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategorias = async (req, res) => {
  try {
      const { id_categoria } = req.params;
      const deleted = await categorias.destroy({
          where: { id_categoria },
      });

      if (!deleted) {
          return res.status(404).json({ message: "Categoria no encontrada" });
      }

      return res.json({ message: 'categoria deleted successfully' });

  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
};

export async function getCategoriasproductos(req, res) {
  const { id_categoria } = req.params;
  try {
    const listaProductos = await productos.findAll({

      where: { categoria_id: id_categoria},
    });
    res.json(listaProductos);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
