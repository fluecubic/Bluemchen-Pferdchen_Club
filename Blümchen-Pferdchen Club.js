




  
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
  let max = 73; // Obergrenze
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
 let allElements = document.getElementsByClassName("txt")
 let selectFonts = document.getElementById("Select");
 let lastfont; 

function sakanaselect() {
 localStorage.setItem("Fontfamily","coolFont");
 setFont()
}

function squidgameselect() {
  localStorage.setItem("Fontfamily","squidgameFont");
  setFont() 
}

function wirewalkerselect() {
  localStorage.setItem("Fontfamily","wirewalker");
  setFont()
}

function minecraftselect() {
  localStorage.setItem("Fontfamily","minecraft");
  setFont()
  lastfont = selectFonts.value;
  }

function setFont() {
  for (var i = 0; i < allElements.length; i++) {
  allElements[i].style.fontFamily = localStorage.getItem("Fontfamily");
}
if (lastfont =! selectFonts.value) {
  window.location.reload()
}
lastfont = selectFonts.value;

}

   if (selectFonts.value == 0) {
      sakanaselect()
   } else if(selectFonts.value == 1) {
     squidgameselect()
   } else if(selectFonts.value == 2){
     wirewalkerselect()
   } else{
     minecraftselect()
   }



 
 //logbuch
 let seite = 0;
 let seite0 = "Club Treffen 1.8.24-3.8.24<br>🌍Location:<br>Bei Jonas in Worin<br>"+
 "💪Was machen:<br>Website tunen, Baden, Survival<br>👥Schon dabei:<br>"+
 "Jonas, Milo, Florian<br>📞Weitere Infos:<br>Ruf Jonas an";
 let seite1 = "Logbuch<br>Ränge:<br>5 Sterne:<br>Hannes, Paul, Milo, Jonas" +
 "<br>Richter:<br>Aaron<br>3 Sterne:<br>Jannik, Anton, Max im zoo<br>" +
 "2 Sterne:<br>Jonathan, Sjard, Helene, Mathilda"; 
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

