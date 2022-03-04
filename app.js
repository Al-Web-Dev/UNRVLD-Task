// Animate the accordian
var accordianButton = document.getElementsByClassName("accordian");
var i;

for (i=0; 1 < accordianButton.length; i++) {
  accordianButton[i].addEventListener('click', function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


