const doSomethingAsync =() => {
return new Promise ((resolve,reject) => {
    (true)
    ? setTimeout(() => resolve ('Do Somthing Async'), 3000)
    : reject (new Error ('Test Error'))
});
}

const dosomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before')
dosomething();
console.log('After');

const anotherFunction = async() => {
    try{
        const something = await doSomethingAsync();
        console.log(something)
    }catch (error){
console.error('error')
    }
}

console.log('Before1')
anotherFunction();
console.log('After1');
