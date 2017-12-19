let sum = (a, b) => {
    return Promise.resolve(a + b);
}

let multiply = (a, b, callback) => {
    callback(a * b);
}

let min = (a, b) => {
    return new Promise(resolve => {
        resolve(a - b);
    })
}

Promise.all([sum(2, 8), 'abc', min(4, 2)])
    .then(result => {
        result = result.map(item => 'Hasil ' + item);
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })

module.exports = {
    sum,
    multiply,
    min
};