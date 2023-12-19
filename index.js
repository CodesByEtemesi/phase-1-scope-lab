// Write your solution in this file!

var customerName = "bob";

function uppercaseCustomerName() {
   
    var customerName = "bob"
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  setBestCustomer();
  

var bestCustomer = 'not bob';

function overwriteBestCustomer(newBestCustomer) {
  // Modification
  bestCustomer = newBestCustomer;
}


console.log(bestCustomer); 

//function to overwrite the global variable
overwriteBestCustomer('Etemesi');

// Updated value of bestCustomer
const leastFavoriteCustomer = "Kilonzo";

// Function to attempt changing the const
function changeLeastFavoriteCustomer(newCustomer) {
  leastFavoriteCustomer = newCustomer;
}


console.log(leastFavoriteCustomer); // Output: Kilonzo
console.log(bestCustomer); 
console.log(bestCustomer);  
console.log(customerName);
