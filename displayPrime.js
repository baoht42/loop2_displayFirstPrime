//ham kiem tra so nguyen to
function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}


function countPrime(count) {
    let arrayPrime = [];
    let currentNumber = 2;

    while (arrayPrime.length < count) {

        if (isPrime(currentNumber)) {
            arrayPrime.push(currentNumber);
        }
        currentNumber++;

    }
    return arrayPrime;
}

const count20 = countPrime(20);
document.write("Display 20 first prime is: " + count20);
console.log(count20);