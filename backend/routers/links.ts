import express from "express";
import { ILinkWithoutId } from "../types";
import Link from "../models/Link";

const linksRouter = express.Router();

const generateShortUrl = (): string => {
    const letters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = 6 + Math.floor(Math.random() * 2);
    let result = "";
    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
};

linksRouter.post("/", async (req, res) => {
    try {
        const linkData: ILinkWithoutId = {
            originalUrl: req.body.originalUrl,
            shortUrl: generateShortUrl()
        };

        const link= new Link(linkData);
        await link.save();

        return res.send(link);
    } catch (e) {
        return res.status(400).send(e);
    }
});
export default linksRouter;


