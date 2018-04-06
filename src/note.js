(function(exports) {
  var id = 1
  function Note(text) {
    this.text = text;
    this._id = id++;
  };
Note.prototype.showText = function () {
  return this.text;
};

Note.prototype.showId = function () {
  return this._id;
};
  exports.Note = Note;
})(this);
