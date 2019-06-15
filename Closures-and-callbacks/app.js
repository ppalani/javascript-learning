//// this setTimeout function is an example of first-class functions and  closures...

///a call back function is a function you gave as a parameter to an other function
///and the parameter function given is invoked ie. call back function,,,

function sayHiLater(){
    var greeting='Hello!!!!'


    setTimeout(function(){
        console.log(greeting)
    },5000)
}



sayHiLater();



////example of  a  call back functions...




function tellmewhendone(callback)
{
    var a=1000;
    var b=1000;
    var c=1000;
    callback();
}



tellmewhendone(function (){
    console.log('im done');
});



tellmewhendone(function (){
    console.log('im also done');
});
