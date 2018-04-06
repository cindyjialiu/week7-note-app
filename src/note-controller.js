(function(exports){

  function changeText(newText){
    var element = document.getElementById('app');
    element.innerHTML = newText
    }

  // window.onload = function(){
  //   changeText("howdy")
  // };
  //
  //
  // function noteController(){
  //   var note = new Note("Favourite drink: seltzer");
  //   var emptyNoteList = new NoteList();
  //   var updatedNoteList = emptyNoteList.addNote(note);
  //   var noteListView = new NoteListView(updatedNoteList.list);
  //   var html = noteListView.viewNoteList();
  //   changeText(html);
  // }

  exports.changeText = changeText;
})(this);

(function(exports){
  function NoteController(noteList){
    var note = new Note("Favourite drink: seltzer");
    var updatedNoteList = noteList.addNote(note);
    var updatedNoteList1 = updatedNoteList.addNote(new Note("This is a link more than 20 characters long"));
    this.noteListView = new NoteListView(updatedNoteList1.list);
  }

  NoteController.prototype.getHtmlAndInsertIntoApp = function () {
    var html = this.noteListView.viewNoteList();
    changeText(html)
  }
  exports.NoteController = NoteController;
})(this)
