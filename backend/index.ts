import express from 'express';
import linksRouter from "./routers/links";
import cors from "cors";
import shortUrlRouter from "./routers/shortUrl";
import mongoose from "mongoose";

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use('/links', linksRouter);
app.use('/shortUrl', shortUrlRouter);

const run = async () => {
    await mongoose.connect('mongodb://localhost/links');

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    })
};

run().catch(e => console.error(e));

