import { useState } from "react";
import styles from "./form.module.css";
export default function Notes() {
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setNote(note);
  }

  return (
    <div className="float-child_2">
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            className="notesTextArea"
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter notes..."
            type="text"
          />
          <button className={styles.modernButton} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
