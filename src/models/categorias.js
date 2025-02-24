import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { productos } from "./productos.js";

export const categorias = sequelize.define(
  "categorias",
  {
    id_categoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_categoria: {
      type: DataTypes.STRING,
    },
   
  },
  {
    timestamps: false,
  }
);

categorias.hasMany(productos,{
  foreignKey: 'categoria_id',
  sourceKey: 'id_categoria'
})

productos.belongsTo(categorias,{
  foreignKey: 'categoria_id',
  targetKey: "id_categoria"
})


