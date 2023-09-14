/**
 * Variable naming rules : Same as java
 * Primitives Data Types
 * numbers : 123, 120.50
 * String : 'apple'
 * Boolean : true, false
 * Undefined : variable does not have a value yet
 * Null :
 */

/**
 * There are 3 different types of variables
 * var: variable abbreviation
 * * If there is, globally-scope is a variable definition method.
 * * You can change its value later and define the same variable again.
 *
 * let: so Let is equal to ..
 * * let is a block-scope variable definition method.
 * * The structures we call blocks are the place between the curly brackets.
 * * The value of variables defined with let can be changed later
 * * but you cannot define the same variable again.
 *
 * const: short for constant, which means constant
 * as soon as the value of the variable is constant, like the number Pi
 */

let a;
console.log(typeof a);
a=6 //number
console.log(typeof a);
a='javascript' // string
console.log(typeof a);

let b=6, c='Cypress';
console.log(b+c);
console.log(b*c); // NaN

var name ="Mike";
var age=36;
var name_object={firstName:"Jake", lastName:"Masters"};
var truth=true;
var skills=['HTML', 'CSS','JS'];
var x= null;

//object
var student={
    firstName:"Kate",
    lastName:'Masters',
    age:30,
    height:170,

    fullName:function(){
        return this.firstName+ " " + this.lastName;
    }
}

const ageValue=student.age;
console.log(ageValue);
console.log(student.height);
console.log(student.fullName());


/**
 * code to run console 
 *  first save your code or choose auto save from File menu
    - Type the full filename with node
        PS C:\Users\tosun\Desktop\KTB4-Cypress\cypress\e2e\day01-javaScript_Basic> node datatypes-objects.js
 */