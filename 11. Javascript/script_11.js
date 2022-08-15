//ex1
let score = 92
console.log(score)
score = getNota(score)
console.log(score)

function getNota(nota) {
  if (nota >= 90 && nota <= 100) {
    nota = 'A'
  } else if (nota >= 80 && nota < 90) {
    nota = 'B'
  } else if (nota >= 70 && nota < 80) {
    nota = 'C'
  } else if (nota >= 60 && nota < 70) {
    nota = 'D'
  } else if (nota < 60 && nota >= 0) {
    nota = 'F'
  } else {
    nota = 'Nota não é válida'
  }

  return nota
}

console.log(getNota(50))
console.log(getNota(60))
console.log(getNota(69))
console.log(getNota(70))
console.log(getNota(79))
console.log(getNota(80))
console.log(getNota(89))
console.log(getNota(90))
console.log(getNota(100))
console.log(getNota(0))
console.log(getNota(-1))
console.log(getNota(101))

//ex2

let cashFlow = {
  cashIn: [10, 30, 50, 10],
  cashOut: [5, 40, 5, 10]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateCashIn = sum(cashFlow.cashIn)
  const calculateCashOut = sum(cashFlow.cashOut)

  const total = calculateCashIn - calculateCashOut

  const PositiveBalance = total >= 0

  let balanceText = 'negativo'

  if (PositiveBalance) {
    balanceText = 'positivo'
  }

  console.log(`Seu saldo é ${balanceText}! Valor: ${total.toFixed(2)} reais.`)
}

calculateBalance()

//ex3
function convertTemp(temp) {
  const celsiusExists = temp.toUpperCase().includes('C')
  const fahrenheitExists = temp.toUpperCase().includes('F')

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  //fluxo ideal F -> C
  let convertedTemp = Number(temp.toUpperCase().replace('F', ''))
  let conversion = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = 'C'

  //fluxo alternativo C -> F
  if (celsiusExists) {
    convertedTemp = Number(temp.toUpperCase().replace('C', ''))
    conversion = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return conversion(convertedTemp) + degreeSign
}

try {
  console.log(convertTemp('50F'))
  console.log(convertTemp('10C'))
  convertTemp('45Z')
} catch (error) {
  console.log(error)
}

//ex4
const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length
console.log(totalCategories)

for (let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log(`Total de autores é ${authors.length}`)
  console.log(authors)
}

countAuthors()

function booksOf(author) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Total de livros do ${author} é ${books.length}`)
  console.log(`Os livros são: ${books.join(', ')}`)
}

booksOf('Augusto Cury')
