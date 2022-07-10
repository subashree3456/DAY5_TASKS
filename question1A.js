// PRINT ODD ELEMENTS IN AN ARRAY

// Anonymous Function

var array=function(oddelements)
{
var c=[];
for(let i=0;i<oddelements.length;i++)
{
if(oddelements[i]%2!=0)
{
c.push(oddelements[i]);
}
}
return(c);
}
console.log(array([1,2,5,6,3,2]));


// IIFE Function

(function oddelements()
{
    var array=[1,2,5,6,3,2];
    var c=[];
for(let i=0;i<array.length;i++)
{
if(array[i]%2!=0)
{
c.push(array[i]);
}
}
console.log(c);
    })
();
