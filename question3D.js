
// PRIME NUMBER 

// ARROW Function

var prime=(num)=>{
    let result=[];
    for (let i = 0; i <num.length; i++) {
        let flag = 0;
    
        
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    console.log(result);
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));