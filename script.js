//const inputs = document.querySelector('.qualities')

//arrays

let lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'
let uppercaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numericArray = '0123456789'
let specialArray = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'

let fullArray = ''
let lengthValue

//password options

let lowercaseConfirm
let uppercaseConfirm
let numericConfirm
let specialConfirm
let lengthConfirm

let passwordGenerator = () => {


  let password = []

  let lowercaseConfirm = confirm('Include lowercase letters in password?')
  let uppercaseConfirm = confirm('Include uppercase letters in password?')
  let numericConfirm = confirm('Include numeric values in password?')
  let specialConfirm = confirm('Include special characters in password?')
  let lengthConfirm = prompt('How long would you like your password to be?')

  if (isNaN (lengthConfirm) || (lengthConfirm <= 8 || lengthConfirm >= 128) == true ) {
    alert('Please enter a numerical value for the password length between 8 and 128')
  }
  else {
    lengthValue = parseInt(lengthConfirm)
  }

  if (lowercaseConfirm === true) {
    fullArray += lowercaseArray
  }

  if (uppercaseConfirm === true) {
    fullArray += uppercaseArray
  }

  if (numericConfirm === true) {
    fullArray += numericArray
  }

  if (specialConfirm === true) {
    fullArray += specialArray
  }

  for (let i = 0; i < lengthValue; i++) {
    let randomCharacter = fullArray[Math.floor(Math.random() * fullArray.length)]
    password += randomCharacter
  }

  console.log(password)

  return password

}

document.getElementById('generate').addEventListener('click', () => {

  document.getElementById('password').value = passwordGenerator()
  
})

// attempted check

// let protoPassword
// const passwordCheck = () => {
//   protoPassword = passwordGenerator()
//   if (lowercaseConfirm) {
//     console.log('confirming lowercase')
//     let verifyLowercase = false
//     for (let i = 0; i < protoPassword.length; i++) {
//       let possibleLowercase = protoPassword[i]
//       if (possibleLowercase == 'a' ||  possibleLowercase == 'b' ||  possibleLowercase == 'c' ||  possibleLowercase == 'd' ||  possibleLowercase == 'e' ||  possibleLowercase == 'f' ||  possibleLowercase == 'g' ||  possibleLowercase == 'h' ||  possibleLowercase == 'i' ||  possibleLowercase == 'j' ||  possibleLowercase == 'k' ||  possibleLowercase == 'l' ||  possibleLowercase == 'm' ||  possibleLowercase == 'n' ||  possibleLowercase == 'o' ||  possibleLowercase == 'p' ||  possibleLowercase == 'q' ||  possibleLowercase == 'r' ||  possibleLowercase == 's' ||  possibleLowercase == 't' ||  possibleLowercase == 'u' ||  possibleLowercase == 'v' ||  possibleLowercase == 'w' ||  possibleLowercase == 'x' ||  possibleLowercase == 'y' ||  possibleLowercase == 'z') {
//         verifyLowercase = true
//       }
//     }
//     if (verifyLowercase == false) {
//       console.log('no lowercase')
//       passwordCheck()
//     }
//   }

//   if (uppercaseConfirm) {
//     let verifyUppercase = false
//     for (let i = 0; i < protoPassword.length; i++) {
//       let possibleUppercase = protoPassword[i]
//       if (possibleUppercase == 'A' || possibleUppercase == 'B' ||  possibleUppercase == 'C' ||  possibleUppercase == 'D' ||  possibleUppercase == 'E' ||  possibleUppercase == 'F' ||  possibleUppercase == 'G' ||  possibleUppercase == 'H' ||  possibleUppercase == 'I' ||  possibleUppercase == 'J' ||  possibleUppercase == 'K' ||  possibleUppercase == 'L' ||  possibleUppercase == 'M' ||  possibleUppercase == 'N' ||  possibleUppercase == 'O' ||  possibleUppercase == 'P' ||  possibleUppercase == 'Q' ||  possibleUppercase == 'R' ||  possibleUppercase == 'S' ||  possibleUppercase == 'T' ||  possibleUppercase == 'U' ||  possibleUppercase == 'V' ||  possibleUppercase == 'W' ||  possibleUppercase == 'X' ||  possibleUppercase == 'Y' ||  possibleUppercase == 'Z') {
//         verifyUppercase = true
//       }
//       if (verifyUppercase == false) {
//         console.log('no uppercase')
//         passwordCheck()
//       }
//     }
//   }

//   if (numericConfirm) {
//     let verifyNumeric = false
//     for (let i = 0; i < protoPassword.length; i++) {
//       let possibleNumeric = protoPassword[i]
//       if (possibleNumeric == 0 || possibleNumeric == 1 || possibleNumeric == 2 || possibleNumeric == 3 || possibleNumeric == 4 || possibleNumeric == 5 || possibleNumeric == 6 || possibleNumeric == 7 || possibleNumeric == 8 || possibleNumeric == 9) {
//         verifyNumeric = true
//       }
//     }
//     if (verifyNumeric == false) {
//       console.log('no numeric')
//       passwordCheck()
//     }
//   }

