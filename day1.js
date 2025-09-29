//variables
var firstvariable = 'hello';
let secondvariable = 'bye';
const thirdvariable = false;



firstvariable = 6;
secondvariable = 7;

//can't reassign value of const
//thirdvariable = 9;

//can create same name of var
var firstvariable = 'hellore';

//can't create same name of let
//let secondvariable = 'bye';

//console.log(firstvariable + secondvariable + thirdvariable);
//console.log(thirdvariable+23);




//conditions and operators
firstvariable = '3';
firstvariable = 3;
secondvariable = 3;


if (firstvariable !== secondvariable && !thirdvariable) {
    //        console.log("first variable is equal to second but type is different")
}
else {
    //        console.log("second variable is equal to first with type")
}

var casevalue = 1;
switch (firstvariable) {
    case 1:
        casevalue = 1;
        break;
    case 2:
        casevalue = 2;
        break;
    case 3:
        casevalue = 3;
        break;
    default:
        casevalue = 0;
}

//console.log(casevalue)


//loop

for (i = 1; i < 3; i++) {
    //console.log(i);
}


//functions

function getname(address) {
    return "ram" + " from " + address;
}

//console.log(getname('jaipur'));

getArrow = (address) => "ram" + " from " + address;

//console.log(getArrow('jaipur'));

add = (a, b) => a + b;
//console.log(add(3, 4));


//array and object

var location = ['jaipur', 'delhi', 'ajmer', 'udaipur'];
var newlocation = new Array('noida', 'gurgav');

location.pop();//remove last one
location.shift();//remove first one
location.push("test");//add at last
location.unshift("test1");//add at first

console.log(location.slice(1, 4));

location.forEach(function (city) { console.log(city.toUpperCase()) });


let updatedcity = location.map(city => city + " home");

updatedcity.forEach(function (city) { console.log(city) });





//create a program to check number is even/odd and positive/negative


function checknumber(number) {
    let EvenOdd = (number % 2) ? 'Odd' : 'Even';
    let sign = (number < 0) ? 'negative' : 'positive';
    return "your number is " + EvenOdd + " and " + sign;
}

console.log(checknumber(-60));