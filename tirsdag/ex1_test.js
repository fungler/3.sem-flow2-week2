window.onload = function() {
    var toTbl = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
    var names = ["Martin", "Annika", "Væcs", "Capper", "Vincent", "Simon", "Jakob"];

    document.getElementById("nut").addEventListener("click", quickFilter, false);
    document.getElementById("nut").addEventListener("click", quickFilterNav, false);

    function quickFilter() {
        var nutTbl = toTbl.filter( function(elem) {
            return elem.name.includes("a");
        })

        document.getElementById("displayTbl").innerHTML = toHTMLTbl(nutTbl);
    }

    function quickFilterNav() {
        var nutNamesTbl = names.filter( function(elem) {
            return elem.includes("a");
        })

        document.getElementById("abc").innerHTML = toHTML(nutNamesTbl);
    }

    function toHTML(arr) {
        var htmlList = arr.map(function(name) {
            return '<a href="">' + name + '</a>';
        });
        htmlList.unshift("<nav>");
        htmlList.push("</nav>");
    
        return htmlList;
    }
    
    
    function toHTMLTbl(arr) {
        var startString = "<tr><th>Name</th><th>Phone</th></tr><tr>";
    
        var elems = arr.map(elem => "<tr><td>"+ elem.name+"</td><td>" +elem.phone+"</td></tr>").join("");
        return startString + elems;
    }

    document.getElementById("displayTbl").innerHTML = toHTMLTbl(toTbl);
    document.getElementById("abc").innerHTML = toHTML(names);

}
