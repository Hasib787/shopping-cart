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


// Case Product changes handler 
function handleProductChange(product, isIncrease) {
    const Input = document.getElementById(product + '-count');
    const Count = parseInt(Input.value);
    if (isIncrease == true) {
        NewCount = Count + 1;
    } else if (isIncrease == false && Count > 0) {
        NewCount = Count - 1;
    }
    Input.value = NewCount;
    const caseTotal = NewCount * 59;
    document.getElementById(product + '-total').innerText = caseTotal;
}


//Check Out button event handler
const checkBtn = document.getElementById('check-out');
checkBtn.addEventListener('click', function () {
    const cartArea = document.getElementById("cart-area");
    cartArea.style.display = 'none';
    const checkArea = document.getElementById('thank-you');
    checkArea.style.display = 'block';
});