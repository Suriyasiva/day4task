// ----------------------------------------------------------------1 question
var obj1 = { 
    name: "Person 1",
    age:5
 };
var obj2 = { 
    age:5,
    name: "Person 1" 
};
JSON.stringify(obj1) === JSON.stringify(obj2);


// ----------------------------------------------------------------2question
var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.com/v3.1/all', true);
req.send();
req.onload = function () {
    var data = JSON.parse(req.response);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].flag)

    }
}


// // ----------------------------------------------------------------3 question

var req1 = new XMLHttpRequest();
req1.open('GET', 'https://restcountries.com/v3.1/all', true);
req1.send();
req1.onload =function () {
    var data = JSON.parse(req1.response);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name,data[i].region,data[i].subregion,data[i].population)

    }
}







