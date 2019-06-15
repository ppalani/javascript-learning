/// in java script a function can be anonymously defined and its need not necessary to have a name,
// the function can be declared and called on the fly.


console.log('immediately invoked function expressions...');

(function (greeting){
    console.log('hello '+greeting)
}('World!!!'))


console.log('***--understanding closures*******------');

//// closures....

// in java scripts functions can be a object and can be assigned to a variable...
///For example consider the function...


function greet (vlanguage){
return function(name){
    console.log(vlanguage+'    ' + name);
}
}

//lets create  one instance of a function with english as the first argument....

var engreet=greet('English');

//now we are callling the english function with the praveen as a paramater..
///the function still holds the value of English...
////the ability of Javascript to hold the values of the outer function's variable , even after the 
//execution phase has completed for that particular function, where there is a function inside is 
//called closure...ie. the ability to closure the value of the function paramater...

engreet('Praveen');



///understanding closures with a most common example....

///this will create an array of functions...
function functionFactory()
{
    var arr=[];
    for(var i=0;i<5;i++)
    {
        arr.push(function (){
            console.log('function no  '+i)
        });
    }

    return arr;
}


////assigning the call of function factory to an array avariable 

///the variable i is loaded 1,2,3,4,5, when it comes to 5 it no longger executes the function
//however the variable i holds the value of 5....and the execution context of the outer function still
//holds the value 5 and hence alll of the below calls results in priting 5...
funcarray=functionFactory();

funcarray[0]();
funcarray[1]();
funcarray[2]();
funcarray[3]();
funcarray[4]();

///in order to make a work around of the above scenarios wheere in all the functions prints 5 in place of
//the loop variable we shall use an immediately invoked function and return a function in the
//immediately invoked fundtion.,


function createFunctions(){
    var arrFun=[];
    for (var p=0;p<5;p++)
    {
        arrFun.push(
            (function (k){
                    return function()
                    {
                        console.log('Handled function'+'   '+k);
                    };
            }(p))
        );
    }

return arrFun;

}

var handledarray=createFunctions();

handledarray[0]();
handledarray[1]();
handledarray[2]();
handledarray[3]();
handledarray[4]();



/////// closures in framework...

///function factories...


function GreetFactory(lang)
{
    if(lang==='EN')
    {
        return(function (firstname,lastname){
            console.log('Hello' + ' '+ firstname+ '  '+ lastname);
        });
    }
    if(lang==='TN')
    {
        return(function (firstname,lastname){
            console.log('Vanakam' + ' '+ firstname+ '  '+ lastname);
        });
    }
}


var greetEng=GreetFactory('EN');
var greetTam=GreetFactory('TN');


greetEng('Praveen','P');
greetTam('Praveen','P');















