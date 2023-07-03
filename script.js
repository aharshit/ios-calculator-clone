let string='';
let buttons=document.getElementsByTagName('button');
  for (let button of buttons){
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      try{
      string=eval(string);
      document.getElementById("entryfield").value=string;}
      catch(err){
        alert('Invalid');
      }
    }
    else if(e.target.innerHTML=='AC'){
      string=''
      document.getElementById("entryfield").value=string;
    }
      else if(e.target.innerHTML=='DEL'){
      string=string.slice(0,-1);
      document.getElementById("entryfield").value=string;
      }
    else{
    console.log(e.target);
    string+=e.target.innerHTML;
    document.getElementById("entryfield").value=string;}
  })
  }
