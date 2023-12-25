let userInput=document.getElementById("user-input");

let history=[];

userInput.addEventListener("focus",function(){
    userInput.value="";
})

function record(){
    let userValue=userInput;
    history.push(userValue);
    console.log(history);
}

record();