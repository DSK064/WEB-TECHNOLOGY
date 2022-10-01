let num1 = 10;
let num2 = 20;


// Asynchronus programming
/*addFunction1=()=>
{
setTimeout(()=>{console.log("adding: "+(num1+num2));},1000);
}

subFunction1=()=>
{
    console.log("subtraction: "+(num2-num1));
}
mulFunction1=()=>
{
    console.log("Multiplication: "+(num1*num2));
}

addFunction1();
subFunction1();
mulFunction1();*/

// usage of callback

addFunction2=()=>
{
    console.log("using callback, addition: "+(num1+num2));
}
subFunction2=(callback)=>
{
    setTimeout(()=>{console.log("using callback, subtraction : "+(num2-num1));
    callback();
    },1000);
}
mulFunction2=()=>
{
    console.log("using callback, multiplication : ",(num1*num2));
}

subFunction2(function ()
{
    addFunction2();
    mulFunction2();
})

// using promises

addFunction3=()=>
{
    return new Promise((resolve,reject)=>
    {
        let errorVariable = false;
        if(!errorVariable)
        {
            setTimeout(()=>{console.log("using promises, addition:"+(num1+num2));},1000);
            resolve();
        }
        else{
            reject("Error comes here");
        }
    })

}

subFunction3=()=>
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("using promises, subtraction: "+(num2-num1));},1000);
        resolve();
    })
}
mulFunction3=()=>
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("using promises, multiplication: "+(num1*num2));},1000);
        resolve();
    })
}

mulFunction3().then(addFunction3).then(subFunction3).catch((e)=>{console.log("Exception: "+err)});

// using Async and wait

addFunction4=()=>
{
    setTimeout(()=>{console.log("using Async and wait, addition:",(num1+num2));},1000);
}
subFunction4=()=>
{
    setTimeout(()=>{console.log("using Async and wait, subtraction:"+(num2-num1));},1000);
}

mulFunction4=()=>
{
    setTimeout(()=>{console.log("using Async and wait, multiplication:"+(num2*num1));},1000);
}
async function menu()
{
    await addFunction4();
    await subFunction4();
    await mulFunction4();
}

menu();