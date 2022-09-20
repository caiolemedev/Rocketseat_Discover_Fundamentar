const people = ['Rafa', 'Diego', 'Dani', 'Caio']
const upperCasePeopleThatStartsWithD = people
  .filter(person => person.startsWith('D')) //filtra o que começa com D primeiro
  .map(dperson => dperson.toUpperCase()) //recebe o array filtrado e coloca em caixa alta
