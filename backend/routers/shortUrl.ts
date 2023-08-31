import express from "express";
import Link from "../models/Link";
import {ILink} from "../types";

const shortUrlRouter = express.Router();

shortUrlRouter.get('/:shortUrl', async (req, res) => {
   try {
      const link: ILink | null = await Link.findOne(req.params);
      if (!link) {
         return res.sendStatus(404);
      }
      return res.status(301).redirect(link.originalUrl);
   } catch {
      return res.sendStatus(500);
   }
});

export default shortUrlRouter;