const array1 = [1,2,3,4]
const array2 = [2,1,5,6,7]

console.log(processArrays(array1,array2))

function processArrays(array1, array2)
{
    let newArray = array1.concat(array2);
    let arraySet = [...new Set(newArray)];
    arraySet.sort();
    return arraySet;
}