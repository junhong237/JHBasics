var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var fahrenheit = input;
  var Celsius = (fahrenheit - 32) * (5 / 9);
  var myOutputValue = Celsius;
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var lengthOfTripKm = input;
  var lengthOfTripMiles = lengthOfTripKm / 0.62;
  var costPerLitre = 2.2;
  var petrolNeeded = lengthOfTripMiles / 9;
  var totalCost = petrolNeeded * costPerLitre;
  var myOutputValue = totalCost;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var averageNumberOfCustomers = input;
  var totalNumberOfDrinks = averageNumberOfCustomers * 2;
  var numberOfHalfBarrelKegs = totalNumberOfDrinks / 124;
  return numberOfHalfBarrelKegs;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var dataPerMonth = input;
  var postPaidDataPlan1999 = 19.99;
  var numberOfPlans = Math.ceil(dataPerMonth / 50);
  console.log(numberOfPlans);
  var totalCost = numberOfPlans * dataPerMonth * postPaidDataPlan1999;
  var costPerGb = totalCost / dataPerMonth;
  return costPerGb;
};
