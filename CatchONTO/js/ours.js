//functions to highlight grammatical classes in the chapters 

function object(){
  var x=document.getElementsByClassName("red");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: red;";
  }  

  var objBtn=document.getElementById("objBtn");
  objBtn.innerHTML=`
  <span id="objBtn"><button type="button" onclick="objectBack()" id="ClassButton" class="object">Object Compl.</button></span>
  `;  
}  

function objectBack(){
  var x=document.getElementsByClassName("red");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var objBtn=document.getElementById("objBtn");
  objBtn.innerHTML=`
  <span id="objBtn"><button type="button" onclick="object()" id="ClassButton" class="object">Object Compl.</button></span>
  `;
}

function proper(){
  var x=document.getElementsByClassName("blue");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: blue;";
  }  

  var ProperBtn=document.getElementById("ProperBtn");
  ProperBtn.innerHTML=`
  <span id="ProperBtn"><button type="button" onclick="properBack()" id="ClassButton" class="properName">Proper Names</button></span>
  `;  
}  

function properBack(){
  var x=document.getElementsByClassName("blue");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var ProperBtn=document.getElementById("ProperBtn");
  ProperBtn.innerHTML=`
  <span id="ProperBtn"><button type="button" onclick="proper()" id="ClassButton" class="properName">Proper Names</button></span>
  `;
}

function movement(){
  var x=document.getElementsByClassName("lightBlue");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: lightseagreen;";
  }  

  var MoveBtn=document.getElementById("MoveBtn");
  MoveBtn.innerHTML=`
  <span id="MoveBtn"><button type="button" onclick="movementBack()" id="ClassButton" class="movement">Movement verbs</button></span>
  `;  
}  

function movementBack(){
  var x=document.getElementsByClassName("lightBlue");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var MoveBtn=document.getElementById("MoveBtn");
  MoveBtn.innerHTML=`
  <span id="MoveBtn"><button type="button" onclick="movement()" id="ClassButton" class="movement">Movement verbs</button></span>
  `;
}

function static(){
  var x=document.getElementsByClassName("green");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: darkgreen;";
  }  

  var StaticBtn=document.getElementById("StaticBtn");
  StaticBtn.innerHTML=`
  <span id="StaticBtn"><button type="button" onclick="staticBack()" id="ClassButton" class="static">Static verbs</button></span>
  `;  
}  

function staticBack(){
  var x=document.getElementsByClassName("green");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var StaticBtn=document.getElementById("StaticBtn");
  StaticBtn.innerHTML=`
  <span id="StaticBtn"><button type="button" onclick="static()" id="ClassButton" class="static">Static verbs</button></span>
  `;
}

function adj(){
  var x=document.getElementsByClassName("middleBlue");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: midnightblue;";
  }  

  var AdjBtn=document.getElementById("AdjBtn");
  AdjBtn.innerHTML=`
  <span id="AdjBtn"><button type="button" onclick="adjBack()" id="ClassButton" class="adj">Adjectives</button></span>
  `;  
}  

function adjBack(){
  var x=document.getElementsByClassName("middleBlue");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var AdjBtn=document.getElementById("AdjBtn");
  AdjBtn.innerHTML=`
  <span id="AdjBtn"><button type="button" onclick="adj()" id="ClassButton" class="adj">Adjectives</button></span>
  `;
}

//functions to highlight thematic classes in the chapters 

function body(){
  var x=document.getElementsByClassName("orange");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: orangered;";
  }  

  var BodyBtn=document.getElementById("BodyBtn");
  BodyBtn.innerHTML=`
  <span id="BodyBtn"><button type="button" onclick="bodyBack()" id="ClassButton" class="body">Body parts</button></span>
  `;  
}  

function bodyBack(){
  var x=document.getElementsByClassName("orange");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var BodyBtn=document.getElementById("BodyBtn");
  BodyBtn.innerHTML=`
  <span id="BodyBtn"><button type="button" onclick="body()" id="ClassButton" class="body">Body parts</button></span>
  `;
}

