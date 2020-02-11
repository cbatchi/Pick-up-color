'use strict'

const AppContainer = document.querySelector('.app-container')
const buttonApp = document.querySelector('.button')
const hexaCode = document.querySelector('.hexa-code')

const colorPalettes = [
  1,2,3,4,5,6,7,8,9,
  'A','B','C','D','E','F'
];


const handleChangeColor = () => {
  let hexDiese = '#'
  for (let i = 0; i < 6; i++) {
    let randomHexValue = Math.floor(Math.random() * colorPalettes.length)
    hexDiese += colorPalettes[randomHexValue]
  }
  AppContainer.style.backgroundColor = hexDiese

  hexaCode.style.fontWeight = 'bold'
  hexaCode.textContent = hexDiese
}

buttonApp.addEventListener('click', handleChangeColor)