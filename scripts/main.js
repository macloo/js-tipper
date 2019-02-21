// create variables to represent all the form fields
// access the DOM, get needed elements using their IDs
const total = document.querySelector("#total");
const tax = document.querySelector("#tax");
const woTax = document.querySelector("#wo-tax");
const tipPct = document.querySelector("#tip-pc");
const tip = document.querySelector("#tip");
const totalIncTip = document.querySelector("#total-w-tip");

// one event listener - see note at bottom of file
document.body.addEventListener('input', calculateTip);

// function to run when any input value changes (event is detected)
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

// note: "The DOM input event fires synchronously when the value of an <input>, <select>, or <textarea> element has been altered."
// https://developer.mozilla.org/en-US/docs/Web/Events/input
