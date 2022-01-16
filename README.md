# Duly Noted

## Description

Duly Noted is a full-stack web application that provides simple note-taking functionality. Add and delete notes that perist on a Heroku instance.

This project uses the following technologies:

- Node
- Express
- Jest (for testing)
- uniqid (for geneating unique IDs)
- Heroku (hosting)

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Tests](#tests)
[License](#license)

---

## Installation

The app is currently hosted on a Heroku instance, but if you want to run it locally, follow these instructions:

1. Download the source code.

2. In the root directory of the downloaded code, open a terminal and type `npm install` to install required dependencies.

3. With the terminal still open, type `node server.js` to start the server.

4. Connect to the server from a web browser by typing into the address bar `http://localhost:3001`.

## Usage

To use this application, follow these tips:

- On the home page, click **Get Started** to progress to the main application page.
- Click `Note title` or `Note text` to focus the cursor onto the respective text inputs, then type what you want your note to say.
- Click the save icon (<i class='fa fa-save'></i>) in the upper right-hand corner to save the text you've typed in.
- Click a note in the left-hand panel to view its text.
- If you want to add a new note and are viewing a note's text, click the plus icon (<i class='fa fa-plus'></i>) in the upper right-hand corner.
- Click the trashcan icon (<i class='fa fa-trash'></i>) next to a note in the left-hand panel to delete that note.

## Tests

The following tests were run to validate helper functions:

- createNewNote: should create a new note
- validateNote: should validate that a note has all required values
- deleteNote: should delete a note

## License

[![License MIT](https://img.shields.io/badge/license-MIT-informational)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Jake Pasternak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
