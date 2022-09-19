let number = 2

//statefull function
function square() {
  return number * number
}

number = square()

//stateless
const square = n => n * n
