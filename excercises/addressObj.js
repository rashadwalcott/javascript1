// Create address object
// street
//city
//zipCode
//Create a function that shows the address objects and prints the key and values

const address = {
  street: "7520 Bell Blvd",
  city: "Oakland Gardens",
  zipCode: 11364,
};

function showAddress(address) {
  for (key in address) console.log(key, address[key]);
}

showAddress(address);
