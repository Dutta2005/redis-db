import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
import dotenv from 'dotenv';
import dbConnect from './config/db.config.js';
dotenv.config();

await dbConnect();

app.use(express.json());

import todoRoutes from './route/todo.route.js';
app.use('/api/todo', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});