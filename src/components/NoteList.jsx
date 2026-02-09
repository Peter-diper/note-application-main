export default function NoteList({ notes, onDelete, onComplete, sortBy }) {
  let filteredNotes = notes;

  if (sortBy === "earliest")
    filteredNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    );
  if (sortBy === "latest")
    filteredNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  if (sortBy === "completed")
    filteredNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed),
    );

  return (
    <div className="note-list">
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

function NoteItem({ note, onDelete, onComplete }) {
  // date option
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? " completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            onChange={onComplete}
            value={note.id}
            name={note.id}
            id={note.id}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-us", option)}
      </div>
    </div>
  );
}
