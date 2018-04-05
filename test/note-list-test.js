function testNoteListDefaultIsEmpty(){
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0);
};
  testNoteListDefaultIsEmpty();

function testaddNote(){
  var note = new Note();
  var noteList = new NoteList();
  assert.isTrue(noteList.addNote(note).list[0] === note);
};
  testaddNote();

function testcreateNote(){
  var noteList = new NoteList();
  assert.isTrue(noteList.createNote("hi").list[0].text === "hi");
};
  testcreateNote();
