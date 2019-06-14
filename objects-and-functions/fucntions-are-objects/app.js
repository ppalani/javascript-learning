console.log('test');


///first class function, everything you can do with other types such as objects,strings booleans etc you can do with function
///you can create functions on the fly,
//you can pass functions as parameters,
// you can return functions
//you can also assign properties to functions

//has some special properties, function can attach properties to a functions including other functions...


//hideen properties,,,
/// can be anonymous , meaning name can be optional
/// code property can be executed by () --
/// function is a oject with other properties, code is one of such property, which is invokeable.

function  greet (){
    console.log('hi');

}
greet.lang='English';



///prints the entire function definition
console.log(greet);

///prints the function properties value
console.log(greet.lang);

///executes the funtion/

greet();


console.log('------------------');



