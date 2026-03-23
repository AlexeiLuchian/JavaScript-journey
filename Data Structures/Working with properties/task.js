let car = {
    brand: "BMW",
    mileage: 268794,
    owner: "Jacob"
};


car.price = 9250;
// Add a "currency" property to the car object with a value of "USD"
car.currency = "USD";
// Delete the "owner" property from the car object
delete car.owner;

console.log(car)
