let data = 5;

myFunction=()=>
{
    return new Promise((resolve,reject)=>
    {
        isNum = isNaN(data);
        if(isNum)
        {
            reject("error");
        }
        else{
            
            if(data % 2 == 0)
            {
                setTimeout(()=>{console.log("even");},1000);
                resolve();
            }
            else{
                setTimeout(()=>{console.log("odd");},2000);
                resolve();
            }
        }
    })
}

myFunction().catch((err)=>{console.log(err)})