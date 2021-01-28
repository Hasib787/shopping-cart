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
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText=caseTotal;
});


//Check Out button event handler
const checkBtn = document.getElementById('check-out');
checkBtn.addEventListener('click', function () {
    const cartArea = document.getElementById("cart-area");
    cartArea.style.display = 'none';
    const checkArea = document.getElementById('thank-you');
    checkArea.style.display = 'block';
});