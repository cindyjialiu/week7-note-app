(function(exports) {
  function testNoteDefaultsToHi(){
    var note = new Note("Hi");
    if (note.text !== "Hi") {
      throw new Error("Note doesn't have message Hi")
    }
  };

  testNoteDefaultsToHi();
})(this);

(function(exports) {
  function testshowText(){
    var note = new Note("Hello");
    if (note.showText() !== "Hello") {
      throw new Error("Note doesn't have message Hello")
    }
  };

  testshowText();
})(this);
