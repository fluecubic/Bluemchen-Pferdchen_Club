
   
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
 let allElements = document.getElementById("willkommen");

 function sakanaselect(){
 console.log("sakana selectet");
 allElements.style.fontfamily = "coolFont";
 }
 function squidgameselect(){
  console.log("squidgame selectet");
 allElements.style.fontfamily = "squidgameFont";
  }
  function wirewalkerselect(){
    console.log("wirewalker selectet");
    allElements.style.fontfamily = "wirewalker";
    }
 sakana.onclick = sakanaselect;
 squidgame.onclick = squidgameselect;
 wirewalker.onclick = wirewalkerselect;
 
 //logbuch
 let seite = 1;
 let seite1 = "Logbuch<br>Ränge:<br>5 Sterne:<br>Hannes, Paul, Milo,<br>Richter:<br>Aaron<br>4 Sterne:<br>Jonas<br>3 Sterne:<br>Jannik, Anton, Max im zoo<br> 2 Sterne:<br>Jonathan, Sjard, Helene, Mathilda";
 let seite2 = "seite 2";
 let seite3 = "seite 3";
 var arrowleft = document.getElementById("arrowleft");
 var arrowright = document.getElementById("arrowright");
 var logbuchtext = document.getElementById("logbuchtext");
 function seitevor(){ 
  seite++;
 
};
 function seitezuruck() { 
  seite--;
  
  };

 arrowleft.onclick = seitezuruck;
 arrowright.onclick = seitevor;

if (seite == 1) {
  logbuchtext.innerHTML = seite1;
  console.log("1");
}

if (seite == 2) {
  logbuchtext.innerHTML = seite2;
  console.log("2");
}

if (seite == 3) {
  logbuchtext.innerHTML = seite3;
  console.log("3");
}

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
