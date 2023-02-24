
/*
Obeatow tracking script powered by Pritelmonkie - 
Open source iframe tracking.
(Learn more at https://pritelmonkie.me or visit https://obeatow.com and create your own feedback/support widget)
*/


document.getElementById('id').style.display = 'none';

var nonobform = document.getElementsByTagName('body')[0];

let site = document.getElementById('site');

let form = window.location.href + '?wdisplay=showform';

let key = document.getElementById('id');

var sendbug1 = document.createElement('script');

// div tag in which iframe will be added should have id attribute with value myDIV
// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(sendbug1);
sendbug1.setAttribute("src","https://plugin.obeatow.com/ob-form.js");

var htmltocanvas = document.createElement('script');

document.getElementsByTagName('body')[0].appendChild(htmltocanvas);
htmltocanvas.setAttribute("src", "https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.js")

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
//let value = params.some_key

var iframe2 = document.createElement('iframe');

// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(iframe2);
iframe2.setAttribute("style","height:1px;width:1px;display:none;");
iframe2.setAttribute("src","https://app.obeatow.com/current-plan?key=" + key.innerText + "&site=" + site.innerText + "&utmsource=" + params.utmsource + "&ref=" + params.ref);

var iframe3 = document.createElement('iframe');



setTimeout(() => {
  showdeafWidg()
}, 7000);







