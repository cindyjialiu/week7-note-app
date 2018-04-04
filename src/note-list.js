(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.addNote = function (note) {
    return this.list.push(note);
  };
  exports.NoteList = NoteList;

  NoteList.prototype.createNote = function (text) {
    var note = new Note(text);
    this.addNote(note);
  };
})(this);
