let celciusInput = document.querySelector('.celsius > input');
let fahrenheitInput = document.querySelector('.fahrenheit > input');
let kelvinInput = document.querySelector('.kelvin > input');
let btn = document.querySelector('.but button');
let body = document.body;

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function updateBackground(cTemp) {
    if (cTemp < 0) {
        body.classList.remove('hot', 'moderate');
        body.classList.add('cold');
    } else if (cTemp > 30) {
        body.classList.remove('cold', 'moderate');
        body.classList.add('hot');
    } else {
        body.classList.remove('cold', 'hot');
        body.classList.add('moderate');
    }
}

celciusInput.addEventListener('input', function() {
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = (cTemp * 9/5) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);

    updateBackground(cTemp);
});

fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * 5/9;
    let kTemp = (fTemp - 32) * 5/9 + 273.15;

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);

    updateBackground(cTemp);
});

kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * 9/5;

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);

    updateBackground(cTemp);
});

btn.addEventListener('click', () => {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    body.classList.remove('cold', 'hot', 'moderate');
});
