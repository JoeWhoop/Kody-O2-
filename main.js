document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('goButton').addEventListener('click', function() {
        var stationValue = document.getElementById('stationDropdown').value;
        var mechanicValue = document.getElementById('mechanicDropdown').value;

        // Sprawdź, czy wybrano stację "D"
        if (stationValue === "D") {
            // Pobierz link
            var link = document.createElement('a');
            link.href = "https://web.miniextensions.com/Vp81zD5sRnZVQZ2lAgLJ";

            // Dodaj wartość mechanic do linku
            var selectedMechanic = encodeURIComponent(mechanicValue);
            link.href += "?prefill_Mechanic=" + selectedMechanic;

            // Otwórz link
            link.target = "_blank"; // Otwórz w nowym oknie
            document.body.appendChild(link); // Dodaj link do body
            link.click(); // Kliknij link
            document.body.removeChild(link); // Usuń link z body
        } else {
            // Komunikat dla użytkownika, gdy wybrano inną stację
            alert("Wybierz stację D, aby kontynuować.");
        }
    });
});
