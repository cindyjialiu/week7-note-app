(function(){
  function testviewNoteList(){
    var noteList = new NoteList();
    assert.isTrue(viewNoteList(noteList) === "<ul></ul>");
  }

  testviewNoteList();
})();

(function(){
  function testviewNoteList(){
    var noteList = new NoteList([new Note("Java")]);
    assert.isTrue(viewNoteList(noteList) === "<ul><li><div>Java</div></li></ul>");
  }

  testviewNoteList();
})();
