import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

export default function App() {
  const [sortBy, setSortBy] = useState("latest");
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };

  // handle deleted notes
  const handleDeleteNote = (id) =>
    setNotes((prevNote) => prevNote.filter((n) => n.id !== id));

  const handleCompletedNote = (e) => {
    const noteId = +e.target.value;

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note,
      ),
    );
  };

  const onSort = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <div className="container">
      <NoteHeader notes={notes} onSort={onSort} sortBy={sortBy} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            onAddNote={handleAddNote}
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}
