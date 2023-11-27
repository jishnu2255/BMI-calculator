function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('result').innerText = "Please enter valid data";
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiResult = `Your BMI is ${bmi.toFixed(2)}`;
  
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = "underWeight";
    } else if (bmi < 25) {
      bmiCategory = "normal weight";
    } else if (bmi < 30) {
      bmiCategory = "overweight";
    } else {
      bmiCategory = "in  problem";
    }
  
    const result = `${bmiResult}. You are ${bmiCategory}.`;
    document.getElementById('result').innerText = result;
  }
  