import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import notesRouter from "./routes/notes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
