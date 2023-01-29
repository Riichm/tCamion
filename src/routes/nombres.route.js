import { Router } from "express";
import { getNombres, getNombre, createNombre, updateNombre, deleteNombre } from "../controllers/nombres.controller.js";

const nombreRouter = Router();

nombreRouter.get("/", getNombres);

nombreRouter.get("/:id", getNombre);

nombreRouter.post("/", createNombre);

nombreRouter.put("/:id", updateNombre);

nombreRouter.delete("/:id", deleteNombre);

export default nombreRouter;