function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters

    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category;

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        document.getElementById('bmi-result').textContent = `Your BMI is ${bmi} (${category}).`;
    } else {
        document.getElementById('bmi-result').textContent = "Please enter both weight and height!";
    }
}