function needs(){
  var x=document.getElementsByClassName("yellow");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: yellow;";
  }  

  var NeedsBtn=document.getElementById("NeedsBtn");
  NeedsBtn.innerHTML=`
  <span id="NeedsBtn"><button type="button" onclick="needsBack()" id="NeedsButton" class="needs">Physical Needs</button></span>
  `;  
}  

function needsBack(){
  var x=document.getElementsByClassName("yellow");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var NeedsBtn=document.getElementById("NeedsBtn");
  NeedsBtn.innerHTML=`
  <span id="NeedsBtn"><button type="button" onclick="needs()" id="NeedsButton" class="needs">Physical Needs</button></span>
  `;
}

function states(){
  var x=document.getElementsByClassName("brown");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: rgb(65, 40, 20);";
  }  

  var StatesBtn=document.getElementById("StatesBtn");
  StatesBtn.innerHTML=`
  <span id="StatesBtn"><button type="button" onclick="statesBack()" id="ClassButton" class="state">Physical States</button></span>
  `;  
}  

function statesBack(){
  var x=document.getElementsByClassName("brown");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var StatesBtn=document.getElementById("StatesBtn");
  StatesBtn.innerHTML=`
  <span id="StatesBtn"><button type="button" onclick="states()" id="ClassButton" class="state">Physical States</button></span>
  `;
}

function materialism(){
  var x=document.getElementsByClassName("lightGreen");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: rgb(92, 192, 92);";
  }  

  var MaterialBtn=document.getElementById("MaterialBtn");
  MaterialBtn.innerHTML=`
  <span id="MaterialBtn"><button type="button" onclick="materialismBack()" id="ClassButton" class="materialism">Materialism</button></span>
  `;  
}  

function materialismBack(){
  var x=document.getElementsByClassName("lightGreen");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var MaterialBtn=document.getElementById("MaterialBtn");
  MaterialBtn.innerHTML=`
  <span id="MaterialBtn"><button type="button" onclick="materialism()" id="ClassButton" class="materialism">Materialism</button></span>
  `;
}

function slang(){
  var x=document.getElementsByClassName("grey");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: grey;";
  }  

  var SlangBtn=document.getElementById("SlangBtn");
  SlangBtn.innerHTML=`
  <span id="SlangBtn"><button type="button" onclick="slangBack()" id="ClassButton" class="slang">Slangs</button></span>
  `;  
}  

function slangBack(){
  var x=document.getElementsByClassName("grey");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var SlangBtn=document.getElementById("SlangBtn");
  SlangBtn.innerHTML=`
  <span id="SlangBtn"><button type="button" onclick="slang()" id="ClassButton" class="slang">Slangs</button></span>
  `;
}

function time(){
  var x=document.getElementsByClassName("pink");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: rgb(240, 78, 105);";
  }  

  var TimeBtn=document.getElementById("TimeBtn");
  TimeBtn.innerHTML=`
  <span id="TimeBtn"><button type="button" onclick="timeBack()" id="ClassButton" class="time">Expressions of Time</button></span>
  `;  
}  

function timeBack(){
  var x=document.getElementsByClassName("pink");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var TimeBtn=document.getElementById("TimeBtn");
  TimeBtn.innerHTML=`
  <span id="TimeBtn"><button type="button" onclick="time()" id="ClassButton" class="time">Expressions of Time</button></span>
  `;
}

function place(){
  var x=document.getElementsByClassName("purple");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: purple;";
  }  

  var PlaceBtn=document.getElementById("PlaceBtn");
  PlaceBtn.innerHTML=`
  <span id="PlaceBtn"><button type="button" onclick="placeBack()" id="ClassButton" class="place">Expressions of Place</button></span>
  `;  
}  

function placeBack(){
  var x=document.getElementsByClassName("purple");
  for (i = 0; i < x.length; i++) {
    x[i].style = "background-color: none;";
  } 

  var PlaceBtn=document.getElementById("PlaceBtn");
  PlaceBtn.innerHTML=`
  <span id="PlaceBtn"><button type="button" onclick="place()" id="ClassButton" class="place">Expressions of Place</button></span>
  `;
}