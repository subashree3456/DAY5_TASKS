// PALINDROME 

// ANOYMOUS FUNCTION

var array=function(palindrome)
{

let n=[];
    for(let i=0;i<palindrome.length;i++){
    var rev=palindrome[i].split("").reverse().join("");
    if(rev===palindrome[i]){
    n.push(rev);
    }
    }
    console.log(n);
}
console.log(array(["amma","appa","malayalam","mama","periamma"]));

// IIFE FUNCTION

(function bar(marks)
{
    let sum=[];
    for(let i=0;i<marks.length;i++){
    var rev=marks[i].split("").reverse().join("");
    if(rev===marks[i]){
    sum.push(rev);
    }
    }
    console.log(sum);
   
})
(["amma","appa","malayalam","mama","periamma"]);


