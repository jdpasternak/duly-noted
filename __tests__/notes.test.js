const { createNewNote, validateNote, deleteNote } = require("../lib/notes");
const fs = require("fs");

jest.mock("fs");

describe("createNewNote", () => {
  it("should create a new note", () => {
    const currentNotes = [
      {
        title: "note 1 title",
        text: "note 1 text",
        id: "123",
      },
      {
        title: "note 2 title",
        text: "note 2 text",
        id: "456",
      },
    ];

    const newNote = createNewNote(
      {
        title: "Note title",
        text: "Note text",
      },
      currentNotes
    );

    expect(newNote.title).toBe("Note title");
    expect(newNote.text).toBe("Note text");
    expect(currentNotes.length).toEqual(3);
  });
});

describe("validateNote", () => {
  it("should validate that a note has all required values", () => {
    const validNote = { title: "title", text: "text" };
    const invalidNote = { title: "title" };

    const result1 = validateNote(validNote);
    const result2 = validateNote(invalidNote);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});

describe("deleteNote", () => {
  it("should delete a note", () => {
    const currentNotes = [
      {
        title: "note 1 title",
        text: "note 1 text",
        id: "123",
      },
      {
        title: "note 2 title",
        text: "note 2 text",
        id: "456",
      },
    ];

    deleteNote("123", currentNotes);
    console.log(currentNotes);

    expect(currentNotes.length).toEqual(1);
  });
});
