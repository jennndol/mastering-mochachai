let numberToText = (number) => {
    let terbilang = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    if (number < 0) {
        return 'minus ' + numberToText(number * (-1));
    } else {
        if (number < 10) {
            return terbilang[number - 1];
        } else if (number < 11) {
            return 'sepuluh';
        } else if (number < 12) {
            return 'sebelas';
        } else if (number < 20) {
            return numberToText(number % 10) + ' belas';
        } else if (number < 100 && number % 10 == 0) {
            return (numberToText((number - number % 10) / 10)) + ' puluh';
        } else if (number < 100 && number % 10 !== 0) {
            return (numberToText((number - number % 10) / 10)) + ' puluh ' + numberToText(number % 10);
        } else if (number < 200) {
            return 'seratus ' + numberToText(number - 100);
        } else if (number < 1000 && number % 100 == 0) {
            return (numberToText((number - number % 100) / 100)) + ' ratus';
        } else if (number < 1000 && number % 100 !== 0) {
            return (numberToText((number - number % 100) / 100)) + ' ratus ' + numberToText(number % 100);
        }
    }
}

console.log(numberToText(1));
console.log(numberToText(10));
console.log(numberToText(11));
console.log(numberToText(99));
console.log(numberToText(990));
console.log(numberToText(-120));

module.exports = numberToText;