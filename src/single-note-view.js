(function(exports){
  function SingleNoteView(note){
    this.singleNote = note
  }

  SingleNoteView.prototype.viewSingleNote = function () {
    return "<div>" +  this.singleNote.text + "</div>"
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
