(function(exports){

  function changeText(newText){
    var element = document.getElementById('app');
    console.log(element);
    element.innerHTML = newText
    }

  // window.onload = function(){
  //   changeText("howdy")
  // };
  //
  //
  // function NoteController(){
  //   var note = new Note("Favourite drink: seltzer");
  //   var emptyNoteList = new NoteList();
  //   var updatedNoteList = emptyNoteList.addNote(note);
  //   var noteListView = new NoteListView(updatedNoteList.list);
  //   var html = noteListView.viewNoteList();
  //   changeText(html);
  // }

  exports.changeText = changeText;
})(this);
