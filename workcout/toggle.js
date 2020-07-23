var x = document.getElementsByClassName("util_main");
var y = document.getElementsByClassName('util_box')
var i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var k = this.nextElementSibling;
    if (k.style.display === "block") {
      k.style.display = "none";
    } else {
      k.style.display = "block";
    }
  });
}
