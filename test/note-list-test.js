function testNoteListDefaultIsEmpty(){
  var noteList1 = new NoteList();
  assert.isTrue(noteList1.list.length === 0);
};
  testNoteListDefaultIsEmpty();

function testaddNote(){
  var note = new Note("shopping list")
  var noteList2 = new NoteList()
  console.log(noteList2);
  console.log(noteList2.addNote(note));
  assert.isTrue(note.showText() === "shopping list");
};
  testaddNote();
