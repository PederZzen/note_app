import Note from "@/components/note/page";
import getNotes from "@/functions/getNotes";
import NewNote from "./NewNote";
import FilterNotes from "./FilterNotes";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <section>
        <NewNote />
      </section>
      <section>{/* <FilterNotes /> */}</section>
      <section className="">
        {notes ? notes.map((note) => <Note key={note.id} note={note} />) : null}
      </section>
    </div>
  );
}
