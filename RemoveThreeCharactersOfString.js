const name = "Saikumar"
const result = removeCharacters(name)

function removeCharacters(name)
{
    const dum = ""
    for(let i = 3; i < name.length; i++)
    {
        dum += name.charAt(i);
    }
    return dum;
}