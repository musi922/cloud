let value=document.querySelector('#value span')
const negative=document.querySelector("#negative")
const positive=document.querySelector('#positive')
const start=document.querySelector('#star')
const restart=document.querySelector('#res')

let isCounting = false

positive.addEventListener('click',function (e){
    value.innerText = Number(value.innerText) + 1
})
negative.addEventListener('click',function (e){
    if(Number(value.innerText) > 0) value.innerText = Number(value.innerText) - 1
})
restart.addEventListener('click',function (e){
    value.innerText = 0
})


function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}



start.addEventListener('click', (e)=>{

    
    if(Number(value.innerText > 0)){
       
        e.target.innerText = 'STOP'

    const myInterval = setInterval(myTimer, 1000);
    function myTimer(){
        if (Number(value.innerText > 0) )value.innerText = Number(value.innerText) - 1
        else if (Number(value.innerText == 0)){  clearInterval(myInterval); e.target.innerText = 'START'; }
        else e.target.innerText = 'START'
    }
    }
    
  
})





