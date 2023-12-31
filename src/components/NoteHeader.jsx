import React from "react";
import Input from "./Input";

function NoteHeader({ search, setQuery }) {
  return (
    <div className="note-app__header">
      <h1 className="note-app__logo">Notes Web</h1>
      <div className="note-search">
        <Input
          value={search}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Search your notes.."
        />
      </div>
    </div>
  );
}

export default NoteHeader;
