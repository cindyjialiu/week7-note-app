function testNoteDefaultsToHi(){
  var note = new Note("Hi");
  assert.isTrue(note.text === "Hi");
};

  testNoteDefaultsToHi();

function testshowText(){
  var note = new Note("Hello");
  assert.isTrue(note.showText() === "Hello");
};

  testshowText();
