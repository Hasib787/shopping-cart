//remove item event handler
const removeBtn1 = document.getElementById('remove-item-1');
removeBtn1.addEventListener('click', function () {
    const cartItem = document.getElementById('cart-1');
    cartItem.style.display = 'none';
});

const removeBtn2 = document.getElementById('remove-item-2');
removeBtn2.addEventListener('click', function () {
    const cartItem = document.getElementById('cart-2');
    cartItem.style.display = 'none';
    
});


//Plus button event handler
const plusBtn = document.getElementById('case-increase');
plusBtn.addEventListener('click', function () {
    handleProductChange('case', true);
});

document.getElementById('iphone-increase').addEventListener('click', function () {
    handleProductChange('iphone', true);
});


//Minus button event handler
const minusBtn = document.getElementById("case-decrease");
minusBtn.addEventListener('click', function () {
    handleProductChange('case', false);
});
document.getElementById('iphone-decrease').addEventListener('click', function () {
    handleProductChange('iphone', false);
});


//Product changes handler 
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    } else if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'iphone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal();
}


//Calculate Total value
function calculateTotal() {
    const phoneCount = getInputValue('iphone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}


//Check Out button event handler
const checkBtn = document.getElementById('check-out');
checkBtn.addEventListener('click', function () {
    const cartArea = document.getElementById("cart-area");
    cartArea.style.display = 'none';
    const checkArea = document.getElementById('thank-you');
    checkArea.style.display = 'block';
});