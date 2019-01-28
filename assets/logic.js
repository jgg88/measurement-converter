$(document).ready(() => {

    let number;
    let originalMeasurement;
    let measurementToConvert;
    let result;

    $('.number-input').on('change', (num) => {
        number = parseFloat(num.target.value);
    })

    $('.dropdown-a').on('change', (e) => {
        originalMeasurement = e.target.value;
        if (originalMeasurement && measurementToConvert && number) {
            $('.submit-btn').removeAttr('disabled');
        }
    });

    $('.dropdown-b').on('change', (e) => {
        measurementToConvert = e.target.value;
        if (originalMeasurement && measurementToConvert && number) {
            $('.submit-btn').removeAttr('disabled');
        }
    });

    $('.submit-btn').click((e) => {
        e.preventDefault();
        if (originalMeasurement === 'centimeters') {
            if (measurementToConvert === 'inches') {
                result = number*0.39370;
                $('.result').text(result);
            } else if (measurementToConvert === 'feet') {
                result = number*0.032808;
                $('.result').text(result);
            } else if (measurementToConvert === 'kilometers') {
                result = number/100000;
                $('.result').text(result);
            } else if (measurementToConvert === 'meters') {
                result = number/100;
                $('.result').text(result);                
            } else if (measurementToConvert === 'miles') {
                result = number*0.0000062137;
                $('.result').text(result);                
            } else if (measurementToConvert === 'millimeters') {
                result = number*10;
                $('.result').text(result);                
            } else if (measurementToConvert === 'yards') {
                result = number*0.010936;
                $('.result').text(result);                
            }
        }

        if (originalMeasurement === 'inches') {
            if (measurementToConvert === 'centimeters') {
                result = number/0.39370;
                $('.result').text(result);
            } else if (measurementToConvert === 'feet') {
                result = number*0.083333;
                $('.result').text(result);
            } else if (measurementToConvert === 'kilometers') {
                result = number/39370;
                $('.result').text(result);
            } else if (measurementToConvert === 'meters') {
                result = number/39.370;
                $('.result').text(result);                
            } else if (measurementToConvert === 'miles') {
                result = number*0.000015783;
                $('.result').text(result);                
            } else if (measurementToConvert === 'millimeters') {
                result = number*25.4;
                $('.result').text(result);                
            } else if (measurementToConvert === 'yards') {
                result = number*0.027778;
                $('.result').text(result);                
            }
        }
    });
});