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

  function trim(message) {
    if(message.length >= 20){
      return message.slice(0,20)
    }else{
      return message
    }

  };

  NoteListView.prototype.viewNoteList = function () {
    return "<ul>" + this.noteList.map(function(note){
      return "<li><div>" + trim(note.text) + "</div></li>"
    }).join("") + "</ul>"

  };

  exports.NoteListView = NoteListView
})(this);
