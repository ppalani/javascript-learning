console.log('Arrays!!!');



var arr=['3','hello',false,function   (obj){
obj=true;
}];



//print the array
console.log(arr);

///this will not update the value of the boolean false.....
///only non primitive types are updated ie objects...
arr[3](arr[2]);

//print the array
console.log(arr);


///printing the value....
var arr1=['3','hello',false,{name:"praveen"},function (para){
    console.log(para+'  Hello')
}];



console.log(arr1);

arr1[4](arr1[3].name);

/// this will not update the objects paramater.....

var arr3=['3','hello',false,{name:"praveen"},function (para){
    console.log(para+'  Hello')
    para.name='updated name';


}];



console.log(arr1);

arr3[4](arr3[3].name);


console.log(arr3);


///-------------------------------------------arguments and sperad--------------------------


console.log('------------arguments and Spread----------------');


///arguments holds all the values that you pass to a function..


////Arguments is just another name - to the parameter you pass to an function..
/// in JAVA SCRIPT----- arguments is a key word holds a list of all the arguments passed to a function..





function greet(firstname,lastname,lanuage,...x){
//// default parameter setup......
console.log(...x);
    lanuage=lanuage||'English';
    
    if (arguments.length===0){
        console.log('parameter needs to be passed');
        return;
    }


    console.log(firstname + '   ' + lastname +'    ' + lanuage);


    console.log(arguments);
};


///in java script we can call the function even with out the no of arguments matched wth the list..


///the below is absolutely valid...


greet();

console.log('---------------------')

///the below is absolutely valid...


greet('praveen','palani');




///the below is absolutely valid...


greet('praveen','palani','TAMIL','a','b','c');



//// when a function is having more than the no of arguments in the definition...
/// a unlimited no of arguments can be passed on and that shall be accessed using the 
//key word ...X or ... y or anything with ...name






greet('praveen','palani','TAMIL','a','b','c');

























