let progressBarEl = document.querySelector(".progressBar");
let progressValEl = document.querySelector(".progress-val");


let startVal = 0, 
      endVal = 100;

let progress =  setInterval(() => {
    startVal++;
    
    if(startVal == endVal){
        clearInterval(progress)
    }
    progressValEl.textContent = `${startVal} %`;
    progressBarEl.style.background = `conic-gradient(#0867DA ${startVal*3.6}deg, #ededed 0deg)`;
   
    if(startVal == 100){
        progressValEl.textContent="DONE";
       
    }

    
}, 100);

