var arr1=[1,2,3,4,5,6,7,8];

///this function shalll get an array and a function which states what transformation needs to be done on the
//array and transforms it and returns...
function MapArrays(arr,fn)
{
    resarr=[];
    for (var i =0;i<arr.length;i++)
    {
        resarr.push(fn(arr[i]));
    };
return resarr;

};


function square_nums(x){
return x*x;
}

console.log(square_nums(4));

console.log(arr1);
console.log(MapArrays(arr1,square_nums));


console.log(MapArrays(arr1,function (x){
    return x>2;
    }));


function checkpastLimit(limiter,x)
{
   return limiter>x;
};



console.log(MapArrays(arr1,checkpastLimit.bind(this,5)));


function checkpastlmitsim(limiter_v)
{

    return function (limiter,item)
    {
    return     limiter>item;
    }.bind(this,limiter_v)


};
console.log(MapArrays(arr1,checkpastlmitsim(7)));

