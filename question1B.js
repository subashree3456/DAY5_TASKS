// STRING TO TITLE CAPS IN AN STRING ARRAY

// Anonymous Function

var toTitleCase=function(str)

{

return str.toLowerCase().split(' ').map(function (word)
 {
   
 return (word.charAt(0).toUpperCase() + word.slice(1));
 
 }).join(' ');
 
 }

console.log(toTitleCase("welcome to w3docs"));


// IIFE Function


(function titlecaps (str)

{

let upper=true;

let newstr="";

for(var i=0, l=str.length; i<l;i++)

{

if(str[i] == " ")

{

upper=true;

newstr +=str[i];

continue;

}

newstr +=upper ? str[i].toUpperCase() : str[i].toLowerCase();

upper=false;

}

console.log(newstr);

})

("suba shree");
