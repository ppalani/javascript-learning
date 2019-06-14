console.log('by value and by reference')


// primitive values
/*
number
boolean
string
null
undefined
symbol

primitive values have a unique space of memory created when ever they are declared
or one variable is assigned to another
a=3   -- new memory is created for a
b=c -- new memory is created for b
*/



///objects
/* functions, or any type of ojbects...

a={} - created a new memory to a.

b=a - no new oject is created it simply points to the memory of A, the memory of a and b is same and hence the hold the same values 
any changes in one object results in changes in other as well.
*/

/// by value..

var a=2;
var b;
b=a


console.log(a);

console.log(b);


a=5;
console.log(a);
///b's value remains 5 as it have a separate memory reference..
console.log(b);




/////by reference....( for all objects)



var c={
    firstname:"praveen"
};
var d;

d=c;


console.log(c);


console.log(d);


///changing the value of one object results in changes in both of them

d.firstname="Hari"; /// mutate the value of d 


console.log(c);


console.log(d);



var greet_en ={text:"hello"};
var greet_es =greet_en;



function greetChange(obj){
    obj.text='vanakam';
}
greetChange(greet_es);
console.log(greet_es);
console.log(greet_en);

////equal operatoe with a {} creates a new memory for example  greet_en ={text:"changes...."};
greet_en ={text:"changes...."};
console.log(greet_en);