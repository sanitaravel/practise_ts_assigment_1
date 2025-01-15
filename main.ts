function convertTemperature(value: number, unit: string): number {
    if (unit === 'F') {
        return (value - 32) * 1.8;
    } else if (unit === 'C') {
        return (value * 1.8) + 32;
    } else {
        throw new Error('Invalid unit. Use "F" for Fahrenheit or "C" for Celsius.');
    }
}

console.log(convertTemperature(32, 'F')); // 0
console.log(convertTemperature(0, 'C')); // 32