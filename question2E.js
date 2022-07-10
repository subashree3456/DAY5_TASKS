// PALINDROME 

// ARROW FUNCTION

var array=(palindrome) => 
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
