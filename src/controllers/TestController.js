const soma = (num1, num2) => {
    let total = num1 + num2
    return total
}

const subtração = (num1, num2) => {
    let total = num1 - num2
    return total
}

const multiplicação = (num1, num2) => {
    let total = num1 * num2
    return total
}

const divisão = (num1, num2) => {
    let total = num1 / num2
    return total
}

module.exports = {
    soma,
    subtração,
    multiplicação,
    divisão
}