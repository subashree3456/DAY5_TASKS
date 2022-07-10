// MEDIAN OF TWO SORTED ARRAY OF SAME SIZE

const getMedians=function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}

ar1=[1, 12, 15, 26, 38];
ar2=[2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedians(ar1, ar2, n1));  //Answer:16
else
    console.log("Array size is not equal");


//IIFE FUNCTION

(function GetMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    var n1 = ar1.length;
    var n2 = ar2.length;
if(n1===n2){
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    console.log("Median is "+(m1 + m2)/2);
}
else{
    console.log("Arrays are unequal")
}
    
})
 ([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],5 ); //"Answer:16"