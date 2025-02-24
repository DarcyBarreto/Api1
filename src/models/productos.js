import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const productos = sequelize.define(
  "productos",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_producto: {
      type: DataTypes.STRING(100), 
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false,
      validate: {
        min: 0, 
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0, 
      },
    },
  },
  {
    timestamps: true, 
  }
);
