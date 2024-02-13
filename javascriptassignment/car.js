const cars = ["bmw", "maruti","nexon","wagonr"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
cars.splice(2,0,"Dzire");
console.log(cars);
