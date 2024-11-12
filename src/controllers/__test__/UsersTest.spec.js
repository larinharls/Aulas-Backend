const test = require('../TestController')
it ('10 + 5 deve ser igual a 15', () => {
    const result = 15

    expect(test.soma(10,5)).toBe(result)
})

it ('10 - 5 deve ser igual a 5', () => {
    const result = 5

    expect(test.subtração(10,5)).toBe(result)
})

it ('10 * 2 deve ser igual a 20', () => {
    const result = 20

    expect(test.multiplicação(10,2)).toBe(result)
})

it ('20 / 2 deve ser igual a 10', () => {
    const result = 10

    expect(test.divisão(20,2)).toBe(result)
})