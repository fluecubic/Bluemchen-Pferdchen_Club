var online = document.getElementById("online")
let namen = [];
if (namen.length > 0) {
   namen[namen.length++] = prompt("Name:") +"<br>";
   online.innerHTML = namen;
}
else{
  namen[0] = prompt("Name:") +"<br>";
  online.innerHTML = namen;
}
   
     //links werden durchsichtig wenn die maus drauf ist
      function durchsicht(){
        this.style.opacity=0.7;
      }
      function undurchsicht(){
        this.style.opacity=1;
      }

    var button = document.getElementById("button");
    button.onmouseover = durchsicht;
    button.onmouseout = undurchsicht;

    var funlinks = document.getElementById("funlinks");
    funlinks.onmouseover = durchsicht;
    funlinks.onmouseout = undurchsicht;

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

//sounds
  let sound;
  let min = 1; // Untergrenze
  let max = 45; // Obergrenze
  let zufallszahl;
  let audioContext;

  function playSound(){
  audioContext = new AudioContext();
   stop(sound);
   zufallszahl = Math.floor(Math.random() * (max - min + 1)) + min;
    sound = document.getElementById(zufallszahl);
    play(sound);
  }

  function stopSound() {
    audioContext = new AudioContext();
    stop(sound);
  }

  function play(audioElement) {
  audioContext.resume().then(() => {
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(audioContext.destination);
    audioElement.play();
  });
}

function stop(audioElement) {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
}
 button.oncontextmenu = stopSound;
 button.onclick = playSound;
 

 //font wählen
 var sakana = document.getElementById("sakana");
var squidgame = document.getElementById("squidgame");
var wirewalker = document.getElementById("wirewalker");
var allElements = document.getElementsByClassName("txt");

function sakanaselect() {
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.fontFamily = "coolFont";
  }
}

function squidgameselect() {
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.fontFamily = "squidgameFont";
  }
}

function wirewalkerselect() {
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.fontFamily = "wirewalker";
  }
}

sakana.onclick = sakanaselect;
squidgame.onclick = squidgameselect;
wirewalker.onclick = wirewalkerselect;
 
 //logbuch
 let seite = 0;
 let seite0 = "Logbuch<br>Ränge:<br>5 Sterne:<br>Hannes, Paul, Milo,<br>Richter:<br>Aaron<br>4 Sterne:<br>Jonas<br>3 Sterne:<br>Jannik, Anton, Max im zoo<br> 2 Sterne:<br>Jonathan, Sjard, Helene, Mathilda";
 let seite1 = "1";
 let seite2 = "2";
 let seite3 = "3";
 let seiten = [seite0,seite1,seite2,seite3];
 var arrowleft = document.getElementById("arrowleft");
 var arrowright = document.getElementById("arrowright");
 var logbuchtext = document.getElementById("logbuchtext");
 function seitevor(){ 
  seite++;
  console.log(seite);
  logbuchtext.innerHTML = seiten[seite];
  
};
 function seitezuruck() { 
  seite--;
  console.log(seite);
  logbuchtext.innerHTML = seiten[seite];
  };

 arrowleft.onclick = seitezuruck;
 arrowright.onclick = seitevor;
 
 logbuchtext.innerHTML = seiten[seite];
 

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
