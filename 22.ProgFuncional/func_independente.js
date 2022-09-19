const random = (number, Math) => Math.floor(Math.random() * number)
//na função acima passamos também o método Math do JS para ser usado dentro da função

//recusive
//find factorial of a number

const factorial = x => {
  //if number is 0
  if (x === 0) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}
