class Car{
    // constructor is a special function for classes
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
    // method
    getDescription(){
        return `this care is a  ${this.make} ${this.model} ${this.year}`;
    }
}
function showCar(make, model, year){
    let car = new Car(make, model, year);
    document.getElementById("output").innerText = car.getDescription();
}