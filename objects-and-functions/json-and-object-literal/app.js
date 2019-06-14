console.log('Muruga');

console.log('Hello !!!');


var sampleobject ={
    firstName:"Peter",
    lastname:"Parker",
    address:{
        street:"11 main street",
        City:"NYC",

    }
}

console.log(sampleobject);



// to convert the object to JSON we need to use stringify-- the difference betweem java script objects and the JSON standards is that JSON 
//mandates the usage of double quotes for the property names where as in javascript its not required.


//converting the sample object to a json string.


jsonstring=JSON.stringify(sampleobject);


//printing the json object

console.log(jsonstring);

/// OP:{"firstName":"Peter","lastname":"Parker","address":{"street":"11 main street","City":"NYC"}}



///we can also have a normal string ie. in a JSON format that shall be converted to a javascript object and can be access by the normal means 
//we access javascript objects ..

//for example let's consider a string 


var jsonobjectasstring='{"fruit":"tomato","family":"berry","color":"RED","cusines":{ "Tamil":"tomato-rice","Rome":"Pasta","Irish":"soup","Andra":"chutney"}}';
//lets convert the string to a java script object and try acessing it elementally.


var jsobject=JSON.parse(jsonobjectasstring);


//printing normally we should get the ouput with out the double quotes...



console.log(jsobject);


//OP: {fruit: "tomato", family: "berry", color: "RED", cusines: {…}}


//lets try to access the individual objects...

//printing the fruit element
console.log(jsobject.fruit);

//printing the cusines
console.log(jsobject.cusines);


//OP:  {Tamil: "tomato-rice", Rome: "Pasta", Irish: "soup", Andra: "chutney"}Andra: "chutney"Irish: "soup"Rome: "Pasta"Tamil: "tomato-rice"__proto__: Object


//lets try to access the objects one by one...


var subset=jsobject.cusines;



for (i in subset){
    console.log('Place' + ' '+ i + ' Food Name ' + ' '  +subset[i]  );
}
