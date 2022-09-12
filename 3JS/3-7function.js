BMI = (height, weight) => {
    const meter_height = height / 100;
    const result = weight / (meter_height * meter_height)
    return result;
}

console.log(BMI(170, 70));