import express from "express";
import {
  handleCreateNote,
  handleDeleteNote,
  handleGetAllNotes,
  handleGetNoteById,
  handleUpdateNote,
} from "../controllers/notes.controllers.js";

const router = express.Router();

// 👉 GET ALL NOTES        /notes
router.get("/", handleGetAllNotes);

// 👉 CREATE NEW NOTES     /notes/create
router.post("/create", handleCreateNote);

// 👉 GET NOTE BY ID       /notes/:noteId
router.get("/:noteId", handleGetNoteById);

// 👉 DELETE A NOTE        /notes/delete/:noteId
router.get("/delete/:noteId", handleDeleteNote);

// 👉 UPDATE A NOTE        /notes/edit/:noteId
router.post("/edit/:noteId", handleUpdateNote);

export default router;
