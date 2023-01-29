import { Router } from "express";

import nombreRouter from "./nombres.route.js";

const indexRouter = Router();
const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("Welcome to PlantesScale API");
});

indexRouter.use(`${prefix}/nombre`, nombreRouter);

export default indexRouter;