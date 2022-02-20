const inputs = document.querySelector('.qualities')

const alphabetList = 'abcdefghijklmnopqrstuvwxyz'

const upperAlphabetList = alphabetList.toUpperCase()

const numberList = '0123456789'

const specialList = '!#$%&()*+,-./:;<=>?@[]/^_`{|}~'

let lowercaseArray = alphabetList.split('')

let uppercaseArray = upperAlphabetList.split('')

let numericArray = numberList.split('')

let specialArray = specialList.split('')


inputs.addEventListener('click', () => {
  const element = event.target
  let state = element.getAttribute('data-state')
  //console.log('click works')

//section - button active toggle

  if (element.matches('.toggle')) {
    if (state === 'off') {
      element.classList.add('active')
      element.setAttribute('data-state', 'on')
      //console.log('toggle on works')
    }
    else if (state === 'on') {
      element.classList.remove('active')
      element.setAttribute('data-state', 'off')
      //console.log('toggle off works')
    }
  }

  //password attribute toggles

  if (document.getElementById('lowercase').getAttribute('data-state') === 'off') {
    let lowercaseArray = []
    console.log('lowercase off')
  }

  else if (document.getElementById('lowercase').getAttribute('data-state') === 'on') {
    console.log('lowercase on')
  }

  if (document.getElementById('uppercase').getAttribute('data-state') === 'off') {
    let uppercaseArray = []
    console.log('uppercase off')
  }

  else if (document.getElementById('uppercase').getAttribute('data-state') === 'on') {
    console.log('uppercase on')
  }

  if (document.getElementById('numeric').getAttribute('data-state') === 'off') {
    let numericArray = []
    console.log('numeric off')
  }

  else if (document.getElementById('numeric').getAttribute('data-state') === 'on') {
    console.log('numeric on')
  }

  if (document.getElementById('special').getAttribute('data-state') === 'off') {
    let specialArray = []
    console.log('special off')
  }

  else if (document.getElementById('special').getAttribute('data-state') === 'on') {
    console.log('special on')
  }

})

//final array set connect to/inside generate function
let characterArray = [lowercaseArray.concat(uppercaseArray, numericArray, specialArray)]

console.log(characterArray)


// wrapper.getElementById('generate').addEventListener('click', () => {
// }