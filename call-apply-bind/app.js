/// bind  {call and apply} shall help in altering the "this" variable 
//of the execution contect of the function.



///lets create an object which has the name and prints the name


var person ={ firstname:"Praveen",
lastname:"Palani",
greet:function(){
    console.log('hello'+'   '+this.firstname + ' '+ this.lastname );
    
},
getfullname:function(){
    var fullnm=this.firstname + ' '+ this.lastname;
    return fullnm;
    
}

};


//lets call the function as it is..
person.greet();


//-----this is an example of function borrowing.....
////now lets create an another object...
var person2 ={ firstname:"Prem",
lastname:"Kumar"};

greetfunc=person.greet.bind(person2);

greetfunc();

////lets create a function as multiply 2 nos...

function multiplynumbers(a,b){
return a*b;
};


var k=multiplynumbers(2,3);
console.log(k);

var multiplybytwo=multiplynumbers.bind(this,2);
console.log(multiplybytwo(5));


var multiplyby3=multiplynumbers.bind(this,3);
console.log(multiplyby3(8));

///-----




var logname=function (lang){

    if (lang==='EN')
    {
        console.log('Hello..... '+this.getfullname());
    }
    if (lang==='TN')
    {
        console.log('Vanakkam..... '+this.getfullname());
    }

};





console.log(person.getfullname());

logname.call(person,'EN');
logname.call(person,'TN');


logname.apply(person,['TN']);

console.log(person.getfullname.apply(person2));



