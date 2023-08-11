// 1. Create a connection to the database MySQL

import { Sequelize } from "sequelize";  

const db = new Sequelize('db_blogmern', 'root', 'contraseña',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;

// aqui termina conexión a MySQL

