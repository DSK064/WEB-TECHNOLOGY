let stolenItems1 = {}
let stolenItems2 = {piano : 500}
let stolenItems3 = {piano : 500, stero : 300}

let name1 = "Brutus";
let value = 300;

console.log(covertToMap(stolenItems1,name1,value))

value = 400;
console.log(covertToMap(stolenItems2,name1,value))

name1 = "Caligula"
console.log(covertToMap(stolenItems3,name1,value))

function covertToMap(stolenItems, name1, value)
{
    if(stolenItems != null)
    {
        let map = new Map(Object.entries(stolenItems));
        map.set(name1,value);
        return map;
    }
    else
    {
        let map = new Map();
        map.set(name1, value);
        return map;
    }
}