class Rama{
    display(){
        console.log('Rama is called');
    }
}
class Soma extends Rama{
    display(){
        console.log('Soma is called');
    }
}
let Beema=[new Rama(), new Soma()];
Beema.forEach(function(RaSoBe)
{
    RaSoBe.display();
});