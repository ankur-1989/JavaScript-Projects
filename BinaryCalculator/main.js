function add0(){
document.getElementById('res').innerHTML = document.getElementById('res').innerHTML==='undefined'? '0' : document.getElementById('res').innerHTML + '0';
}


  
function add1(){
document.getElementById('res').innerHTML = document.getElementById('res').innerHTML==='undefined'? '1' : document.getElementById('res').innerHTML + '1';
}

function add() {
  document.getElementById('res').innerHTML = 
    document.getElementById('res').innerHTML + '+'
}

function clr(){
  document.getElementById('res').innerHTML = "";
}

function sub() {
  document.getElementById('res').innerHTML = 
    document.getElementById('res').innerHTML + '-'
}

function mul() {
  document.getElementById('res').innerHTML = 
    document.getElementById('res').innerHTML + '*'
}

function div() {
  document.getElementById('res').innerHTML = 
    document.getElementById('res').innerHTML + '/'
}

function result() {
 
 let res = document.getElementById('res').innerHTML;
  let pos = res.indexOf(res.match(/[+-/*]/)[0]);
  let firstNumber = res.substr(0,pos);
  
  let secondNumber = res.substr(pos+1);
    
switch(res.match(/[+-/*]/)[0]){
  case '+': document.getElementById('res').innerHTML = Number(parseInt(firstNumber,2) + parseInt(secondNumber,2)).toString(2); break;
  case '-': document.getElementById('res').innerHTML = Number(parseInt(firstNumber,2) - parseInt(secondNumber,2)).toString(2); break;
  case '/': document.getElementById('res').innerHTML = Number(parseInt(firstNumber,2) / parseInt(secondNumber,2)).toString(2); break;
  case '*': document.getElementById('res').innerHTML = Number(parseInt(firstNumber,2) * parseInt(secondNumber,2)).toString(2); break;
}
  
}

