
console.log('functions as expression and statements....')

console.log('hello');


///expression  : a unit of code that results in a value. it doesnt have to save to be a variable...


var a;
///a=3    -- returns 3 , just by typing it in a terminal.....

////just typing 3 , also prints 3, this is an expression as well...
///// 1+2  returns 3
///output 
/*
1+2
3
*/

///statement : a statement doesnt return a value .....it just works...where as an expression returns a value...
//// since fucnitons are objects we can have both functions as a statement  as well fucntion as a  expression...

////// if ( a=2) this is a statement...it doesnt return anything....

//this is a function statement.....


///we can call the greet even before declaring it  because of hoisting...
greet();
///this will not result in an error....

function greet ()
{
    console.log('hi from function statement');
}

//this is a function expression.....anonymous
//anonymousgreet();
//callling it before the declaration results in Uncaught TypeError: anonymousgreet is not a function

// as it will be just an variable with default value undefined, which is not an object Yet...only the variable name is hoisted...
// during the executuion phase, it creates the object



var anonymousgreet = function  (){
    console.log('hi from function expression');
}

anonymousgreet();
////hi from function expression

function log (a){
    console.log(a)
};

log(2);

log("hello as a text argument");

///passing a function as an argument......
///prints the function body.....
log(function ()
{
    console.log('hello');
});

//////creating a function which acccepts and executes a function....

function logfunction (a){
    a();
};

//////sending a function created on thge fly to the funciton above...whish shall execute this function below...
logfunction(function ()
{
    console.log('hello');
});

