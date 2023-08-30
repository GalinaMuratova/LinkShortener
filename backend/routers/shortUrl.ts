import express from "express";

const shortUrlRouter = express.Router();

shortUrlRouter.get('/', async (req, res) => {
   res.send('url');
});

export default shortUrlRouter;