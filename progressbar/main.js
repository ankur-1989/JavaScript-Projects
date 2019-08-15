function method1(sec) {

let bar = document.querySelector('.bar');
 bar.style.transition = `${sec}s linear width`;
 bar.style.width = '100%';


}

function method2(sec) {
    let bar = document.querySelector('.bar');
    console.log(bar.style.width);
    let percent = 0; 

    let increment = () => {
    
     bar.style.width = percent + '%' ;
     percent++;

     if(percent > 100) {
         clearInterval(interval);
     } 
    }

    let interval = setInterval(increment, (sec*1000)/100);

   
}