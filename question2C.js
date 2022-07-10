//SUM OF ALL NUMBERS

// ARROW Function

var sum=(marks)=>

{

let sum=0;

for(let mark of marks)

{
    
sum=sum+mark;

}


return (sum);

}

console.log(sum([40,50,0,90,10]));

