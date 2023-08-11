import db from  "../database/DataBase.js";
import { DataTypes } from "sequelize";       

const BlogModel = db.define('blogs', {
    titulo: {type: DataTypes.STRING},
    imagen: {type: DataTypes.STRING},
    contenido:{ type :DataTypes.STRING}
})

export default BlogModel;