(function(exports) {

exports.viewNoteList = function (noteList) {
    return "<ul>" + noteList.list.map(function(note){
      return "<li><div>" + note.text + "</div></li>"
    }).join() + "</ul>"

  };

})(this);

test
