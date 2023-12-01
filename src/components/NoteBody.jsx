import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notesAll, notesArchive, setNotes }) {
  return (
    <div className="note-app__body">
      <NoteInput setNotes={setNotes} />
      <NoteList label="My Notes" setNotes={setNotes} notes={notesAll} />
      <NoteList
        label="Archives"
        setNotes={setNotes}
        notes={notesArchive}
      />
    </div>
  );
}

export default NoteBody;
