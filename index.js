import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import router from './routes/index.js';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;  
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, (err) => err ? console.log(err) : console.log(`Server has started on port: ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();

