
function calculateQuantity(id){
    const quantityField = document.getElementById(id);
    const quantityFieldString = quantityField.value;
    const quantity = parseInt(quantityFieldString);
    return quantity;
}
// pass the id of the tag this function will convert just innertext to number
function stringToNumberConverter(id) {
    const element = document.getElementById(id).innerText;
    return parseFloat(element);
  }
function setInnerText(id, value){
    const innerTextValue = document.getElementById(id);
    innerTextValue.innerText = value;
}
// this fucntion will calculate the quatity and price of gift this fucntion will take two parameter inutField id & price of gift
function multiplePriceWithQuantity(id, price) {
    const quantity = document.getElementById(id).value;
    const totalPrice = parseInt(quantity) * parseInt(price);
    return totalPrice;
  }
 
// get kitkat quantity and kitkat chocolate price id
document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    const kitkatQuantity = calculateQuantity('kitkat-quantity');
    const kitkatPrice = stringToNumberConverter('price');
    // calculate kitkat chocolate quantity and price
    const kitkatCost = multiplePriceWithQuantity('kitkat-quantity', 100);
    setInnerText('chocolate', kitkatCost)
    total();
})
  // get rose quantity and rose price id
  document.getElementById('rose-buy-btn').addEventListener('click', function(){
    const roseQunatity = calculateQuantity('rose-quantity');
    const rosePrice = stringToNumberConverter('rose-price');
    // calculate rose quantity and rose price
    const roseCost = multiplePriceWithQuantity('rose-quantity', 150);
    setInnerText('rose', roseCost);
    total();
})
// get dairy quantity and dairy price id
document.getElementById('diary-buy-btn').addEventListener('click', function(){
    const dairyQuantity = calculateQuantity('diary-quantity');
    const dairyPrice = stringToNumberConverter('diary-price');
    // calculate dairy quantity and dairy price
    const dairyCost = multiplePriceWithQuantity('diary-quantity', 200);
    setInnerText('diary', dairyCost);
    total();
})
 //  this function will calculate the all product price total 
 function total(params) {
    const chocolate = stringToNumberConverter("chocolate");
    const rose = stringToNumberConverter("rose");
    const diary = stringToNumberConverter("diary");
    const total = chocolate + rose + diary;
    setInnerText("total", total);
  }
 
    document.getElementById('promo-btn').addEventListener('click', function(){
        const promoCode = calculateQuantity('promo-code');
        if(promoCode == 101){
            const total =stringToNumberConverter('total');
            const sum = total - parseInt(total) * 0.1;
            setInnerText('all-total', sum);
        }
        else{
            alert('wrong promocode !! TRY  again with valid code')
        }

        const ValentineBudget = stringToNumberConverter('Valentine-budget');
        console.log(ValentineBudget);
        const allTotal = stringToNumberConverter('all-total');
        const remainingBalance = ValentineBudget - allTotal ;
        setInnerText('remain-balance', remainingBalance);
    })

