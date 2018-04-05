(function(){
  function testviewNoteList(){
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.viewNoteList() === "<ul></ul>");
  }

  testviewNoteList();
})();

(function(){
  function testviewNoteList(){
    var noteListView = new NoteListView([new Note("Java")]);
    assert.isTrue(noteListView.viewNoteList() === "<ul><li><div>Java</div></li></ul>");
  }

  testviewNoteList();
})();

(function(){
  function testviewNoteList(){
    var noteListView = new NoteListView([new Note("Java"), new Note("Ruby")]);
    assert.isTrue(noteListView.viewNoteList() === "<ul><li><div>Java</div></li><li><div>Ruby</div></li></ul>");
  }

  testviewNoteList();
})();
