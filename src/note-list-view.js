// (function(exports) {
//
// exports.viewNoteList = function (noteList) {
//     return "<ul>" + noteList.list.map(function(note){
//       return "<li><div>" + note.text + "</div></li>"
//     }).join("") + "</ul>"
//
// console.log(viewNoteList)
//   };
//
// })(this);


(function(exports) {
  function NoteListView(noteList = []){
    this.noteList = noteList
  }

  NoteListView.prototype.viewNoteList = function () {
    return "<ul>" + this.noteList.map(function(note){
      return "<li><div>" + note.text + "</div></li>"
    }).join("") + "</ul>"

  };

  exports.NoteListView = NoteListView
})(this);
