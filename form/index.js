const subscribe = document.querySelector('#subscribe')
subscribe.addEventListener('click', function(){
    var subscribes = document.querySelector('#name').value;
    if(subscribes == ""){
        document.querySelector('p').innerHTML = "Enter correct info";
        document.querySelector('p').style.color = "red";

    }
    else document.querySelector('p').innerHTML = subscribes;

})
const messageInput = document.querySelector('#name');
messageInput.addEventListener('keydown', (event)=> {
    if(event.key == 'Enter'){
        event.preventDefault();
        var subscribes = document.querySelector('#name').value;
        if(subscribes == ""){
            document.querySelector('p').innerHTML = "Enter correct info";
            document.querySelector('p').style.color = "red";
    
        }
        else {
            document.querySelector('p').innerHTML = subscribes;
            document.querySelector('p').style.color = "black";
        
        }}
})


