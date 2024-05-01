document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('goButton').addEventListener('click', function() {
        var stationValue = document.getElementById('stationDropdown').value;
        var mechanicValue = document.getElementById('mechanicDropdown').value;

        // Pobierz link 1 i link 2
        var link1 = document.getElementById('link1');
        var link2 = document.getElementById('link2');

        // Dodaj wartość mechanic do linków
        var selectedMechanic = encodeURIComponent(mechanicValue);
        var link1URL = "https://web.miniextensions.com/S0nDKlj5o22zpJjfBuAk?prefill_Mechanic=" + selectedMechanic;
        var link2URL = "https://web.miniextensions.com/p7ZHq803Sx4FebfxAr1M?prefill_Mechanic=" + selectedMechanic;

        // Dodaj wartość stacji do linków
        var selectedStation = encodeURIComponent(stationValue);
        link1URL += "&prefill_Station=" + selectedStation;
        link2URL += "&prefill_Station=" + selectedStation;

        // Jeśli wybrano QC - A7 w dropdownie dla stacji, użyj linku 1
        if (stationValue === "QC - A7") {
            link1.href = link1URL;
            link1.click();
        } 
        // Jeśli wybrano QC1 lub QC2 w dropdownie dla stacji, użyj linku 2
        else if (stationValue === "QC1" || stationValue === "QC2") {
            link2.href = link2URL;
            link2.click();
        }
    });
});
