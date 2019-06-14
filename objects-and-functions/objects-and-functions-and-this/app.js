/// objects functions and this keyword....
////when a function is invoked a new execution env is created....

console.log(this);
//prints the global exection 's this....


function a ()
{
      //prints the global exection 's this....as welll.....
    console.log(this);
  
  //this can create a new variable in the global execution envirinments...
    this.newvariable='xxxxxxx';
}


a();


var b = function  (){
    //prints the global exection 's this....as welll.....
    console.log(this);
}

b();


console.log(newvariable);




var c ={
    name:'the c object',
    log: function (){
        /////this can be changed even by its own functions.....
        ////so a function can change the other properties with in the executions context...
        this.name='updated c object.....'
        console.log(this)

        function update_name_again(name_para){

            this.name=name_para;
///////this will not update the object as when a new funtion is 
/////executed this will change the execution contect and the this variable holds the env of the inner function
        }('...again.....updated c object.....again.......');

        console.log(this)
    }
}

///this willl print the this in reference to the executiuon context of the log function.......
///................since its inside the object c, the entire c object is printed....

c.log();





////to solve this issue and let the second update also happends...
//// we can set up the this of the outer function to a variable and.
///pass that variable....

var d ={
    name:'the d object',
    log: function (){

        var this_outerfunction=this;
        /////this can be changed even by its own functions.....
        ////so a function can change the other properties with in the executions context...
        this.name='updated d object.....'
        console.log(this_outerfunction)

        function update_name_again(name_para){

            this_outerfunction.name=name_para;
///////this will  update the object as the "this " now refers to the outer function

        };
        update_name_again('again update d');

        console.log(this_outerfunction)
    }
}

///this willl print the this in reference to the executiuon context of the log function.......
///................since its inside the object c, the entire c object is printed....


///Note:: this will not work in case the function is immediately executed....
///esperimentally tested....

d.log();







