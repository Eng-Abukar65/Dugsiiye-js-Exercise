//methods in objects
let car = {
    make:"Ferrari",
    made: "Purosangue",
    year: 2024,
    start: function(){
        console.log("the " + this.name + " is started");
        

    }

}

car.name = "car"
console.log(car.start());







