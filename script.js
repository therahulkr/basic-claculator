let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let sv = '';
for(item of buttons){
     item.addEventListener('click',(e)=>{

          buttontext = e.target.innerText;
          console.log("pressed",buttontext);
          if(buttontext=='x'){
              buttontext = '*';
              sv += buttontext;
              screen.value = sv;
          }
          else if(buttontext=='C'){
              sv = "";
              screen.value = sv;
          }
          else if(buttontext=='='){
              sv = eval(screen.value);
              screen.value = sv;
          }
          else{
              sv += buttontext;
              screen.value = sv;
          }

     })

}

function displaytime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displaytime,1000);

