const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

let string = ''
let btnArray = Array.from(buttons)
// here i use forEach method for access each element of an array
btnArray.forEach(button => {
    button.addEventListener('click', (event) => {
        // here it evaluate all the values 
        if (event.target.innerHTML == '=') {
            string = eval(string)
            display.value = string
        }
        // here it clear all the values
        else if (event.target.innerHTML == 'AC') {
            string = ''
            display.value = string
        }
        // here it delete the last value 
        else if (event.target.innerHTML == 'DEL') {
            string = string.slice(0, string.length - 1)
            display.value = string
        }
        // otherwise all the values will display
        else {
            string += event.target.innerHTML
            display.value = string
        }
    })
})