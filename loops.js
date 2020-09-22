// Standard ForLoop printing Odd Numbers

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

//While Loop
let i = 0; // condition evaluated ahead of time
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

//do-while loops executes atleast once
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

//for-in. Use this to iterate over the properties of an object

const person = {
  name: "Mosh",
  age: 30,
};
for (let key in person) {
  console.log(key, person[key]);
}

//for -of iterate over elements or items of an arrays
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

//Break and Continue
let i = 0;

while (i <= 10) {
  //   if (i === 5) break; // jump out of the loop
  if (i % 2 === 0) {
    i++;
    continue; // jump to the next iteration
  }
  console.log(i);
  i++;
}
