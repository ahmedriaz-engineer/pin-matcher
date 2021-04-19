var digit = document.getElementsByClassName("digit");
for(var i = 0; i < digit.length; i++){
    const button = digit[i];
    button.addEventListener("click", function(){
        document.getElementById("input-pin").value = document.getElementById("input-pin").value + this.innerText;
    })
    
}

const generatePin = document.getElementById("generate");
generatePin.addEventListener("click", function () {
    var pin = Math.random() * 10000 + "";
    var generatedPin = pin.split(".")[0];
    if (generatedPin.length == 4) {
        document.getElementById("display").value = generatedPin;
    }
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
})

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
})
