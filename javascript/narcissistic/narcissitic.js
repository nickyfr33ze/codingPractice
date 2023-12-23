export function narcissisticCheck(number) {
    let sum = 0;
    let digits = number.toString().split('');
    let numberOfDigits = digits.length;
    digits.forEach(digit => sum += Math.pow(parseInt(digit), numberOfDigits));
    return sum === number;
}