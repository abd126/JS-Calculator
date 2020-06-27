function getNumber(num){
 
    var result = document.getElementById("res");
    result.value += num;
}

function clearBtn(){
    var result = document.getElementById("res");
    result.value = " "
}
function backBtn() {
    var result = document.getElementById("res");
    result.value = result.value.slice(0,-1);
}

function getResult(){
    var result = document.getElementById("res");
    result.value = eval(result.value);

}
