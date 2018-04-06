(function(exports){

  function changeText(newText){
    var element = document.getElementById('app');
    element.innerHTML = newText
    }

  function changeMessage(newText){
    var element = document.getElementById('message');
    element.innerHTML = newText
    }

  exports.changeText = changeText;
  exports.changeMessage = changeMessage;
})(this);

(function(exports){
  function NoteController(noteList){
    var note = new Note("Favourite drink: seltzer");
    var updatedNoteList = noteList.addNote(note);
    var updatedNoteList1 = updatedNoteList.addNote(new Note("This is a link more than 20 characters long"));
    this.noteListView = new NoteListView(updatedNoteList1.list);
  }

  NoteController.prototype.getHtmlAndInsertIntoApp = function () {
    var apps = this.noteListView.viewNoteList();
    changeText(apps)
    var messages = this.noteListView.viewSingleNote();
    changeMessage(messages)
  }

  exports.NoteController = NoteController;
})(this)
