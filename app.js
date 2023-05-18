document.addEventListener('DOMContentLoaded', amsAirbagCalculator);
document.addEventListener('DOMContentLoaded', amsSlingCalculator);

function amsAirbagCalculator(){

  // Find calculator
  const calculator = document.querySelector('#ams-airbag-load-calculator');

  // Check if calculator is on page
  if(calculator) {

    // Selecting elements
    var aircraftWeight = calculator.querySelector('input[name="airbag-load__aircraft-weight-in-tonnes"]');
    var centreOfGravityToAirbag = calculator.querySelector('input[name="airbag-load__centre-of-gravity-to-airbag-centre"]');
    var airbagToMainGear = calculator.querySelector('input[name="airbag-load__airbag-centre-to-main-landing-gear"]');
    var clockwiseMoment = calculator.querySelector('input[name="airbag-load__clockwise-airbag-turning-moment"]');
    var weightAtMainGear = calculator.querySelector('input[name="airbag-load__weight-at-main-landing-gear"]');
    var weightAtAirbagCentre = calculator.querySelector('input[name="airbag-load__weight-at-airbag-centre"]');

    // Adding event listeners
    aircraftWeight.addEventListener('input', updateValues);
    centreOfGravityToAirbag.addEventListener('input', updateValues);
    airbagToMainGear.addEventListener('input', updateValues);

    function updateValues() {
      // Calculation for 'airbag-load__clockwise-airbag-turning-moment'
      var airbagMoment = Number(aircraftWeight.value) * Number(centreOfGravityToAirbag.value);

      // Show message if required fields missing
      if(Number(aircraftWeight.value) == 0){
        clockwiseMoment.value = "'Aircraft weight' required for calculation";
      } else if(centreOfGravityToAirbag.value == 0) {
        clockwiseMoment.value = "'Centre of Gravity to Airbag' required for calculation";
      } else {
        // Display Calculated Value
        clockwiseMoment.value = airbagMoment.toFixed(2);
      }

      // Calculation for 'airbag-load__weight-at-main-landing-gear'
      var weightAtGear = Number(clockwiseMoment.value) / Number(airbagToMainGear.value);
      // Show message if required fields missing
      if(Number(aircraftWeight.value) == 0){
        weightAtMainGear.value = "'Aircraft weight' required for calculation";
      } else if(centreOfGravityToAirbag.value == 0) {
        weightAtMainGear.value = "'Centre of Gravity to Airbag' required for calculation";
      } else if(airbagToMainGear.value == 0) {
        weightAtMainGear.value = "'Airbag centre to Main Landing Gear' required for calculation";
      } else {
        // Display Calculated Value
        weightAtMainGear.value = weightAtGear.toFixed(2);
      }

      // Calculation for 'airbag-load__weight-at-airbag-centre'
      var weightAtCentre = Number(aircraftWeight.value) - weightAtGear;
      // Show message if required fields missing
      if(Number(aircraftWeight.value) == 0){
        weightAtAirbagCentre.value = "'Aircraft weight' required for calculation";
      } else if(centreOfGravityToAirbag.value == 0) {
        weightAtAirbagCentre.value = "'Centre of Gravity to Airbag' required for calculation";
      } else if(airbagToMainGear.value == 0) {
        weightAtAirbagCentre.value = "'Airbag centre to Main Landing Gear' required for calculation";
      } else {
        // Display Calculated Value
        weightAtAirbagCentre.value = (Math.ceil(weightAtCentre * 100) / 100).toFixed(2);
      }
    }

  }

}

function amsSlingCalculator(){

  // Find calculator
  const calculator = document.querySelector('#ams-sling-calculator');

  // Check if calculator is on page
  if(calculator) {

    // Selecting elements
    var aircraftWeight = calculator.querySelector('input[name="sling__aircraft-weight-in-tonnes"]');
    var centreOfGravityToSling = calculator.querySelector('input[name="sling__centre-of-gravity-to-sling-centre"]');
    var slingToMainGear = calculator.querySelector('input[name="sling__sling-airbag-centre-to-main-landing-gear"]');
    var clockwiseMoment = calculator.querySelector('input[name="sling__clockwise-sling-turning-moment"]');
    var weightAtMainGear = calculator.querySelector('input[name="sling__weight-at-main-landing-gear"]');
    var weightAtSlingCentre = calculator.querySelector('input[name="sling__weight-at-sling-centre"]');

    // Adding event listeners
    aircraftWeight.addEventListener('input', updateValues);
    centreOfGravityToSling.addEventListener('input', updateValues);
    slingToMainGear.addEventListener('input', updateValues);

    function updateValues() {
      // Calculation for 'airbag-load__clockwise-airbag-turning-moment'
      var slingMoment = Number(aircraftWeight.value) * Number(centreOfGravityToSling.value);

      // Show message if required fields missing
      if(Number(aircraftWeight.value) == 0){
        clockwiseMoment.value = "'Aircraft weight' required for calculation";
      } else if(centreOfGravityToSling.value == 0) {
        clockwiseMoment.value = "'Centre of Gravity to Sling' required for calculation";
      } else {
        // Display Calculated Value
        clockwiseMoment.value = slingMoment.toFixed(2);
      }

      // Calculation for 'airbag-load__weight-at-main-landing-gear'
      var weightAtGear = Number(clockwiseMoment.value) / Number(slingToMainGear.value);
      // Show message if required fields missing
      if(Number(aircraftWeight.value) == 0){
        weightAtMainGear.value = "'Aircraft weight' required for calculation";
      } else if(centreOfGravityToSling.value == 0) {
        weightAtMainGear.value = "'Centre of Gravity to Sling' required for calculation";
      } else if(slingToMainGear.value == 0) {
        weightAtMainGear.value = "'Sling Airbag centre to Main Landing Gear' required for calculation";
      } else {
        // Display Calculated Value
        weightAtMainGear.value = weightAtGear.toFixed(2);
      }

      // Calculation for 'airbag-load__weight-at-airbag-centre'
      var weightAtCentre = Number(aircraftWeight.value) - weightAtGear;
      // Show message if required fields missing
      if(Number(aircraftWeight.value) == 0){
        weightAtSlingCentre.value = "'Aircraft weight' required for calculation";
      } else if(centreOfGravityToSling.value == 0) {
        weightAtSlingCentre.value = "'Centre of Gravity to Sling' required for calculation";
      } else if(slingToMainGear.value == 0) {
        weightAtSlingCentre.value = "'Sling Airbag centre to Main Landing Gear' required for calculation";
      } else {
        // Display Calculated Value
        weightAtSlingCentre.value = (Math.ceil(weightAtCentre * 100) / 100).toFixed(2);
      }
    }

  }

}
