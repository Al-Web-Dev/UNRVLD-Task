import testFunc from './Components/Accordian.js';

testFunc();

var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
 
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//TODO: animate bottle rotation on click
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function(event) {
//     var bottleIcon = acc[i].img;
//     bottleIcon.classList.toggle("bottle__rotate");

//   });
// }

//API fetch from Brewdog
// fetch('https://api.punkapi.com/v2/beers')
// .then(response => response.json())
// .then(data =>  
  
//   console.log(data.map(name)=> (

//   )
//   ));


