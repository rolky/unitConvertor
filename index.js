
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")




buttonEl.addEventListener("click", function (){
  const inputValue = inputEl.value
  
    let toMeters = inputValue / 3.281
    let toFeets = inputValue * 3.281
    let toLiters = inputValue / 0.264
    let toGallons = inputValue * 0.264
    let toKilograms = inputValue / 2.204
    let toPounds = inputValue * 2.204

    let meters = toMeters.toFixed(3)
    let feet = toFeets.toFixed(3)
    let liter = toLiters.toFixed(3)
    let gallon = toGallons.toFixed(3)
    let kilogram = toKilograms.toFixed(3)
    let pound = toPounds.toFixed(3)
    
    lengthEl.innerHTML = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`
    volumeEl.innerHTML = `${inputValue}  liters = ${gallon}  gallons | ${inputValue}  gallons = ${liter}  liters`
    massEl.innerHTML = `${inputValue} kilos = ${pound} pounds | ${inputValue} pounds = ${kilogram} kilos`
}) 