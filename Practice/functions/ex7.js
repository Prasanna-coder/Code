//function returning a function
function multiple(x) {

    function fn(y) // here i'm passing the value at last
    {
        return x * y;
    }
    
    return fn; // multiplied value will comes in this loop
}

var t = multiple(3);
console.log(t(2)); // returns 6
console.log(t(3)); // returns 9