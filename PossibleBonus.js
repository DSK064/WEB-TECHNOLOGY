const a = 1
const b = 9
if(checkForBonus(a, b))
console.log("Bonus is possible")
else
console.log("Bonus is not possible")

function checkForBonus(a, b)
{
    if((a < b) && (b <= a + 6))
    return true;
    else
    return false;
}