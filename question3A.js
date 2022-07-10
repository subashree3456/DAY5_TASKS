// PRINT ODD ELEMENTS IN AN ARRAY

// ARROW FUNCTION

var oddelements =(numbers) => {

    let c=[];
    
    for (let  i=0;i<numbers.length;i++)
    {
    
    if(numbers[i]%2!=0)
    {
    c.push(numbers[i]);
    }
    }
    return(c);
    }
    console.log(oddelements([1,2,5,6,3,2]));

    