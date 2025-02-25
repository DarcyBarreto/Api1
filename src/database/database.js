import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "api", // db name,
  "postgres", // username
  "12345", // password
  {
    host: "apinode_db",
    dialect: "postgres",
 
  }
);
