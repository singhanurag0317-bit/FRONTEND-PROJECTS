// Get the elements
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("cal-btn");
const resultDiv = document.getElementById("result");

// Calculate BMI on button click
calculateBtn.addEventListener("click", function () {
  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);

  // Validate input
  if ( heightCm <= 0) {
    resultDiv.textContent = "Please enter a valid height (in cm).";
    resultDiv.style.color = "red";
    return;
  }
  if ( weightKg <= 0) {
    resultDiv.textContent = "Please enter a valid weight (in kg).";
    resultDiv.style.color = "red";
    return;
  }

  // Convert to meters
  const heightM = heightCm / 100;

  // BMI formula
  const bmi = weightKg / (heightM * heightM);
  const roundedBmi = bmi.toFixed(2);

  // Determine category based on standard BMI ranges
  // (Underweight < 18.5, Normal 18.5-24.9, Overweight 25-29.9, Obesity ≥ 30) :contentReference[oaicite:0]{index=0}  
  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "orange";
  } else if (bmi < 25) {
    category = "Normal weight";
    color = "green";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "darkorange";
  } else {
    category = "Obese";
    color = "red";
  }

  // Display result, with color
  resultDiv.textContent = `Your BMI is ${roundedBmi} — ${category}.`;
  resultDiv.style.color = color;
});
