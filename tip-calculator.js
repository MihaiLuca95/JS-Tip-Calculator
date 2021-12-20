// Variables
const billAmout = document.getElementById('billAmt')
const serviceQuality = document.querySelectorAll('input.form-check-input')
const numberOfP = document.getElementById('nrOfPeople')
const btn = document.getElementById('calculateBill')
const result = document.getElementById('totalPerPerson')

// Execute function when click the btn
btn.addEventListener('click', () => {
    let r = null;
    [...serviceQuality].find( radio => radio.checked ? r = parseFloat(radio.value) : r) 

    let resultForEach = (parseFloat(billAmout.value) * r / parseInt(numberOfP.value)).toFixed(2)

    const totalAmt = (billAmout.value != '' &&  r != null) ? result.innerHTML = `$${resultForEach}` : alert("Please complete all field")
})
