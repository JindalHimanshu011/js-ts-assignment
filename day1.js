// //variables
// var firstvariable = 'hello';
// let secondvariable = 'bye';
// const thirdvariable = false;



// innerHTML
// textContent
// value
// id

// var firstvariable = 'hello himanshu';
// console.log(firstvariable);

// firstvariable = 6;
// secondvariable = 7;

// //can't reassign value of const
// //thirdvariable = 9;

// //can create same name of var
// var firstvariable = 'hellore';

// //can't create same name of let
// //let secondvariable = 'bye';

// //console.log(firstvariable + secondvariable + thirdvariable);
// //console.log(thirdvariable+23);




// //conditions and operators
// firstvariable = '3';
// firstvariable = 3;
// secondvariable = 3;


// if (firstvariable !== secondvariable && !thirdvariable) {
//     //        console.log("first variable is equal to second but type is different")
// }
// else {
//     //        console.log("second variable is equal to first with type")
// }

// var casevalue = 1;
// switch (firstvariable) {
//     case 1:
//         casevalue = 1;
//         break;
//     case 2:
//         casevalue = 2;
//         break;
//     case 3:
//         casevalue = 3;
//         break;
//     default:
//         casevalue = 0;
// }

// //console.log(casevalue)


// //loop

// for (i = 1; i < 3; i++) {
//     //console.log(i);
// }

// var w1 = 3;
// while (w1 > 1) {
//     console.log("while loop print " + w1)
//     w1 -= 1;
// }

// //functions

// function getname(address) {
//     return "ram" + " from " + address;
// }

// //console.log(getname('jaipur'));

// getArrow = (address) => "ram" + " from " + address;

// //console.log(getArrow('jaipur'));

// add = (a, b) => a + b;
// //console.log(add(3, 4));


// //array and object

// var location = ['jaipur', 'delhi', 'ajmer', 'udaipur'];
// var newlocation = new Array('noida', 'gurgav');

// console.log(location.concat(newlocation));

// console.log(location.slice(1, 2));

// location.pop();//remove last one
// location.shift();//remove first one
// location.push("test");//add at last
// location.unshift("test1");//add at first



// location.forEach(function (city) { console.log(city.toUpperCase()) });


// console.log("foreach");
// location.forEach(function (city) {v= city.toUpperCase() })
// console.log(v);

// let updatedcity = location.map(city => city + " home");

// updatedcity.forEach(function (city) { console.log(city) });

// let shortFruits = location.filter(city => city.length > 2);
// console.log(shortFruits);

// console.log(Array.isArray(location));
// console.log(firstvariable instanceof Array);


// const ar = new Array(1, 2, 3, 4, 5, 6);

// ar.splice(2, 1, 8, 9);

// console.log(ar.sort());
// console.log(ar.reverse());
// console.log(ar);
// console.log(ar.indexOf(4));


// //create a program to check number is even/odd and positive/negative


// function checknumber(number) {
//     let EvenOdd = (number % 2) ? 'Odd' : 'Even';
//     let sign = (number < 0) ? 'negative' : 'positive';
//     return "your number is " + EvenOdd + " and " + sign;
// }

// console.log(checknumber(-60));



// //scope

// function getName() {
//     var name = "himanshu";
//     return name;
// }

// {
//     var blockvariable='I am unblocked var';
//     let blocklet='I am blocked let';
// }

// console.log(getName());
// console.log(blocklet);

// let officeName = "InTimeTec";
// //officeName.split('').forEach(function (item){console.log(item)});

// officeName.split('').forEach(item => console.log(item.toUpperCase()));
// //console.log(updatedOffice);
// //console.log(officeName.split('')); 



// let car = [
//     {name:'rohan',address:'jaipur'},
//     {name:'sohan',address:'ajmer'}
// ]

// console.log(car.find(({name})=>name=='sohan'));


// let counting = [1,2,3,4,5,7,8];
// console.log(counting.find(c=>c>5));



