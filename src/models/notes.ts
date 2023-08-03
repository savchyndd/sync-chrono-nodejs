import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

import { NoteType } from "../type/NoteType.js";

import { getDirname } from "../utils/getDirname.js";
import getSummaryData from "../utils/getSummaryData.js";

const __dirname = getDirname(import.meta.url);
const notesPath = path.join(__dirname, "..", "db", "notes.json");

const listNotes = async () => {
  const data = await fs.readFile(notesPath);

  return JSON.parse(data.toString());
};

const addNote = async (body: NoteType) => {
  const notes = await listNotes();

  if (!body.created)
    body.created = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  if (!body.date) body.date = "";

  const newNote = {
    id: nanoid(),
    arhived: false,
    ...body,
  };
  notes.push(newNote);
  await fs.writeFile(notesPath, JSON.stringify(notes, null, 2));

  return newNote;
};

const getNoteById = async (noteId: string) => {
  const notes = await listNotes();
  const result = notes.find((note: NoteType) => note.id === noteId);

  return result || null;
};

const updNote = async (noteId: string, body: NoteType) => {
  const notes = await listNotes();
  const idxNote = notes.findIndex((note: NoteType) => note.id === noteId);

  if (idxNote === -1) return null;

  notes[idxNote] = { id: noteId, ...notes[idxNote], ...body };
  await fs.writeFile(notesPath, JSON.stringify(notes, null, 2));

  return notes[idxNote];
};

const removeNote = async (noteId: string) => {
  const notes = await listNotes();
  const idxNote = notes.findIndex((note: NoteType) => note.id === noteId);

  if (idxNote === -1) return null;

  const [removeNote] = notes.splice(idxNote, 1);
  await fs.writeFile(notesPath, JSON.stringify(notes, null, 2));

  return removeNote;
};

const getDataStatistics = async () => {
  const notes = await listNotes();

  const result = getSummaryData(notes);
  return result;
};

const updArhivedStatus = async (noteId: string, body: NoteType) => {
  const notes = await listNotes();
  const idxNote = notes.findIndex((note: NoteType) => note.id === noteId);

  if (idxNote === -1) return null;

  notes[idxNote] = { id: noteId, ...notes[idxNote], ...body };
  await fs.writeFile(notesPath, JSON.stringify(notes, null, 2));

  return notes[idxNote];
};

const notes = {
  listNotes,
  addNote,
  getNoteById,
  updNote,
  removeNote,
  getDataStatistics,
  updArhivedStatus,
};
export default notes;
