let makeCoffee = new Promise(function (resolve, reject) {


    let arabica;
    let randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber >= 50){
        arabica = true;
    } else{
        arabica = false;
    }
    if(arabica){
        resolve('Coffe is Ready')
    } else{
        reject('OOps! No Coffee')
    }
})

makeCoffee.then((msg)=>{
    console.log(msg)
})
.catch(function (msg){
    console.log(msg)
})