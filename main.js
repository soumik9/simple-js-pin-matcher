function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('keypad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{
        const perviouscalcNumber = calcInput.value;
        const newcalcNumber = perviouscalcNumber + number;
        calcInput.value = newcalcNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;

    if(pin == typedPin){
        document.getElementById('successed').style.display = 'block';
        document.getElementById('failed').style.display = 'none';
    }else{
        document.getElementById('failed').style.display = 'block';
        document.getElementById('successed').style.display = 'none';
    }
}