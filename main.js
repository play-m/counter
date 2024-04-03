const no = document.getElementById('no');
const btn1 = document.getElementById("inc");
const btn2 = document.getElementById("dec");
const btn3 = document.getElementById("res");

let count = 0;

btn1.onclick = function(){
  count++

  no.innerText = count;
};

btn2.onclick = function(){
  count--

  no.innerText = count;
};

btn3.onclick = function() { 
  count = 0;

  no.innerText = count;
};