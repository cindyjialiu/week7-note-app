function changeText(newText){
  var element = document.getElementById('app');
  console.log(element);
  element.innerHTML = newText
  }

window.onload = function(){
  changeText("howdy")
};
