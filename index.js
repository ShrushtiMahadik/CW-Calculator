let num1 = 8
let num2 = 2
document.getElementById("cnt1-el").textContent = num1
 document.getElementById("cnt2-el").textContent = num2
let sumEl = document.getElementById("sum-el")




function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum : " + result
}


function sub(){
    let result = num1 - num2
    sumEl.textContent = "Sub : " + result
}


function mul(){
    let result = num1 * num2
    sumEl.textContent = "Mul : " + result
}
