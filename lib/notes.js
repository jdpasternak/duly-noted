const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const createNewNote = (body, notesArray) => {
  body.id = uniqid("note-");
  notesArray.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray)
  );
  return body;
};

const validateNote = (body) => {
  if (!body.title || typeof body.title !== "string") return false;
  if (!body.text || typeof body.text !== "string") return false;
  return true;
};

const deleteNote = (id, notesArray) => {
  notesArray.splice(
    notesArray.indexOf(notesArray.filter((note) => note.id === id)[0]),
    1
  );
  // notesArray = notesArray.filter((note) => note.id !== id);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray)
  );
  return notesArray;
};

module.exports = { createNewNote, validateNote, deleteNote };
