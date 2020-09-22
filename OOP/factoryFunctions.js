// Object -oriented Programming (OOP)
// OOP is a style of programming where we see a program
//as a collection of objects that talk to eachother in order to perform a function

//Factory function produces objects
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
