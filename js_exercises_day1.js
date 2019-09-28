var names = ["Martin", "Annika", "Væcs", "Capper", "Vincent", "Simon", "Jakob"];





var filteredNames = names.filter( function(name) {
    return name.includes("a");
})

console.log(filteredNames);






function reverseName(name) {
    var toReverse = name.split("");
    var reversed = toReverse.reverse();
    var finalStr = reversed.join("");
    return finalStr;
}

var reversedNames = names.map(name => reverseName(name));
console.log(reversedNames);






function myFilter(arr, callback) {
    var newArr = [];
    for (let elem of arr) {
        if(callback(elem)) {
            newArr.push(elem);
        }
    }

    return newArr;
}

var myFilterArr = myFilter(names, function(name) {
    return name.includes("a");
});

console.log(myFilterArr);





function myMap(arr, callback) {
    var newArr = [];
    for (let elem of arr) {
        newArr.push(callback(elem));
    }

    return newArr;
}

var myMapArr = myMap(names, function(name) {
    return name.split("").reverse().join("");
});

console.log(myMapArr);
console.log("--------------------------");

Array.prototype.myFilter = function myFilter(callback) {
    var newArr = [];
    for (let elem of this) {
        if(callback(elem)) {
            newArr.push(elem);
        }
    }

    return newArr;
}

var redFilter = names.myFilter(function(name) {
    return name.includes("a");
});

console.log(redFilter);




var numbers = [1, 3, 5, 10, 11];
var result = numbers.map(function(value, index) {
    if (numbers[index+1] == null) {
        return value;
    }

    return numbers[index] + numbers[index+1];
});

console.log(result);


function toHTML() {
    var htmlList = names.map(function(name) {
        return '<a href="">' + name + '</a>';
    });
    htmlList.unshift("<nav>");
    htmlList.push("</nav>");

    return htmlList;
}

console.log(toHTML());

var toTbl = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function toHTMLTbl() {
    var startString = "<tr><th>Name</th><th>Phone</th></tr><tr>";

    var elems = toTbl.map(elem => "<tr><td>"+ elem.name+"</td><td>" +elem.phone+"</td></tr>").join("");
    return startString + elems;
}

console.log(toHTMLTbl());