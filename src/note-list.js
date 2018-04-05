(function(exports) {
  function NoteList(list = []) {
    this.list = list;
  };

  NoteList.prototype.addNote = function (note) {
    return new NoteList(this.list.concat([note]))
  };
  exports.NoteList = NoteList;

  NoteList.prototype.createNote = function (text) {
    var note = new Note(text);
    return this.addNote(note);
  };
})(this);
