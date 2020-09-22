//Show number with EVEN or ODD next to it

function showNumbers(limit) {
  let i = 0;
  while (i <= limit) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
    i++;
  }
}

showNumbers(10);
