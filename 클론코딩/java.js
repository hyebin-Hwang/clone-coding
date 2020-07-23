var x = document.getElementsByClassName("Sj_01");
var i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let k = x.childNodes;
    if (k.style.display === "block") {
      k.style.display = "none";
    } else {
      k.style.display = "block";
    }
  });
}
