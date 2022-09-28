let array1 = [2,3,4,5]
let array2 = [1,5,6,7,4]
/*
function checkNested(array1, array2)
{
    const size1 = array1.length;
    const size2 = array2.length;
    for(let i =0; i < size1 - 1; i++)
{
    for(let j = 0; j < size1- i - 1 ; j++)
    {
        if(array1[j] > array1[j+1])
        {
            let temp;
            temp = array1[j];
            array1[j] = array1[j+1];
            array1[j+1] = temp;
        }
    }
}
for(let i =0; i < size2-1; i++)
{
    for(let j = 0; j < size2 - i - 1 ; j++)
    {
        if(array2[j] > array2[j+1])
        {
            let temp;
            temp = array2[j];
            array2[j] = array2[j+1];
            array2[j+1] = temp;
        }
    }
}
if(array1[0] > array2[0] && (array1[size1-1] < array2[size2-1]))
{
    return true;
}
else{
    return false;
}
}
*/
const result = checkNested(array1, array2);
console.log(result);

function checkNested(array1, array2)
{
    if(Math.min(array1) > Math.min(array2)  && (Math.max(array1) < (Math.max(array2))))
    {
        return true;
    }
    else
    {
        return false;
    }
}