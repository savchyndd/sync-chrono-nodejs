import ctrlWrapper from "../helpers/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import notes from "../models/notes.js";
import { Request, Response } from "express";

export const listNotes = async (req: Request, res: Response) => {
  const result = await notes.listNotes();
  res.json(result);
};

export const addNote = async (req: Request, res: Response) => {
  const result = await notes.addNote(req.body);
  res.status(201).json(result);
};

export const getNoteById = async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const result = await notes.getNoteById(noteId);

  if (!result) throw HttpError(404, "Not found");

  res.status(201).json(result);
};

export const updNote = async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const result = await notes.updNote(noteId, req.body);

  if (!result) throw HttpError(404, "Not found");

  res.status(201).json(result);
};

export const removeNote = async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const result = await notes.removeNote(noteId);

  if (!result) throw HttpError(404, "Not found");

  res.json({ message: "Delete success" });
};

export const getDataStatistics = async (req: Request, res: Response) => {
  const result = await notes.getDataStatistics();
  console.log(result);
  if (!result) throw HttpError(404, "Not found");

  res.json({ result });
};

export const updArhivedStatus = async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const result = await notes.updArhivedStatus(noteId, req.body);

  if (!result) throw HttpError(404, "Not found");

  res.status(201).json(result);
};

const ctrl = {
  listNotes: ctrlWrapper(listNotes),
  addNote: ctrlWrapper(addNote),
  getNoteById: ctrlWrapper(getNoteById),
  updNote: ctrlWrapper(updNote),
  removeNote: ctrlWrapper(removeNote),
  getDataStatistics: ctrlWrapper(getDataStatistics),
  updArhivedStatus: ctrlWrapper(updArhivedStatus),
};
export default ctrl;
