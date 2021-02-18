// STEP 1
// let someMonth;
// function theMonth();
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

// STEP 2 
// example of numeric literal expression
// -468;
// example of string literal expression 
// "This is an example of string data";
// example of Boolean literal expression
// true;
// example of null literal expression
// null;

// STEP 3, 2 examples of complex/variable expressions.
// 1. let area = length1 * width1;
// 2. let name = lastName + "," + firstName; 

// STEP 4, declaring 9 variables using Camel Casing and Hungarian Notation.
// let strFirstName;       // First Name
// let strLastName;        // Last Name
// let strAddress;         // Address
// let strCity;            // City
// let strState;           // State
// let nZipCode;           // Zip Code
// let nYourAge;           // Your Age
// let strRefferalSource;  // Referral Source 
// let strMayWeContactYou; // May We Contact You

// STEP 5, 3 ways to declaring and assigning values to the variables from Step 4.
// 1. let strFirstName;
// strFirstName = "Polina";
// 2. let strLastName = "Kochetkova";
// 3. let strCity = "Murrieta", nZipCode = 92563;

// STEP 6, coersion with 1 variable.
// let tempOutside = 67.8;
// window.console.log("Today's day temperature is " + tempOutside + "F, and night temperature is " + 56 + "F.");

// STEP 7, coersion with string/numeric and Boolean data types.
// let tempOutside = 30.0;
// window.console.log("It's " + true + " that if the temperature outside is " + tempOutside + "F, then it can start snowing.");
// let occupation = "lawyer";
// window.console.log(occupation + " can practice his/her profession after " + 5 + " years of studying, " + true);

// STEP 8, valid string literal.
// The example string isn't valid because there is a missing escape sequence for the ' in "I'm" so the JavaScript treats the ' as the end-of-line terminator and not as a literal '. 
// To fix the issue, we need to add \ before the '.
// The fixed example:
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// window.console.log(someString);  

// STEP 9, null and undefined values.
// let x = null;                            // null value:
// window.console.log(x);
// let variable;                            // undefined value
// window.console.log(variable);

// STEP 10
// let variable = "color";
// window.console.log(typeof variable);        // string
// let variable = 256;                         // number
// window.console.log(typeof variable); 
// let variable = true;                         // Boolean
// window.console.log(typeof variable); 
// let variable = new Object();                 // object
// window.console.log(typeof variable); 
// let variable = flower1;                      // undefined
// window.console.log(typeof variable); 

// STEP 11
// alert("Hello " + "Polina Kochetkova " + ", welcome to the JavaScript class!");

// STEP 12
// let name = "Polina Kochetkova";
// alert("Hello " + name + ", welcome to the JavaScript class!");

// STEP 13
// let course = "JavaScript", name = "Polina Kochetkova";
// alert("Hello " + name + ", welcome to the " + course + " class!");

// STEP 14
// alert("Hello Polina Kochetkova.\nWelcome to the JavaScript class!")

// STEP 15
// let name = prompt("Enter your name");

// STEP 16
// let course = prompt("Enter your course name");

// STEP 17
// let x = 10;
// let y = 20;
// window.console.log(x + y);

// STEP 18
// let x = 20;
// x += 20;
// window.console.log(x);

// STEP 19
// let x = 20;
// x *= 5;
// window.console.log(x);

// STEP 20
// let x = 20 % 3;
// x /= 1;
// window.console.log(x);

// STEP 21
// let x = 15, y = -1;
// window.console.log(x > y && x != y);

// STEP 22
// let x = 2, y = 5;
// window.console.log(x === y || y <= 4 );
