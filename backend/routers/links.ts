import express from "express";
const linksRouter = express.Router();

linksRouter.post('/', async (req, res) => {
    res.send('links ');
});

export default linksRouter;