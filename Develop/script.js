const inputs = document.querySelector('.qualities')

const alphabetList = 'abcdefghijklmnopqrstuvwxyz'

const numberList = '0123456789'

const specialList = '!#$%&()*+,-./:;<=>?@[]/^_`{|}~'

let lowercaseArray = alphabetList.charAt()

let uppercaseArray = lowercaseArray.toUpperCase()

let numericArray = numberList.charAt()

let specialArray = specialList.charAt()

let characterArray = lowercaseArray.concat(uppercaseArray,numericArray, specialArray)

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

  //if (element.matches('.lowercase'))
})
// wrapper.getElementById('generate').addEventListener('click', () => {
// }