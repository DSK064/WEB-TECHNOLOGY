
function getTime()
{
    let date = new Date();
    let hours  = 0;
    if(date.getHours() > 12)
    {
        hours = date.getHours() - 12;
        return hours+" PM:"+date.getMinutes()+":"+date.getSeconds();
    }
    else return date.getHours()+" AM:"+date.getMinutes()+":"+date.getSeconds();

}
function getDay()
{
    let date = new Date();
    switch(date.getDay())
    {
        case 0 : return "Sunday";
        case 1 : return "Monday";
        case 2 : return "Tuesday";
        case 3 : return "Wednesday";
        case 4 : return "Thursday";
        case 5 : return "Friday";
        case 6 : return "Saturday";
    }
}
console.log("Today is: "+getDay());
console.log("Time is: "+getTime());

