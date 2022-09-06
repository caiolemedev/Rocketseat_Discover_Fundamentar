const express = require('express') //solicitando a aplicação express
const app = express() //instanciando o express dentro da variável app

app.set('view engine', 'ejs') //indicando para o express que a ferramenta de renderização de HTML (view engine) será o ejs.

app.get('/', function (req, res) {
  //criando a rota, no caso a barra indica que é a página principal
  const items = [
    { title: 'D', message: 'esenvolver aplicações/serviço de forma fácil' },
    { title: 'E', message: 'JS usa JS para renderizar HTML' },
    { title: 'M', message: 'uito fácil de usar' },
    { title: 'A', message: 'mo desenvolver soluções usando o EJS' },
    { title: 'I', message: 'niciei na programação recentemente' },
    { title: 'S', message: 'empre busco aprender cada vez mais' }
  ]
  const subtitle =
    'Uma linguagem de modelagem para a criação de páginas HTML utilizando JS.'

  res.render('pages/index', { demais: items, subtitle: subtitle }) // res = resposta, passamos o index que é o arquivo a ser renderizado
})

app.get('/sobre', function (req, res) {
  //criando uma segunda rota com o subtópico sobre
  res.render('pages/about') //passamos o arquivo da página referente ao tópico sobre
})

app.listen(8080) //função listen de dentro do express que "ouvirá" a porta 8080 que será a utilizada para rodar o servidor.

console.log('Rodando') // somente informar que o servidor está funcionando
