const inputs = document.querySelector('.qualities')

const alphabetList = 'abcdefghijklmnopqrstuvwxyz'

const upperAlphabetList = alphabetList.toUpperCase()

const numberList = '0123456789'

const specialList = '!#$%&()*+,-./:;<=>?@[]/^_`{|}~'

let lowercaseArray = alphabetList.split('')

let uppercaseArray = upperAlphabetList.split('')

let numericArray = numberList.split('')

let specialArray = specialList.split('')

let characterArray = [lowercaseArray.concat(uppercaseArray,numericArray,specialArray)]

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

  //section - password qualities activation

})

if (element.matches('.lowercase')) {
  console.log('lowercase register')
  if (state === off) {
    characterArray = characterArray.filter((el) => !lowercaseArray.includes(el))
    console.log('off status')
  }
  else {
    console.log('on status')
  }
}
// wrapper.getElementById('generate').addEventListener('click', () => {
// }