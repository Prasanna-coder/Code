function Engine(){ //Creating a constructor function
    this.Petrol='Petrol Engine';
    throw new Error("You cannot create an instance of Abstract Class");  
}
Engine.prototype.display=function(){
    return `Engine is ${this.Petrol}`;
}
function Motar(Petrol){ //Creating a constructor function
    this.Petrol=Petrol;
}
//Creating object without using the function constructor 
Motar.prototype=Object.create(Engine.prototype);
let E = new Motar('Petrol');
console.log(E.display());