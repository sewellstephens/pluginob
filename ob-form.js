/*
Obeatow tracking script powered by Pritelmonkie - 
Open source iframe tracking.
(Learn more at https://pritelmonkie.me or visit https://obeatow.com and create your own feedback/support widget)
*/





function sendbug(){

   

  let id2 = document.getElementById('id').innerText;
  let input1 = document.getElementById('email').value;
  let input2 = document.getElementById('message').value;
  let input3 = window.location.href
  let input5 = document.getElementById('responset').value;
  var radios = document.getElementsByName('rating');
  

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {

if (input1.includes('@')) {
html2canvas(document.getElementsByTagName('body')[0]).then(function(canvas) {
        var data2 = canvas.toDataURL('image/png');
postMessage({
   "key": id2,
   "input3": input3,
   "input2": input2,
   "input5": input5,
   "input1": input1,
   "starrating": radios[i].value,
   "screenofpage": data2,
   "drawingonpage": "null"
})


  document.getElementById('sonly').style.display = 'block';
});

}
  }
}

}
function showWidg() {
document.getElementById("obpop").style.display = 'none';
document.getElementById("obpop1").style.display = 'block';
}
function toggl() {
if (document.getElementById("obpop1").style.display = 'block') {
document.getElementById("obpop1").style.display = 'none';
}
else if (document.getElementById("obpop").style.display = 'block') {
document.getElementById("obpop").style.display = 'none';
}
else {
  document.getElementById('obpop').style.display = 'block';
}
}
function cdraw() {
document.getElementById("obdraw").style.display = 'block';
let canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let ctx = canvas.getContext("2d")
ctx.lineWidth = 5

let prevX = null
let prevY = null

let draw = false

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {

    
  saveBtn.innerHTML = 'Sending...';
    let data = canvas.toDataURL("image/png")
      let id2 = document.getElementById('id').innerText;
  let input1 = document.getElementById('email').value;
  let input2 = document.getElementById('message').value;
  let input3 = window.location.href
  let input5 = document.getElementById('responset').value;
  let planname = document.getElementById("cplan").innerText;
  let ptcount = document.getElementById("tcount").innerText;

if (input1.includes('@')) {
html2canvas(document.getElementsByTagName('body')[0], {
  width: 1920,
  height: 980
}).then(function(canvas) {
        var data2 = canvas.toDataURL('image/png');
var radio = document.getElementById('starrating').value;

var iframe3 = document.createElement('iframe');
  
document.getElementsByTagName('body')[0].appendChild(iframe3);
iframe3.setAttribute("style","height:1px;width:1px;display:none;");
iframe3.setAttribute("src","https://plugin.obeatow.com/ob-send");
iframe3.setAttribute("id","sendfetch");


window.addEventListener("message", event => {


    
 

    let msgr = `Email: ${input1}
    Page: ${input3}
    Type: ${input5}
    Rating: ${radio}
    Message: ${input2}
    `

    let data3 = {
      "email": document.getElementById('email').value, 
      "realmessage": document.getElementById('message').value,
      "message": msgr,
      "url": input3,
      "type": input5,
      "key": id2,
      "screenofpage": data2,
      "starrating": radio,
      "siteid": "ob-ftgyhuijihuygtfrfgyh"
    }

    if (planname === 'Basic') {
      if (Number(ptcount) < 100) {
        
var iframein = document.createElement('iframe');

        document.getElementsByTagName('body')[0].appendChild(iframein);
iframein.setAttribute("style","height:1px;width:1px;display:none;");
iframein.setAttribute("src","https://app.obeatow.com/form-submit-api?key=" + key.innerText + "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input5=" + input5 + "&starrating=" + radio);

setInterval(() => {
if (event.data === 'loaded success') {

  postMessage(data3, "*");
console.log(event.data);
}
else {
 console.log("not ready");
}
}, 500);
setTimeout(() => {
  saveBtn.innerHTML = 'Sent';
}, 5000);

        
      }
      else {
        console.error('Quota reached');
      }
    }
    else if (planname === 'Pro') {
      if (Number(ptcount) < 500) {
        /*var iframein = document.createElement('iframe');

        document.getElementsByTagName('body')[0].appendChild(iframein);
iframein.setAttribute("style","height:1px;width:1px;display:none;");
iframein.setAttribute("src","https://app.obeatow.com/form-submit-api?key=" + key.innerText + "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input5=" + input5 + "&starrating=" + radio);
*/
document.getElementById('sendfetch').contentWindow.postMessage("test", "*");



setTimeout(() => {
  saveBtn.innerHTML = 'Sent';
}, 5000);
      }
      else {
        console.error('Quota reached');
      }
    }
    else if (planname === 'Business') {
      if (Number(ptcount) < 10000) {
        var iframein = document.createElement('iframe');

        document.getElementsByTagName('body')[0].appendChild(iframein);
iframein.setAttribute("style","height:1px;width:1px;display:none;");
iframein.setAttribute("src","https://app.obeatow.com/form-submit-api?key=" + key.innerText + "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input5=" + input5 + "&starrating=" + radio);

postMessage(data3, "*");

setTimeout(() => {
  saveBtn.innerHTML = 'Sent';
}, 5000);        


      }
      else {
        console.error('Quota reached');
      }
    }
    else {
      console.error('Unable to retrieve plan');
    }

  



});
})
}
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", function(e){
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let mouseX = e.clientX
    let mouseY = e.clientY
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke()

    prevX = e.clientX
    prevY = e.clientY
})
}
function showChat() {
  document.getElementById("hubspot-messages-iframe-container").setAttribute("style", "display: block !important");
  document.getElementById("obpop").style.display = 'none';
  document.getElementById("obpop1").style.display = 'none';
  window.HubSpotConversations.widget.open();
}
function star1() {
  document.getElementById("star1").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
  document.getElementById("star2").src = "https://plugin.obeatow.com/wid-assets/star.png";
   document.getElementById("star3").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("star4").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("star5").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("starrating").value = "1";
    document.getElementById("obpop").style.display = 'none';
document.getElementById("obpop1").style.display = 'block';
  }
  function star2() {
      document.getElementById("star1").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
  document.getElementById("star2").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
  document.getElementById("star3").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("star4").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("star5").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("starrating").value = "2";
    document.getElementById("obpop").style.display = 'none';
document.getElementById("obpop1").style.display = 'block';
    
  }
  function star3() {
    document.getElementById("star1").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
  document.getElementById("star2").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star3").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star4").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("star5").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("starrating").value = "3";
    document.getElementById("obpop").style.display = 'none';
document.getElementById("obpop1").style.display = 'block';
  }
  function star4() {
    document.getElementById("star1").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
  document.getElementById("star2").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star3").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star4").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star5").src = "https://plugin.obeatow.com/wid-assets/star.png";
    document.getElementById("starrating").value = "4";
    document.getElementById("obpop").style.display = 'none';
document.getElementById("obpop1").style.display = 'block';
  }
  function star5() {
    document.getElementById("star1").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
  document.getElementById("star2").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star3").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star4").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("star5").src = "https://plugin.obeatow.com/wid-assets/star-full.png";
    document.getElementById("starrating").value = "5";
    document.getElementById("obpop").style.display = 'none';
document.getElementById("obpop1").style.display = 'block';
  }