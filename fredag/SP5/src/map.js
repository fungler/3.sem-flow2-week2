window.onload = function () {

    var prevCountry;
    var currCountry;

    document.getElementById("svg2").addEventListener("click", function () {
        if (prevCountry != null)
            document.getElementById(prevCountry).style.fill = '#c0c0c0';

        currCountry = event.target.id;
        document.getElementById(currCountry).style.fill = 'red';
        prevCountry = currCountry;

        fetch("http://restcountries.eu/rest/v1/alpha?codes=" + currCountry)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                document.getElementById("countryInfo").innerText = "Name: " + data[0].name;
                document.getElementById("countryInfoPop").innerText = "Population: " + data[0].population;
                document.getElementById("countryInfoCapital").innerText = "Capital: " + data[0].capital;
            });
    });
};
