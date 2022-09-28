const number = 600
const sum = add(number)
console.log("sum of numbers is:"+sum)
function add(number)
{
    let value = 0;
    for(let i = 1; i <= number; i++)
    {
        value += i;
    }
    return value;
}