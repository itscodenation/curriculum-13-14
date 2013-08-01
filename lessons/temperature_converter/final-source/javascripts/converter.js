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

function convertTemperature(){
  var degrees = $("#degrees").val();
  var temperatureScale = $("#temperature-scale").val();

  if (temperatureScale === "F"){
    convertedDegrees = convertFToC(degrees).toFixed(1);
    convertedScale = "Celsius";
  }
  else {
    convertedDegrees = convertCToF(degrees).toFixed(1);
    convertedScale = "Fahrenheit";
  }

  message = "Your converted temperature is " + convertedDegrees + "° " + convertedScale;
  $("#conversion").text(message);

  changeBackground();
}

// DON'T TOUCH THIS
function changeBackground(){
  var degreesF;
  if (convertedScale === "Celsius"){
    degreesF = convertCToF(convertedDegrees);
  }
  else {
    degreesF = convertedDegrees;
  }

  if(degreesF <= 40){
    $("body").css("background-image","url('img/snow.jpg')");
  }
  else if (degreesF <= 60){
    $("body").css("background-image","url('img/fall.jpg')");
  }
  else if (degreesF <= 80){
    $("body").css("background-image","url('img/spring.jpg')");
  }
  else if (degreesF <= 110){
    $("body").css("background-image","url('img/beach.jpg')");
  }
  else {
    $("body").css("background-image","url('img/volcano.jpg')");
  }


}

$(function(){
  $("#convert-button").click(convertTemperature);
});

