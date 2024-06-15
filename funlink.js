function durchsicht(){
        this.style.opacity=0.7;
      }
      function undurchsicht(){
        this.style.opacity=1;
      }

     var funlink1 = document.getElementById("funlink1");
    funlink1.onmouseover = durchsicht;
    funlink1.onmouseout = undurchsicht;

      var funlink2 = document.getElementById("funlink2");
    funlink2.onmouseover = durchsicht;
    funlink2.onmouseout = undurchsicht;

      var funlink3 = document.getElementById("funlink3");
    funlink3.onmouseover = durchsicht;
    funlink3.onmouseout = undurchsicht;

      var funlink4 = document.getElementById("funlink4");
    funlink4.onmouseover = durchsicht;
    funlink4.onmouseout = undurchsicht;



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
