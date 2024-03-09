let percbtn = document.querySelector('#percbtn').value;
let Che = document.querySelector('#Che').value;
let Phy = document.querySelector('#Phy').value;
let Math = document.querySelector('#Math').value;
let Bio = document.querySelector('#Bio').value;
let grades = "";
let total = parseFloat(Che) + parseFloat(Phy) + parseFloat(Bio) + parseFloat(Math)

let percentage = (total/400) * 100 ;  

if (percentage <= 100 && percentage >= 80) {   
    grades = "A";  
  } else if ( percentage <= 79 && percentage >= 60) { 
    grades = "B"; 
  } else if (percentage <= 59 && percentage >= 40) { 
    grades = "C"; 
  } else { 
    grades = "F"; 
  } 

  if(Che==""||Phy==""||Math==""||Bio==""){
    document.querySelector("#display").innerHTML = "Please enter all the fields";
  } 
  else{ 
    if(percentage >= 39.5){
        document.querySelector("#display").innerHTML = `` 
    }
  }  

