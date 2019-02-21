// create variables to represent all the form fields
// access the DOM, get needed elements
const total = document.querySelector("#total");
const tax = document.querySelector("#tax");
const woTax = document.querySelector("#wo-tax");
const tipPct = document.querySelector("#tip-pc");
const tip = document.querySelector("#tip");
const totalIncTip = document.querySelector("#total-w-tip");

// create two event listeners -
// one for all input elements, the other for the only button
document.body.addEventListener('input', calculateTip);
document.body.addEventListener('button', clearAll);

// function to run when any input value changes
function calculateTip() {
    let vTotal = parseFloat(total.value).toFixed(2);
    let vTax = parseFloat(tax.value).toFixed(2);
    let vTipPct = parseInt(tipPct.value);

    // calc bill total without tax included
    let vWoTax = vTotal - vTax;
    woTax.value = vWoTax.toFixed(2);

    // calc tip amount
    let vTip = vTipPct / 100 * vWoTax;
    tip.value = vTip.toFixed(2);

    // calc total including tip and tax
    let vTotalIncTip = parseFloat(vTotal) + parseFloat(vTip);
    totalIncTip.value = vTotalIncTip.toFixed(2);
}

// function to run when the button is clicked
function clearAll() {
    total.value = 0;
    tax.value = 0;
    woTax.value = 0;
    tipPct.value = 0;
    tip.value = 0;
    totalIncTip.value = 0;
}
