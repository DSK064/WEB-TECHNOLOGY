let myArray1 = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
const size1 = myArray1.length;

let myArray2 = [9, 5, 9, 5, 1, 1, 1];
const size2 = myArray2.length;


console.log(countBoomerangs(myArray1, size1));
console.log(countBoomerangs(myArray2, size2));

function countBoomerangs(myArray, size) 
{
    let count = 0;
    for(let i = 0; i < size - 1; i++)
    {
        if(i + 2 <= size-1)
        {
            let nextIndex = i + 2;
            if(myArray[i] == myArray[nextIndex])
            {
                count++;
            }
        }
    }
    return count;
}