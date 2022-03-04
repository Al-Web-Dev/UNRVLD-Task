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
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    var bottleIcon = acc[i].img;
    bottleIcon.classList.toggle("bottle__rotate");

  });
}
