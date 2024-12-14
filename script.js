function calculateSum() {
    const numberInput = document.getElementById("numberInput").value;
    const number = parseInt(numberInput, 10);
    if (isNaN(number) || number < 0 || number > 1000000) {
        console.log("Invalid number")
    }
    else{
        const sum = (number * (number + 1)) / 2;
        console.log(`Sum of numbers up to ${number} is ${sum}`)
    }
}