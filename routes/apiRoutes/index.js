const router = require("express").Router();
const notes = require("../../db/db.json");
const { createNewNote, validateNote } = require("../../lib/notes");

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

module.exports = router;
