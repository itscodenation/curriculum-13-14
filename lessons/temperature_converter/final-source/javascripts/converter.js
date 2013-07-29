var convertedDegrees;
var convertedScale;

function convertFToC(degreesF){
  var degreesC = (degreesF - 32) * (5/9);
  return degreesC;
}

function convertCToF(degreesC){
  var degreesF = (degreesC * (9/5)) + 32;
  return degreesF;
}

function getNewTemperature(){
  var degrees = prompt("What is the temperature? (Enter a number in degrees)");
  var temperatureScale = prompt("What is the temperature scale are you using? (Enter f for Fahrenheit or c for Celsius)");
  console.log(temperatureScale);

  if (temperatureScale === "f" || temperatureScale === "F"){
    convertedDegrees = convertFToC(degrees).toFixed(2);
    convertedScale = "Celsius";
    message = degrees + " degrees "+ temperatureScale + " = " + convertedDegrees + " degrees " + convertedScale;

  }
  else if (temperatureScale === "c" || temperatureScale === "C"){
    convertedDegrees = convertCToF(degrees).toFixed(2);
    convertedScale = "Fahrenheit";
    message = degrees + " degrees "+ temperatureScale + " = " + convertedDegrees + " degrees " + convertedScale;
  }
  else {
    message = "Try again!";
  }
  $("#conversion").text(message);

}

$(function(){
  $("#newTemp").click(getNewTemperature);
});

