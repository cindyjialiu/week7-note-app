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
      console.log(note.showId);
      return "<li><div><a href='#" + note._id + "'" + ">" + trim(note.text) + "</a></div></li>"
    }).join("") + "</ul>"

  };

  NoteListView.prototype.viewSingleNote = function () {
    return this.noteList.map(function(note){
      console.log(note.showId);
      return "<div id='message" + note._id + "' class='hidden'>" + note.text + "</div>"
    }).join("") 

  };

  exports.NoteListView = NoteListView
})(this);
