let myArray = [9,5,9,5,1,1,1];
const size = myArray.length;


// 3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2
// 5,6,6,7,6,3,9
// 4,4,4,9,9,9,9
// 9,5,9,5,1,1,1


console.log(countBoomerangs(myArray, size));

function countBoomerangs(myArray, size) 
{
    let count = 0;
    for(let i = 0; i + 2 <= size - 1; i++)
    {
        let nextIndex = i + 2;
        if((myArray[i] == myArray[nextIndex]) && (myArray[i] != myArray[i+1]))
        {
                count++;
        }
    }
    return count;
}