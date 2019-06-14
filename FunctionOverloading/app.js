///one type of funtion overloading is that we can hard code one of the parameter andc
//and create a custom funtion and call the function form that..

function greet (firstname,lastname,language)
{

if(language==='EN'){
    console.log('Hello' + '   '+  firstname + '   '+   lastname);
}

if(language==='TN'){
    console.log('vanakkam' + '   '+  firstname + '   '+   lastname);
}

};


////to greet in english

greet('Praveen','Palani','EN');
////to greet in tamil.
greet('Praveen','Palani','TN');


function GreetEng(firstname,lastname){
    greet(firstname,lastname,'EN');
};



function GreetTAM(firstname,lastname){
    greet(firstname,lastname,'TN');
};


////to greet in english
GreetEng('Praveen','Palani','TN');

////to greet in tamil.
GreetTAM('Praveen','Palani','TN');