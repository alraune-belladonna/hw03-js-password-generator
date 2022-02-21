const inputs = document.querySelector('.qualities')

//arrays

const alphabetList = 'abcdefghijklmnopqrstuvwxyz'
const upperAlphabetList = alphabetList.toUpperCase()
const numberList = '0123456789'
const specialList = '!#$%&()*+,-./:;<=>?@[]/^_`{|}~'

let lowercaseArray = alphabetList.split(' ')
let uppercaseArray = upperAlphabetList.split(' ')
let numericArray = numberList.split(' ')
let specialArray = specialList.split(' ')

//number of characters quality

document.getElementById('numberBtn').addEventListener('click', () => {
  let numberOfCharacters = document.getElementById('numberChar').value

  localStorage.setItem('numberOfCharacters', numberOfCharacters)
})

//section - button active toggle

inputs.addEventListener('click', () => {
  const element = event.target
  let state = element.getAttribute('data-state')
  //console.log('click works')

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
    let array1 = []
    console.log('lowercase off')
  }

  else if (document.getElementById('lowercase').getAttribute('data-state') === 'on') {
    let array1 = lowercaseArray
    console.log('lowercase on')
  }

  if (document.getElementById('uppercase').getAttribute('data-state') === 'off') {
    let array2 = []
    console.log('uppercase off')
  }

  else if (document.getElementById('uppercase').getAttribute('data-state') === 'on') {
    let array2 = uppercaseArray
    console.log('uppercase on')
  }

  if (document.getElementById('numeric').getAttribute('data-state') === 'off') {
    let array3 = []
    console.log('numeric off')
  }

  else if (document.getElementById('numeric').getAttribute('data-state') === 'on') {
    let array3 = numericArray
    console.log('numeric on')
  }

  if (document.getElementById('special').getAttribute('data-state') === 'off') {
    let array4 = []
    console.log('special off')
  }

  else if (document.getElementById('special').getAttribute('data-state') === 'on') {
    let array4 = specialArray
    console.log('special on')
  }

  let arrayData = [array1.concat(array2, array3, array4)]

  console.log(arrayData)
})

//final array set connect to inside generate function
let generatePassword = () => {


}

document.getElementById('generate').addEventListener('click', () => {
  generatePassword()

  let password = arrayData[Math.floor(Math.random() * arrayData.length)] 

  document.getElementById('password').placeholder = password
})