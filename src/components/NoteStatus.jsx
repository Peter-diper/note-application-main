import Message from "./Message";

export default function NoteStatus({ notes }) {
  //drived state:
  const allNots = notes.length;
  const compeletedNotes = notes.filter((note) => note.completed).length;
  const unCompeletedNotes = allNots - compeletedNotes;

  if (!allNots)
    return (
      <Message>
        ℹ️ <span>No Notes has already been added.</span> <span>❌</span>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNots}</span>
      </li>
      <li>
        Copleted <span>{compeletedNotes}</span>
      </li>
      <li>
        open <span>{unCompeletedNotes}</span>
      </li>
    </ul>
  );
}