//   if (specialConfirm) {
//     let verifySpecial = false
//     for (let i = 0; i < protoPassword.length; i++) {
//       let possibleSpecial = protoPassword[i]
//       if (possibleSpecial == '!' || possibleSpecial == '#' || possibleSpecial == '$' || possibleSpecial == '%' || possibleSpecial == '&' || possibleSpecial == '(' || possibleSpecial == ')' || possibleSpecial == '*' || possibleSpecial == '+' || possibleSpecial == ',' || possibleSpecial == '-' || possibleSpecial == '.' ||  possibleSpecial == '/' ||  possibleSpecial == ':' ||  possibleSpecial == ';' ||  possibleSpecial == '<' ||  possibleSpecial == '=' ||  possibleSpecial == '>' ||  possibleSpecial == '?' || possibleSpecial == '@' || possibleSpecial == '[' || possibleSpecial == ']' || possibleSpecial == '^' || possibleSpecial == '_' || possibleSpecial == '`' || possibleSpecial == '{' || possibleSpecial == '|' || possibleSpecial == '}' || possibleSpecial == '~') {
//         verifySpecial = true
//       }
//     }
//     if (verifySpecial == false) {
//       console.log('no special')
//       passwordCheck()
//     }
//   }

//   return protoPassword.value

// }

// document.getElementById('generate').addEventListener('click', () => {
//   let newPassword = passwordCheck()
//   console.log(newPassword)
//   document.getElementById('password').innerHTML = newPassword
// })

//discard - attempted nesting for loops to compare each individual value for checks

// let protoPassword
// const passwordCheck = () => {
//   protoPassword = passwordGenerator()
//   if(lowercaseConfirm) {
//     let verifyLowercase = false
//     for (let i = 0; i < lengthValue.length; i++) {
//       let possibleLowercase = protoPassword[i];}
//       for (let j = 0; j < lowercaseArray.length; j++) {
//         eachLowercase = lowercaseArray[j];})

//       if (eachLowercase = possibleLowercase) {
//         let verifyLowercase = true
//         alert(protoPassword)
//       }

//       else {
//         passwordCheck()
//       }
//   }
// }

//discard - generate password

// document.getElementById('generate').addEventListener('click', () => {
//   compileArray()

//   let password = localStorage.getItem('arrayData')[Math.floor(Math.random() * arrayData.length)]

// discard - number of characters quality, may come back later

// document.getElementById('numberBtn').addEventListener('click', () => {
//   let numberOfCharacters = document.getElementById('numberChar').value

//   localStorage.setItem('numberOfCharacters', numberOfCharacters)
// })

//discard - final array set connect to inside generate function

// let compileArray = () => {
//   let arrayData = [lowercaseArray.concat(uppercaseArray, numericArray, specialArray)]
//   console.log(arrayData)

//   localStorage.setItem('arrayData', arrayData)
// }

//discard - toggle buttons for password qualities, may come back later

// inputs.addEventListener('click', () => {
//   const element = event.target
//   let state = element.getAttribute('data-state')
//   //console.log('click works')

//   if (element.matches('.toggle')) {
//     if (state === 'off') {
//       element.classList.add('active')
//       element.setAttribute('data-state', 'on')
//       //console.log('toggle on works')
//     }
//     else if (state === 'on') {
//       element.classList.remove('active')
//       element.setAttribute('data-state', 'off')
//       //console.log('toggle off works')
//     }
//   }

//   //password attribute toggles

//   if (document.getElementById('lowercase').getAttribute('data-state') === 'off') {
//     let lowercaseArray = []
//     compileArray()
//     console.log('lowercase off')
//   }

//   else if (document.getElementById('lowercase').getAttribute('data-state') === 'on') {
//     let lowercaseArray = alphabetList.split(' ')
//     compileArray()
//     console.log('lowercase on')
//   }

//   if (document.getElementById('uppercase').getAttribute('data-state') === 'off') {
//     let uppercaseArray = []
//     compileArray()
//     console.log('uppercase off')
//   }

//   else if (document.getElementById('uppercase').getAttribute('data-state') === 'on') {
//     let uppercaseArray = upperAlphabetList.split(' ')
//     compileArray()
//     console.log('uppercase on')
//   }

//   if (document.getElementById('numeric').getAttribute('data-state') === 'off') {
//     let numericArray = []
//     compileArray()
//     console.log('numeric off')
//   }

//   else if (document.getElementById('numeric').getAttribute('data-state') === 'on') {
//     let numericArray = numberList.split(' ')
//     compileArray()
//     console.log('numeric on')
//   }

//   if (document.getElementById('special').getAttribute('data-state') === 'off') {
//     let specialArray = []
//     compileArray()
//     console.log('special off')
//   }

//   else if (document.getElementById('special').getAttribute('data-state') === 'on') {
//     let specialArray = specialList.split(' ')
//     compileArray()
//     console.log('special on')
//   }

// })