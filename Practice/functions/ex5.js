// function with for loop iteration
function Message() {

    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

Message("Prasanna", "Ragavendra");