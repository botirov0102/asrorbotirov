// Gaz hisoblash funksiyasi
document.getElementById('calculate-gas').addEventListener('click', function() {
    var gasUsage = parseFloat(document.getElementById('gas-usage').value);
    var gasPricePerUnit = 650; // Gazning har bir kubi narxi (so'm)

    // Gaz miqdori va narxini tekshirish
    if (isNaN(gasUsage) || gasUsage <= 0) {
        document.getElementById('gas-result').style.display = 'none';
        document.getElementById('gas-message').style.display = 'none';
        alert('Iltimos, gaz miqdorini to\'g\'ri kiriting!');
    } else {
        var totalGasCost = gasUsage * gasPricePerUnit;
        document.getElementById('gas-result').style.display = 'block';
        document.getElementById('gas-result').innerText = 'Jami gaz narxi: ' + totalGasCost.toFixed(2) + ' so\'m';

        // Gaz miqdoriga qarab ogohlantirish
        var message = '';
        if (gasUsage > 500) {
            message = 'Iltimos, gaz ishlatishni kamaytiring aks holda ko\'payishi mumkin!';
        } else if (gasUsage > 450) {
            message = 'Iltimos, gaz ishlatishni kamaytiring aks holda 500 kubdan oshadi!';
        } else {
            message = 'Hali sizda 500 kubdan oshmagan, ishlatishingiz mumkin!';
        }

        document.getElementById('gas-message').style.display = 'block';
        document.getElementById('gas-message').innerText = message;
    }
});

// Elektr hisoblash funksiyasi
document.getElementById('calculate-electric').addEventListener('click', function() {
    var electricUsage = parseFloat(document.getElementById('electric-usage').value);
    var electricPricePerUnit = 450; // Elektrning har bir kWh narxi (so'm)

    // Elektr miqdori va narxini tekshirish
    if (isNaN(electricUsage) || electricUsage <= 0) {
        document.getElementById('electric-result').style.display = 'none';
        document.getElementById('electric-message').style.display = 'none';
        alert('Iltimos, elektr sarfini to\'g\'ri kiriting!');
    } else {
        var totalElectricCost = electricUsage * electricPricePerUnit;
        document.getElementById('electric-result').style.display = 'block';
        document.getElementById('electric-result').innerText = 'Jami elektr narxi: ' + totalElectricCost.toFixed(2) + ' so\'m';

        // Elektr sarfiga qarab ogohlantirish
        var electricMessage = '';
        if (electricUsage > 200) {
            electricMessage = 'Iltimos, elektr ishlatishni kamaytiring aks holda ko\'payishi mumkin!';
        } else if (electricUsage > 180) {
            electricMessage = 'Iltimos, elektr ishlatishni kamaytiring aks holda 200 kWh dan oshadi!';
        } else {
            electricMessage = 'Hali sizda 200 kWh dan oshmagan, ishlatishingiz mumkin!';
        }

        document.getElementById('electric-message').style.display = 'block';
        document.getElementById('electric-message').innerText = electricMessage;
    }
});