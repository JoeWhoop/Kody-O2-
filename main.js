document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('goButton').addEventListener('click', function() {
        var stationValue = document.getElementById('stationDropdown').value;
        var mechanicValue = document.getElementById('mechanicDropdown').value;

        // Pobierz link
        var link = document.getElementById('link');

        // Dodaj wartość mechanic do linku
        var selectedMechanic = encodeURIComponent(mechanicValue);
        var linkURL = "https://web.miniextensions.com/Vp81zD5sRnZVQZ2lAgLJ?prefill_Mechanic=" + selectedMechanic;

        // Jeśli wybrano D w dropdownie dla stacji, użyj linku
        if (stationValue === "D") {
            link.href = linkURL;
            link.click();
        }
    });
});
