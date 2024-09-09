function appendToDisplay(valor){
    const display = document.getElementById('display');
    display.value += valor;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function backspace(){
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function calculate(){
    const display = document.getElementById('display');
    try{
        // Evaluar la expresión matemática ingresada por el usuario
        const result = eval(display.value);

        // Verificar que el resulatdo no sea infinito o NaN, y mostrar 'Error' en caso contrario
        if(isNaN(result) || !isFinite(result)) {
            display.value = 'Error de cálculo';
        }else{
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error de sintáxis';
    }
}

