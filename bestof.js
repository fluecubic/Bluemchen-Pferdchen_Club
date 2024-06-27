//hide
var hide = document.getElementById("hide");
var titel = document.getElementById("titel");
var favicon = document.getElementById("favicon");

function hideit() {
  titel.innerHTML = "Schul-Cloud Brandenburg";
  favicon.href = "fav.icon/schulfavicon.ico"
  window.open();
  
}
hide.onclick = hideit;

// steves-head dreht sich zum mauszeiger
const rotatingElement = document.getElementById('stevesHead');
const rect = rotatingElement.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX - centerX;
  const y = e.clientY - centerY;
  const angle = Math.atan2(y, x) * 360 / Math.PI;
  rotatingElement.style.transform = `rotate(${angle}deg)`;
});
//Font
var allElements = document.getElementsByClassName("txt");

for (var i = 0; i < allElements.length; i++) {
  allElements[i].style.fontFamily = localStorage.getItem("Fontfamily");
}