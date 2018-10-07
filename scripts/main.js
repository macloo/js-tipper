const total = document.getElementById("total");
const tax = document.getElementById("tax");
const woTax = document.getElementById("wo-tax");
const tipPct = document.getElementById("tip-pc");
const tip = document.getElementById("tip");
const totalIncTip = document.getElementById("total-w-tip");

document.body.addEventListener('input', calculateTip);
document.body.addEventListener('button', clearAll);

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

function clearAll() {
    total.value = 0;
    tax.value = 0;
    woTax.value = 0;
    tipPct.value = 0;
    tip.value = 0;
    totalIncTip.value = 0;
}
