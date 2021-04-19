// digit input.
var digit = document.getElementsByClassName("digit");
for(var i = 0; i < digit.length; i++){
    const button = digit[i];
    button.addEventListener("click", function(){
        document.getElementById("input-pin").value = document.getElementById("input-pin").value + this.innerText;
    })   
}

// // < button handler(বাকি)
// const backspace = document.getElementById("backspace");
//     backspace.addEventListener("click", function(){
//         var value = document.getElementById("input-pin").value;
//         var lastValue = value.length-1;
//         document.getElementById("input-pin").value = lastValue;
//     })

// C button handler
const clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    document.getElementById("input-pin").value = "";
})

// pin generate.
function getPin(){
    var pin = Math.random() * 10000 + "";
    var generatedPin = pin.split(".")[0];
   
   if (generatedPin.length == 4) {
       document.getElementById("display").value = generatedPin;
   }
   else{
       console.log("less than 4", generatedPin);
       getPin();
   }
}


const generatePin = document.getElementById("generate");
generatePin.addEventListener("click", function () {
    //  var pin = Math.random() * 10000 + "";
    //  var generatedPin = pin.split(".")[0];
    
    // if (generatedPin.length == 4) {
    //     document.getElementById("display").value = generatedPin;
    // }
    // else{
    //     document.getElementById("display").value = "Please generate again."
    // }
    getPin();
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
})

// submit button handler.
const submit = document.getElementById("submit");
const inputPin = document.getElementById("input-pin").value;
submit.addEventListener("click", function(){
    
    if(document.getElementById("display").value == document.getElementById("input-pin").value && document.getElementById("display").value !== ""){
        document.getElementById("right").style.display = "block";
        document.getElementById("wrong").style.display= "none";
    }
    else{
        document.getElementById("wrong").style.display= "block";
        document.getElementById("right").style.display = "none";
    }
    document.getElementById("input-pin").value = "";
    document.getElementById("display").value = "";
})
