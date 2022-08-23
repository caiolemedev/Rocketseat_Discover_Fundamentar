const element = document.querySelector('body')

element.style.backgroundColor = 'lightblue'
console.log(element.style.backgroundColor)

element.classList.add('active', 'green')
element.classList.remove('active')
element.classList.toggle('active')

console.log(element.classList)
