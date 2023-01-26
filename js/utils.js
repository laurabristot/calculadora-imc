export function calcImc(weight, height){
  const calcImc = weight / ((height/100) **2)
  return calcImc.toFixed(2)
}

export function notNumber(value) {
  return isNaN(value) || value == ''
}