//remove item event handler
const removeBtn1=document.getElementById('remove-item-1');
removeBtn1.addEventListener('click',function(){
    const cartItem=document.getElementById('cart-1');
    cartItem.style.display='none';
});

const removeBtn2=document.getElementById('remove-item-2');
removeBtn2.addEventListener('click',function(){
    const cartItem=document.getElementById('cart-2');
    cartItem.style.display='none';
});


//Plus button event handler
function increase(clickPlus){
    const plusBtn=document.getElementById('plus');
        plusBtn.addEventListener('click', function(){
        });
 
    
}

//Check Out button event handler
const checkBtn = document.getElementById('check-out');
checkBtn.addEventListener('click', function () {
    const cartArea = document.getElementById("cart-section");
    cartArea.style.display = 'none';
    const checkArea = document.getElementById('thank-you');
    checkArea.style.display = 'block';
});