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


var anonymousgreet = function  (){
    console.log('hi from function expression');
}

anonymousgreet();
////hi from function expression










