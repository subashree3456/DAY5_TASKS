// REMOVE DUPLICATES FROM AN ARRAY

// ANONYMOUS FUNCTION


var removeDuplicates = function(arr)
{
   return arr.filter((item,
       index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(["apple", "mango", "apple",
       "orange", "mango", "mango","pineapple"]));


// IIFE FUNCTION

(function removeDuplicates (arr)

{

arr=arr.filter((item,
            index) => arr.indexOf(item) === index);
            
 console.log(arr);   
 }
 

)

(["apple", "mango", "apple",
            "orange", "mango", "mango","pineapple"]); 

