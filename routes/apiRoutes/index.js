const router = require("express").Router();
const notes = require("../../db/db.json");
const { createNewNote, validateNote, deleteNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  if (!validateNote(req.body)) res.sendStatus(400);
  else {
    createNewNote(req.body, notes);
    res.json(req.body);
  }
});

router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id, notes);
  res.send(`Note with ID ${req.params.id} deleted.`);
});

module.exports = router;
