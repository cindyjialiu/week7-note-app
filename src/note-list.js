(function(exports) {
  function NoteList(list = []) {
    this.list = list;
  };

  NoteList.prototype.addNote = function (note) {
    return new NoteList(this.list.concat([note]))
  };
  NoteList.prototype.createNote = function (text) {
    var note = {text: text};
    return this.addNote(note);
  };

  exports.NoteList = NoteList;
})(this);
