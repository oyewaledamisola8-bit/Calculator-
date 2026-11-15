
let isDark = false;
function togglebtn() {
    if (isDark) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.body.innerHTML = "Light";
    }
    isDark = !isDark;
};

let clearScreen = false;
let oper;
let firstval;

let numdisplay = (figures) => {
    let inp = document.getElementById("screen2");
    inp.value += figures;

    if (clearScreen) {
        screen2.value = figures;
        clearScreen = false;
    }
}

let operators = (actionkeys) => {
    firstval = screen2.value;
    oper = actionkeys;
    screen1.value = firstval + actionkeys;
    clearScreen = true;
}

let screenClear = () => {
    screen1.value = "";
    screen2.value = "";
}

let clearscreen = () => {
    screen2.value = "";
}

let clearbtn = () => {
    screen2.value = screen2.value.slice(0, -1)
}

let equals = () => {
    // screen1.value = screen2.value;
    if (oper == '+') {
        screen1.value = firstval + oper + screen2.value + "=";
        screen2.value = Number(firstval) + Number(screen2.value);
    }

    else if (oper == '-') {
        screen1.value = firstval + oper + screen2.value;
        screen2.value = firstval - screen2.value;
    }

    else if (oper == '⊹') {
        screen1.value = firstval + oper + screen2.value;
        screen2.value = firstval / screen2.value;
    }

    else if (oper == 'x') {
        screen1.value = firstval + oper + screen2.value;
        screen2.value = firstval * screen2.value;
    }

    else if (oper == '²') {
        screen1.value = firstval + oper;
        screen2.value = Math.pow(firstval, 2);
    }
    else if (oper == '³') {
        screen1.value = firstval + oper;
        screen2.value = Math.pow(firstval, 3);
    }
    else if (oper == '√') {
        screen1.value = oper + firstval;
        screen2.value = Math.sqrt(firstval, 2);
    }
    else if (oper == '∛') {
        screen1.value = oper + firstval;
        screen2.value = Math.cbrt(firstval, 2);
    }

    else if (oper == '⊼') {
        screen1.value = firstval + oper;
        screen2.value = Math.PI * firstval;
    }
}

let decimal = (dec) => {
    screen2.value += dec;
}

