console.log($);

// $('#btn').click(() => {
//   console.log('clicked');
//   $('h2').toggle().css('color', 'red')
// })


$('#btn').on('click', () => {
  console.log('You Clicked on me...');
})

class Vehicle {
  constructor () {
    this.noOfWheels = 4;
  }
}

class Car extends Vehicle {
  #engineType; //private property(Encapsulation)
  constructor (maker, model, color) {
    super() //Calling parents constructor
    this.#engineType = 'Petrol'
    this.maker = maker
    this.model = model
    this.color = color
  }
  getCarDetails() {
    return `The car is ${this.maker} ${this.model} and color is ${this.color} and is ${this.#engineType}.`;
  }

}

let myCar = new Car('Tata', "Altroz", "Black")

console.log(myCar.getCarDetails());
console.log(myCar.noOfWheels);