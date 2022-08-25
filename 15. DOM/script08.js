const button = document.getElementById('openpopup')
const popup = document.getElementById('popup')

button.addEventListener('click', openpopup)

function openpopup() {
  popup.classList.remove('invisible')
}

document.addEventListener('keydown', function (event) {
  const isESCkey = event.key === 'Escape'

  if (isESCkey) {
    popup.classList.add('invisible')
  }
})
