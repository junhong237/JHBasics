var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "hello " +
    input +
    "! " +
    input +
    " is an awesome name. Great to meet you, " +
    input +
    "!";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  //define input as distanceInKm
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = distanceInMiles;
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var convertKmToMiles = function (distanceInMiles) {
    var distanceInKm = input;
    var distanceInMiles = distanceInKm * 0.62;
    var myOutputValue = distanceInMiles;
    return myOutputValue;
  };
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
