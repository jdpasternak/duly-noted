const fs = require("fs");
const path = require("path");

const createNewNote = (body, notesArray) => {
  notesArray.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray)
  );
};

const validateNote = (body) => {
  if (!body.title || typeof body.title !== "string") return false;
  if (!body.text || typeof body.text !== "string") return false;
  return true;
};

module.exports = { createNewNote, validateNote };
