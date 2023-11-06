console.log('hello');
/*
true
false

console.log(3 > 5);

console.log(typeof 'true');
console.log(typeof true);

console.log(3 >= 3);

console.log(5 == '5.00');
// NOT GOOD!
console.log(5 === '5.00');
// triple equals is the way to go. 
// otherwise it will have a conversion behavior like this;


if (false) {
  console.log('hello');
} else {
  console.log('else');
}



const age = 15;


if (age >= 16) {
  console.log('You can drive');
} else if (age >= 14) {
  console.log('Almost there!');
}
else {
  console.log('You can not drive');
}
*/
/*
if
else if
else*/ 

/*
console.log(true && false);
console.log(0.2 >= 0 && 0.2 < 1/3);


console.log(true || false )

console.log(!true);
console.log(!false);
*/
/*
if (0) {
  console.log('truthy');
}
*/
/*
const cartQuantity = 5; 

if (cartQuantity) {
  console.log('cart has products');
}

console.log(!0);

console.log('text' / 5);

let variable1;
console.log(variable1);
*/


// SHORTCUT FOR A IF /ELSE STATEMENT BELOW , all of em
/* 
1. Ternary Operator ?: 
2. Guard operator &&. 
3. Default operator ||
*/
const result = 0 ? 'truthy' : 'falsy';

console.log(result);

// AND Operator &&
//stos early and doesnt run the code on the right

false && console.log('hello');


const message = 5 && 'hello';
console.log(message);


//DEFAULT OPERATOR 
//const currency = 'EUR' || 'USD';
const currency = undefined || 'USD';

console.log(currency);

//to this point, end of shortcut for if statements