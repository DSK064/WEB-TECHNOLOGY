const set = new Set(["hi","hello",1,2])

console.log(convertSet(set))

function convertSet(set)
{
    const array = Array.from(set);
    return array;
}