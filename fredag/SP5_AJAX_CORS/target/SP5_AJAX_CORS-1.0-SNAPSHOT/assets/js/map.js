window.onload = function() {

    var prevCountry;
    var currCountry;

    document.getElementById("svg2").addEventListener("click", function() {
        if (prevCountry != null)
            document.getElementById(prevCountry).style.fill = '#c0c0c0';

        currCountry = event.target.id;
        document.getElementById(currCountry).style.fill = 'red';
        prevCountry = currCountry;
    });
};