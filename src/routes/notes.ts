import express from "express";

import ctrl from "../controllers/notes.js";
import validateBody from "../middlewares/validateBody.js";
import { addSchema, updArhivedStatusSchema } from "../schemas/notes.js";

const notesRouter = express.Router();

notesRouter.post("/", validateBody(addSchema), ctrl.addNote);
notesRouter.delete("/:id", ctrl.removeNote);
notesRouter.patch("/:id", validateBody(addSchema), ctrl.updNote);
notesRouter.patch(
  "/:id/arhive",
  validateBody(updArhivedStatusSchema),
  ctrl.updArhivedStatus
);
notesRouter.get("/stats", ctrl.getDataStatistics);
notesRouter.get("/:id", ctrl.getNoteById);
notesRouter.get("/", ctrl.listNotes);

export default notesRouter;
