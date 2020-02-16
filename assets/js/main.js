function openNav() {
  var x = document.getElementById("cur");
  var y = document.getElementById('op');
  var z = document.getElementById('cl');

  if (x.style.display === "none") {
    x.style.display = "block";
    z.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    z.style.display = "none";
    y.style.display = "block";
  }
}