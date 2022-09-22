alert("Hi, thanks for visited my web");

const masuk = confirm("You want next ?");

if(masuk){
    const name9 = prompt("umm.. whats your name ?");
    alert(`Hallo ${name9} my name is fajar`);
}else{
    alert("Thanks fo visited");
}
alert("Have fun :)");




let result=document.getElementById("inputext");

let calculate = (number) => {
    result.value+=number;
}
let Result = () => {
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("Enter the valid input");
    }
}

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0,-1);

}