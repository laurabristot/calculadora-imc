import { Modal } from './modal.js'
import { AlertError } from './alertError.js'
import {calcImc, notNumber} from './utils.js'

const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')
const form = document.querySelector('form')

form.onsubmit = function (e) {
  e.preventDefault()
  
  const weight = weightInput.value
  const height = heightInput.value

  if (notNumber(weight) || notNumber(height)){
    AlertError.open()
    weightInput.value = ''
    heightInput.value = ''
    return
  }

  AlertError.close()

  const imc = calcImc(weight, height)

  Modal.open()

  Modal.message.innerText = `Seu IMC é de ${imc}`

  weightInput.value = ''
  heightInput.value = ''
}

weightInput.oninput = () => AlertError.close()
heightInput.oninput = () => AlertError.close()