// STRING TO TITLE CAPS IN AN STRING ARRAY

// ARROW Function

var titlecase=(str)=>
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

return newstr;
}

console.log(titlecase("suba shree"));