function showdeafWidg() {

window.addEventListener("message", event => {
let plan = event.data.plan;
let helpcenterlink = event.data.helpdesklink;
let tcount = event.data.tcount;

if (plan === 'Basic') {
  let message = '<img src="https://plugin.obeatow.com/wid-assets/ob-icon.png" style="width: 14px; height: 14px;"> Created with <a href="https://obeatow.com" target="_blank" style="color: black; text-decoration: underline;">Obeatow</a>';

  let bgcolor = event.data.color;
  let widtype = event.data.widtype;

if (widtype === 'support') {

  var widget1 = document.createElement('div');

// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(widget1);
widget1.setAttribute("style","position: fixed;bottom: 0;right: 0;");
widget1.innerHTML = `
<div style="display: none;" id="tcount">${tcount}</div>
<div style="display: none;" id="cplan">${plan}</div>
<style>
a {
  color: black;
}
p {
font-size: 12px;
font-family: arial;
}
.height {
  line-height: normal !important;
  font-family: arial !important;
}
h3 {

}
.obframe {
  width: 960px;
  height: 100%;
  overflow: hidden;
  border: none;
}
#hubspot-messages-iframe-container {
  display: none !important;
}
.center {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
}
.fixed-wrapper {
  position:absolute;
  bottom:0;
  left:0;
  width:30px;
  height:30px;
}
.fixed-wrapper .fixed {
  position:fixed;
}
.mdsg {
  margin-left: 5px;
  line-height: 200%;
}
.abutton {font-size: 23px !important; padding-top: 15px !important; padding-bottom: 15px !important; border: none !important; background-color: white !important; width: 100% !important; text-align: center !important; cursor: pointer !important;}
.abutton:hover {background-color: #cfedff !important;}
</style>
<script>

</script>
<div id="obwidget">
<div data-html2canvas-ignore id="obpop" style="position: relative; width: 200px; height: 340px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
<div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div> 
<br class="height" />
<h3 class="height" style="font-size: 20px; text-align: center;">How can we help you?</h3>
<br class="height" />
<br class="height" />
<br class="height" />
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; center; color: black;" id="changelog">What's new</button>
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; color: black;" onclick="showChat()" id="clink">Get help</button>
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; color: black;" onclick="showWidg()">Provide feedback</button>
<script>

</script>
<br class="height">

      <p id="water" class="waterm height">
       ${message}
      </p>
      <br class="height" />
      <p style="display: none;" id="sonly" class="height">
       Bug submitted
      </p>
    </div>
    <div data-html2canvas-ignore id="obpop1" style="position: relative; display: none; height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
    <h3 class="height" style="font-size: 20px">
          Send us feedback
    </h3>
        <br class="height" />
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <br class="height" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br class="height" />
        <label for="responset" style="font-size: 14px; font-family: arial">Response</label>
        <select onchange="" name="input5" id="responset" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;">
              <option value="bug">Bug in site</option>
              <option value="feedback">Feedback</option>
        </select>
<br class="height" />
<p>How was your experience?</p>
<p class="height" style="text-align: center;"><img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star1" onclick="star1()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star2" onclick="star2()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star3" onclick="star3()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star4" onclick="star4()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star5" onclick="star5()"></p>

<input type="number" value="1" id="starrating" style="display: none;">
<br class="height" />
        <label for="message" style="font-size: 14px; font-family: arial">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;"></textarea>
        <br class="height" />
        <button onclick="cdraw()" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 8px; border-radius: 5px;">
          Add screenshot
        </button>
        <br class="height" />
        <p class="height" style="display: none;" id="sonly">
             Content submitted successfully
        </p>
      <br class="height" />
      <p class="height">
       ${message}
      </p>
      <br class="height" />
      
    </div>
    <div id="obdraw" style="display: none; z-index: 999; ">
    <canvas id="canvas"></canvas>
    <style>

.nav{
    width: 310px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: .3;
    transition: opacity .5s;
}
.nav:hover{
    opacity: 1;
}

.clr{
    height: 30px;
    width: 30px;
    background-color: blue;
    border-radius: 50%;
    border: 3px solid rgb(214, 214, 214);
    transition: transform .5s;
}
.clr:hover{
    transform: scale(1.2);
}
.clr:nth-child(1){
    background-color: #000;
}
.clr:nth-child(2){
    background-color: #EF626C;
}
.clr:nth-child(3){
    background-color: #fdec03;
}
.clr:nth-child(4){
    background-color: #24d102;
}
.clr:nth-child(5){
    background-color: #fff;
}

button{
    border: none;
    outline: none;
    padding: .6em 1em;
    border-radius: 3px;
    background-color: #03bb56;
    color: #fff;
}
.save{
    background-color: #0f65d4;
}
    </style>
    <div class="nav" data-html2canvas-ignore>
        <div class="clr" data-clr="#000"></div>
        <div class="clr" data-clr="#EF626C"></div>
        <div class="clr" data-clr="#fdec03"></div>
        <div class="clr" data-clr="#24d102"></div>
        <div class="clr" data-clr="#fff"></div>
        <button class="clear">Clear</button>
        <button class="save">Submit</button>
    </div>
    </div>
    <br />
    <button type="text" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 14px; border-radius: 5px; margin-right: 15px; margin-bottom: 15px;" id="openw" onclick="toggl()">Help</button>
  </div>`;
}
else {
  var widget1 = document.createElement('div');

// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(widget1);
widget1.setAttribute("style","position: fixed;bottom: 0;right: 0;");
widget1.innerHTML = `
<div style="display: none;" id="tcount">${tcount}</div>
<div style="display: none;" id="cplan">${plan}</div>
<style>
a {
  color: black;
}
p {
font-size: 12px;
font-family: arial;
}
h3 {
font-family: arial;
}
.height {
  line-height: normal !important;
}
.obframe {
  width: 960px;
  height: 100%;
  overflow: hidden;
  border: none;
}
.center {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
}
#star1:hover { 
  transform: scale(1.2); 
}
#star2:hover { 
  transform: scale(1.2); 
}
#star3:hover { 
  transform: scale(1.2); 
}
#star4:hover { 
  transform: scale(1.2); 
}
#star5:hover { 
  transform: scale(1.2); 
}
.fixed-wrapper {
  position:absolute;
  bottom:0;
  left:0;
  width:30px;
  height:30px;
}
.fixed-wrapper .fixed {
  position:fixed;
}
.mdsg {
  margin-left: 5px;
  line-height: 200%;
}
.abutton {font-size: 23px !important; padding-top: 15px !important; padding-bottom: 15px !important; border: none !important; background-color: white !important; width: 100% !important; text-align: center !important; cursor: pointer !important;}
.abutton:hover {background-color: #cfedff !important;}

</style>
<script>

</script>
<div id="obwidget">

<div class="center">
<div data-html2canvas-ignore id="obpop" style="position: relative; height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
<div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
<h3 class="height" class="headt" style="font-size: 20px; text-align: center;">How was your experience?</h3>
<br class="height">
<br class="height">
<br class="height">
<p class="height" style="text-align: center;"><img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star1" onclick="star1()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star2" onclick="star2()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star3" onclick="star3()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star4" onclick="star4()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star5" onclick="star5()"></p>
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<input type="number" value="1" id="starrating" style="display: none;">
<br class="height" />
<br class="height" />
<br class="height" />
<script>

</script>
<p class="height" style="text-align: center;"></p>
<br>

      
      <br class="height" />
    </div>
    <div data-html2canvas-ignore id="obpop1" style="position: relative; display: none; height: 280px; margin-left: 10px; color: black; border: 1px solid white; padding: 5px; background-color: white; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
    <h3 class="height" style="font-size: 20px">
          Send us feedback
    </h3>
        <br class="height" />
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <br class="height" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br class="height" />
        <label for="responset" style="font-size: 14px; font-family: arial">Response</label>
        <select onchange="" name="input5" id="responset" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;">
              <option value="bug">Bug in site</option>
              <option value="feedback">Feedback</option>
        </select>
<br class="height" />

        <label for="message" style="font-size: 14px; font-family: arial">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;"></textarea>
        <br class="height" />
        <button onclick="cdraw()" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 8px; border-radius: 5px;">
          Add screenshot
        </button>
        <br class="height" />
        <p class="height" style="display: none;" id="sonly">
             Content submitted successfully
        </p>
      <br class="height" />
      
      <br class="height" />
      
    </div>
    <div id="obdraw" style="display: none; z-index: 999; ">
    <canvas id="canvas"></canvas>
    <style>

.nav{
    width: 310px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: .3;
    transition: opacity .5s;
}
.nav:hover{
    opacity: 1;
}

.clr{
    height: 30px;
    width: 30px;
    background-color: blue;
    border-radius: 50%;
    border: 3px solid rgb(214, 214, 214);
    transition: transform .5s;
}
.clr:hover{
    transform: scale(1.2);
}
.clr:nth-child(1){
    background-color: #000;
}
.clr:nth-child(2){
    background-color: #EF626C;
}
.clr:nth-child(3){
    background-color: #fdec03;
}
.clr:nth-child(4){
    background-color: #24d102;
}
.clr:nth-child(5){
    background-color: #fff;
}

button{
    border: none;
    outline: none;
    padding: .6em 1em;
    border-radius: 3px;
    background-color: #03bb56;
    color: #fff;
}
.save{
    background-color: #0f65d4;
}
    </style>
    <div class="nav" data-html2canvas-ignore>
        <div class="clr" data-clr="#000"></div>
        <div class="clr" data-clr="#EF626C"></div>
        <div class="clr" data-clr="#fdec03"></div>
        <div class="clr" data-clr="#24d102"></div>
        <div class="clr" data-clr="#fff"></div>
        <button class="clear">Clear</button>
        <button class="save">Submit</button>
    </div>
    </div>
    <br />
    <div class="center">
      <button type="text" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 4px; border-radius: 5px 0px 0px 5px; margin-bottom: 15px;" id="openw" onclick="toggl()"><img src="https://plugin.obeatow.com/wid-assets/feedback.png" style="width: 30px;" /></button>

</div>
  </div>`;
}

}
else if (plan === 'Pro') {
  let message = '';

  let bgcolor = event.data.color;
  let widtype = event.data.widtype;


  if (widtype === 'support') {

    var widget1 = document.createElement('div');
  
  // div tag in which iframe will be added should have id attribute with value myDIV
  document.getElementsByTagName('body')[0].appendChild(widget1);
  widget1.setAttribute("style","position: fixed;bottom: 0;right: 0;");
  widget1.innerHTML = `
<div style="display: none;" id="tcount">${tcount}</div>
<div style="display: none;" id="cplan">${plan}</div>
<style>
a {
  color: black;
}
p {
font-size: 12px;
font-family: arial;
}
.height {
  line-height: normal !important;
  font-family: arial !important;
}
h3 {

}
.obframe {
  width: 960px;
  height: 100%;
  overflow: hidden;
  border: none;
}
#hubspot-messages-iframe-container {
  display: none !important;
}
.center {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
}
.fixed-wrapper {
  position:absolute;
  bottom:0;
  left:0;
  width:30px;
  height:30px;
}
.fixed-wrapper .fixed {
  position:fixed;
}
.mdsg {
  margin-left: 5px;
  line-height: 200%;
}
.abutton {font-size: 23px !important; padding-top: 15px !important; padding-bottom: 15px !important; border: none !important; background-color: white !important; width: 100% !important; text-align: center !important; cursor: pointer !important;}
.abutton:hover {background-color: #cfedff !important;}
</style>
<script>

</script>
<div id="obwidget">
<div data-html2canvas-ignore id="obpop" style="position: relative; width: 200px; height: 340px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
<div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div> 
<br class="height" />
<h3 class="height" style="font-size: 20px; text-align: center;">How can we help you?</h3>
<br class="height" />
<br class="height" />
<br class="height" />
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; center; color: black;" id="changelog">What's new</button>
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; color: black;" onclick="showChat()" id="clink">Get help</button>
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; color: black;" onclick="showWidg()">Provide feedback</button>
<script>

</script>
<br class="height">

      <p id="water" class="waterm height">
       ${message}
      </p>
      <br class="height" />
      <p style="display: none;" id="sonly" class="height">
       Bug submitted
      </p>
    </div>
    <div data-html2canvas-ignore id="obpop1" style="position: relative; display: none; height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
    <h3 class="height" style="font-size: 20px">
          Send us feedback
    </h3>
        <br class="height" />
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <br class="height" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br class="height" />
        <label for="responset" style="font-size: 14px; font-family: arial">Response</label>
        <select onchange="" name="input5" id="responset" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;">
              <option value="bug">Bug in site</option>
              <option value="feedback">Feedback</option>
        </select>
<br class="height" />
<p>How was your experience?</p>
<p class="height" style="text-align: center;"><img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star1" onclick="star1()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star2" onclick="star2()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star3" onclick="star3()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star4" onclick="star4()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star5" onclick="star5()"></p>

<input type="number" value="1" id="starrating" style="display: none;">
<br class="height" />
        <label for="message" style="font-size: 14px; font-family: arial">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;"></textarea>
        <br class="height" />
        <button onclick="cdraw()" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 8px; border-radius: 5px;">
          Add screenshot
        </button>
        <br class="height" />
        <p class="height" style="display: none;" id="sonly">
             Content submitted successfully
        </p>
      <br class="height" />
      <p class="height">
       ${message}
      </p>
      <br class="height" />
      
    </div>
    <div id="obdraw" style="display: none; z-index: 999; ">
    <canvas id="canvas"></canvas>
    <style>

.nav{
    width: 310px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: .3;
    transition: opacity .5s;
}
.nav:hover{
    opacity: 1;
}

.clr{
    height: 30px;
    width: 30px;
    background-color: blue;
    border-radius: 50%;
    border: 3px solid rgb(214, 214, 214);
    transition: transform .5s;
}
.clr:hover{
    transform: scale(1.2);
}
.clr:nth-child(1){
    background-color: #000;
}
.clr:nth-child(2){
    background-color: #EF626C;
}
.clr:nth-child(3){
    background-color: #fdec03;
}
.clr:nth-child(4){
    background-color: #24d102;
}
.clr:nth-child(5){
    background-color: #fff;
}

button{
    border: none;
    outline: none;
    padding: .6em 1em;
    border-radius: 3px;
    background-color: #03bb56;
    color: #fff;
}
.save{
    background-color: #0f65d4;
}
    </style>
    <div class="nav" data-html2canvas-ignore>
        <div class="clr" data-clr="#000"></div>
        <div class="clr" data-clr="#EF626C"></div>
        <div class="clr" data-clr="#fdec03"></div>
        <div class="clr" data-clr="#24d102"></div>
        <div class="clr" data-clr="#fff"></div>
        <button class="clear">Clear</button>
        <button class="save">Submit</button>
    </div>
    </div>
    <br />
    <button type="text" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 14px; border-radius: 5px; margin-right: 15px; margin-bottom: 15px;" id="openw" onclick="toggl()">Help</button>
  </div>`;
}
else {
  var widget1 = document.createElement('div');

// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(widget1);
widget1.setAttribute("style","position: fixed;bottom: 0;right: 0;");
widget1.innerHTML = `
<div style="display: none;" id="tcount">${tcount}</div>
<div style="display: none;" id="cplan">${plan}</div>
<style>
a {
  color: black;
}
p {
font-size: 12px;
font-family: arial;
}
h3 {
font-family: arial;
}
.height {
  line-height: normal !important;
}
.obframe {
  width: 960px;
  height: 100%;
  overflow: hidden;
  border: none;
}
.center {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
}
#star1:hover { 
  transform: scale(1.2); 
}
#star2:hover { 
  transform: scale(1.2); 
}
#star3:hover { 
  transform: scale(1.2); 
}
#star4:hover { 
  transform: scale(1.2); 
}
#star5:hover { 
  transform: scale(1.2); 
}
.fixed-wrapper {
  position:absolute;
  bottom:0;
  left:0;
  width:30px;
  height:30px;
}
.fixed-wrapper .fixed {
  position:fixed;
}
.mdsg {
  margin-left: 5px;
  line-height: 200%;
}
.abutton {font-size: 23px !important; padding-top: 15px !important; padding-bottom: 15px !important; border: none !important; background-color: white !important; width: 100% !important; text-align: center !important; cursor: pointer !important;}
.abutton:hover {background-color: #cfedff !important;}

</style>
<script>

</script>
<div id="obwidget">

<div class="center">
<div data-html2canvas-ignore id="obpop" style="position: relative; height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
<div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
<h3 class="height" class="headt" style="font-size: 20px; text-align: center;">How was your experience?</h3>
<br class="height">
<br class="height">
<br class="height">
<p class="height" style="text-align: center;"><img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star1" onclick="star1()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star2" onclick="star2()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star3" onclick="star3()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star4" onclick="star4()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star5" onclick="star5()"></p>
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<input type="number" value="1" id="starrating" style="display: none;">
<br class="height" />
<br class="height" />
<br class="height" />
<script>

</script>
<p class="height" style="text-align: center;"></p>
<br>

      
      <br class="height" />
    </div>
    <div data-html2canvas-ignore id="obpop1" style="position: relative; display: none; height: 280px; margin-left: 10px; color: black; border: 1px solid white; padding: 5px; background-color: white; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
    <h3 class="height" style="font-size: 20px">
          Send us feedback
    </h3>
        <br class="height" />
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <br class="height" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br class="height" />
        <label for="responset" style="font-size: 14px; font-family: arial">Response</label>
        <select onchange="" name="input5" id="responset" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;">
              <option value="bug">Bug in site</option>
              <option value="feedback">Feedback</option>
        </select>
<br class="height" />

        <label for="message" style="font-size: 14px; font-family: arial">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;"></textarea>
        <br class="height" />
        <button onclick="cdraw()" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 8px; border-radius: 5px;">
          Add screenshot
        </button>
        <br class="height" />
        <p class="height" style="display: none;" id="sonly">
             Content submitted successfully
        </p>
      <br class="height" />
      
      <br class="height" />
      
    </div>
    <div id="obdraw" style="display: none; z-index: 999; ">
    <canvas id="canvas"></canvas>
    <style>

.nav{
    width: 310px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: .3;
    transition: opacity .5s;
}
.nav:hover{
    opacity: 1;
}

.clr{
    height: 30px;
    width: 30px;
    background-color: blue;
    border-radius: 50%;
    border: 3px solid rgb(214, 214, 214);
    transition: transform .5s;
}
.clr:hover{
    transform: scale(1.2);
}
.clr:nth-child(1){
    background-color: #000;
}
.clr:nth-child(2){
    background-color: #EF626C;
}
.clr:nth-child(3){
    background-color: #fdec03;
}
.clr:nth-child(4){
    background-color: #24d102;
}
.clr:nth-child(5){
    background-color: #fff;
}

button{
    border: none;
    outline: none;
    padding: .6em 1em;
    border-radius: 3px;
    background-color: #03bb56;
    color: #fff;
}
.save{
    background-color: #0f65d4;
}
    </style>
    <div class="nav" data-html2canvas-ignore>
        <div class="clr" data-clr="#000"></div>
        <div class="clr" data-clr="#EF626C"></div>
        <div class="clr" data-clr="#fdec03"></div>
        <div class="clr" data-clr="#24d102"></div>
        <div class="clr" data-clr="#fff"></div>
        <button class="clear">Clear</button>
        <button class="save">Submit</button>
    </div>
    </div>
    <br />
    <div class="center">
      <button type="text" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 4px; border-radius: 5px 0px 0px 5px; margin-bottom: 15px;" id="openw" onclick="toggl()"><img src="https://plugin.obeatow.com/wid-assets/feedback.png" style="width: 30px;" /></button>

</div>
  </div>`;
  }
  
  }

else if (plan === 'Business') {
  let message = '';

      
  let bgcolor = event.data.color;
  let widtype = event.data.widtype;


  if (widtype === 'support') {

    var widget1 = document.createElement('div');
  
  // div tag in which iframe will be added should have id attribute with value myDIV
  document.getElementsByTagName('body')[0].appendChild(widget1);
  widget1.setAttribute("style","position: fixed;bottom: 0;right: 0;");
  widget1.innerHTML = `
<div style="display: none;" id="tcount">${tcount}</div>
<div style="display: none;" id="cplan">${plan}</div>
<style>
a {
  color: black;
}
p {
font-size: 12px;
font-family: arial;
}
.height {
  line-height: normal !important;
  font-family: arial !important;
}
h3 {

}
.obframe {
  width: 960px;
  height: 100%;
  overflow: hidden;
  border: none;
}
#hubspot-messages-iframe-container {
  display: none !important;
}
.center {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
}
.fixed-wrapper {
  position:absolute;
  bottom:0;
  left:0;
  width:30px;
  height:30px;
}
.fixed-wrapper .fixed {
  position:fixed;
}
.mdsg {
  margin-left: 5px;
  line-height: 200%;
}
.abutton {font-size: 23px !important; padding-top: 15px !important; padding-bottom: 15px !important; border: none !important; background-color: white !important; width: 100% !important; text-align: center !important; cursor: pointer !important;}
.abutton:hover {background-color: #cfedff !important;}
</style>
<script>

</script>
<div id="obwidget">
<div data-html2canvas-ignore id="obpop" style="position: relative; width: 200px; height: 340px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
<div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div> 
<br class="height" />
<h3 class="height" style="font-size: 20px; text-align: center;">How can we help you?</h3>
<br class="height" />
<br class="height" />
<br class="height" />
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; center; color: black;" id="changelog">What's new</button>
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; color: black;" onclick="showChat()" id="clink">Get help</button>
<button class="abutton" style="font-size: 18px; padding-top: 15px; padding-bottom: 15px; border: none; background-color: white; width: 100%; text-align: center; color: black;" onclick="showWidg()">Provide feedback</button>
<script>

</script>
<br class="height">

      <p id="water" class="waterm height">
       ${message}
      </p>
      <br class="height" />
      <p style="display: none;" id="sonly" class="height">
       Bug submitted
      </p>
    </div>
    <div data-html2canvas-ignore id="obpop1" style="position: relative; display: none; height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
    <h3 class="height" style="font-size: 20px">
          Send us feedback
    </h3>
        <br class="height" />
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <br class="height" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br class="height" />
        <label for="responset" style="font-size: 14px; font-family: arial">Response</label>
        <select onchange="" name="input5" id="responset" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;">
              <option value="bug">Bug in site</option>
              <option value="feedback">Feedback</option>
        </select>
<br class="height" />
<p>How was your experience?</p>
<p class="height" style="text-align: center;"><img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star1" onclick="star1()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star2" onclick="star2()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star3" onclick="star3()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star4" onclick="star4()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="20" id="star5" onclick="star5()"></p>

<input type="number" value="1" id="starrating" style="display: none;">
<br class="height" />
        <label for="message" style="font-size: 14px; font-family: arial">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;"></textarea>
        <br class="height" />
        <button onclick="cdraw()" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 8px; border-radius: 5px;">
          Add screenshot
        </button>
        <br class="height" />
        <p class="height" style="display: none;" id="sonly">
             Content submitted successfully
        </p>
      <br class="height" />
      <p class="height">
       ${message}
      </p>
      <br class="height" />
      
    </div>
    <div id="obdraw" style="display: none; z-index: 999; ">
    <canvas id="canvas"></canvas>
    <style>

.nav{
    width: 310px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: .3;
    transition: opacity .5s;
}
.nav:hover{
    opacity: 1;
}

.clr{
    height: 30px;
    width: 30px;
    background-color: blue;
    border-radius: 50%;
    border: 3px solid rgb(214, 214, 214);
    transition: transform .5s;
}
.clr:hover{
    transform: scale(1.2);
}
.clr:nth-child(1){
    background-color: #000;
}
.clr:nth-child(2){
    background-color: #EF626C;
}
.clr:nth-child(3){
    background-color: #fdec03;
}
.clr:nth-child(4){
    background-color: #24d102;
}
.clr:nth-child(5){
    background-color: #fff;
}

button{
    border: none;
    outline: none;
    padding: .6em 1em;
    border-radius: 3px;
    background-color: #03bb56;
    color: #fff;
}
.save{
    background-color: #0f65d4;
}
    </style>
    <div class="nav" data-html2canvas-ignore>
        <div class="clr" data-clr="#000"></div>
        <div class="clr" data-clr="#EF626C"></div>
        <div class="clr" data-clr="#fdec03"></div>
        <div class="clr" data-clr="#24d102"></div>
        <div class="clr" data-clr="#fff"></div>
        <button class="clear">Clear</button>
        <button class="save">Submit</button>
    </div>
    </div>
    <br />
    <button type="text" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 14px; border-radius: 5px; margin-right: 15px; margin-bottom: 15px;" id="openw" onclick="toggl()">Help</button>
  </div>`;
}
else {
  var widget1 = document.createElement('div');

// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(widget1);
widget1.setAttribute("style","position: fixed;bottom: 0;right: 0;");
widget1.innerHTML = `
<div style="display: none;" id="tcount">${tcount}</div>
<div style="display: none;" id="cplan">${plan}</div>
<style>
a {
  color: black;
}
p {
font-size: 12px;
font-family: arial;
}
h3 {
font-family: arial;
}
.height {
  line-height: normal !important;
}
.obframe {
  width: 960px;
  height: 100%;
  overflow: hidden;
  border: none;
}
.center {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
}
#star1:hover { 
  transform: scale(1.2); 
}
#star2:hover { 
  transform: scale(1.2); 
}
#star3:hover { 
  transform: scale(1.2); 
}
#star4:hover { 
  transform: scale(1.2); 
}
#star5:hover { 
  transform: scale(1.2); 
}
.fixed-wrapper {
  position:absolute;
  bottom:0;
  left:0;
  width:30px;
  height:30px;
}
.fixed-wrapper .fixed {
  position:fixed;
}
.mdsg {
  margin-left: 5px;
  line-height: 200%;
}
.abutton {font-size: 23px !important; padding-top: 15px !important; padding-bottom: 15px !important; border: none !important; background-color: white !important; width: 100% !important; text-align: center !important; cursor: pointer !important;}
.abutton:hover {background-color: #cfedff !important;}

</style>
<script>

</script>
<div id="obwidget">

<div class="center">
<div data-html2canvas-ignore id="obpop" style="position: relative; height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
<div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
<h3 class="height" class="headt" style="font-size: 20px; text-align: center;">How was your experience?</h3>
<br class="height">
<br class="height">
<br class="height">
<p class="height" style="text-align: center;"><img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star1" onclick="star1()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star2" onclick="star2()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star3" onclick="star3()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star4" onclick="star4()"> <img src="https://plugin.obeatow.com/wid-assets/star.png" height="50" id="star5" onclick="star5()"></p>
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<br class="height">
<input type="number" value="1" id="starrating" style="display: none;">
<br class="height" />
<br class="height" />
<br class="height" />
<script>

</script>
<p class="height" style="text-align: center;"></p>
<br>

      
      <br class="height" />
    </div>
    <div data-html2canvas-ignore id="obpop1" style="position: relative; display: none; height: 280px; margin-left: 10px; color: black; border: 1px solid white; padding: 5px; background-color: white; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <div class="fixed-wrapper">
  <div class="fixed">
   <p class="mdsg">${message}</p>
  </div>
</div>
    <h3 class="height" style="font-size: 20px">
          Send us feedback
    </h3>
        <br class="height" />
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <br class="height" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br class="height" />
        <label for="responset" style="font-size: 14px; font-family: arial">Response</label>
        <select onchange="" name="input5" id="responset" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;">
              <option value="bug">Bug in site</option>
              <option value="feedback">Feedback</option>
        </select>
<br class="height" />

        <label for="message" style="font-size: 14px; font-family: arial">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;"></textarea>
        <br class="height" />
        <button onclick="cdraw()" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 8px; border-radius: 5px;">
          Add screenshot
        </button>
        <br class="height" />
        <p class="height" style="display: none;" id="sonly">
             Content submitted successfully
        </p>
      <br class="height" />
      
      <br class="height" />
      
    </div>
    <div id="obdraw" style="display: none; z-index: 999; ">
    <canvas id="canvas"></canvas>
    <style>

.nav{
    width: 310px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: .3;
    transition: opacity .5s;
}
.nav:hover{
    opacity: 1;
}

.clr{
    height: 30px;
    width: 30px;
    background-color: blue;
    border-radius: 50%;
    border: 3px solid rgb(214, 214, 214);
    transition: transform .5s;
}
.clr:hover{
    transform: scale(1.2);
}
.clr:nth-child(1){
    background-color: #000;
}
.clr:nth-child(2){
    background-color: #EF626C;
}
.clr:nth-child(3){
    background-color: #fdec03;
}
.clr:nth-child(4){
    background-color: #24d102;
}
.clr:nth-child(5){
    background-color: #fff;
}

button{
    border: none;
    outline: none;
    padding: .6em 1em;
    border-radius: 3px;
    background-color: #03bb56;
    color: #fff;
}
.save{
    background-color: #0f65d4;
}
    </style>
    <div class="nav" data-html2canvas-ignore>
        <div class="clr" data-clr="#000"></div>
        <div class="clr" data-clr="#EF626C"></div>
        <div class="clr" data-clr="#fdec03"></div>
        <div class="clr" data-clr="#24d102"></div>
        <div class="clr" data-clr="#fff"></div>
        <button class="clear">Clear</button>
        <button class="save">Submit</button>
    </div>
    </div>
    <br />
    <div class="center">
      <button type="text" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 4px; border-radius: 5px 0px 0px 5px; margin-bottom: 15px;" id="openw" onclick="toggl()"><img src="https://plugin.obeatow.com/wid-assets/feedback.png" style="width: 30px;" /></button>

</div>
  </div>`;
  }
}

document.getElementById("openw").onclick = function(){
  if (document.getElementById('obpop').style.display === 'block') {
    document.getElementById('obpop').style.display = 'none';
  }
  else if (document.getElementById('obpop1').style.display === 'block') {
    document.getElementById('obpop1').style.display = 'none';
  }
  else {
    document.getElementById('obpop').style.display = 'block';
  }
  }

  

});


}
