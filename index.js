// function test(cb) {
//   setTimeout(function() {
//     var data = {
//       name: 'JD'
//     };
    
//     cb(data);
//   }, 3000);
// }

// test(function() {
//   console.log('Some string');
// });
// var fruits = ['apple', 'orange'];

// console.log(fruits[1]);

// var test = 'test';

// test = 'testing';

// function basic(str, num, third, fruits, callback) {
// 	num = 15;
//   // console.log(num);
//   callback(num);
// }

// basic('Some string', 10, {name: 'JD'}, ['apple', 'orange'], function(num) { 
// 	console.log(num); 
// });

// var test;
// console.log(test);

// String
// Object
// Array

// function Person(name, age) {

// }

// function doSomething(cb) {
// 	setTimeout(function() {
// 		cb('Ran the code');
// 	}, 3000);
// }

// doSomething(function(str) {
// 	console.log(str);
// })
// Promise

function timer() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			// console.log('Timer stopped');
			resolve('Timer stopped');
		}, 2000);
	});
}

function doSomething(num) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			if ( num < 10 )
				resolve('All good');
			else reject('Nope, too high');
		}, 3000);
	});
}

// doSomething(15)
// 	.then(function(data) {
// 		console.log(data);
// 	})
// 	.then(timer)
// 	.then(function(message) {
// 		console.log(message);
// 	})
// 	.then(function() {
// 		console.log('This stuff is cool!');
// 	})
// 	.catch(function(err) {
// 		console.log(err);
// 	});


// var test = 'test';

// let test = 'test';

// const cannot_change = 'change me';

// console.log(test);

// test = 'testing';

// console.log(test);


// console.log(cannot_change);

// cannot_change = 'I changed you';

// console.log(cannot_change);


// function test() {

// }


// var test = function(str) {
// 	console.log(str);
// }

// let test = str => console.log(str);

// test('Some string');

// function findTen(arr) {
// 	return arr.filter(function(val) {
// 		return val === 10;
// 	});
// }

// let findTen = arr => arr.filter(val => val === 10);


// console.log(findTen([5, 27, 10, 35, 43, 55]));


// function printAlphabet(num) {
// 	console.log(String.fromCharCode(num));
// 	return num < 90 ? printAlphabet(num + 1) : '';
// }

// printAlphabet(65);


// let obj = {
// 	age: 38,
// 	getAge() {
// 		// let self = this;
// 		let innerFunction = () => {
// 			console.log(this.age);
// 		};

// 		innerFunction();
// 	}
// }

// obj.getAge();


// let data = {
// 	name: 'JD',
// 	age: 38
// };

// let name = data.name;
// let age = data.age;

// let { name, age } = data;

// console.log(name, age);


// function test({color: version, num}) {
// 	console.log(version, num);
// }

// test({color: 'blue', num: 50});

let fruits = ['orange', 'apple', 'grape'];

let updated_fruits = [...fruits, 'kiwi'];

// console.log(updated_fruits);

let info = {
	name: 'JD',
	age: 38
}

let data = {...info, hobby: 'pickleball'};

console.log(data);














