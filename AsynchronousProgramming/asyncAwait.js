async function makeCoffee(){
    let msg = await makeCoffeeProcess();
    console.log(msg)
}

function makeCoffeeProcess(){
    return new Promise((resolve,reject)=>{

        let arabica = true;
        if(arabica){
            resolve('Coffee is Ready')
        }
        else{
            reject('Damnn no coffee')
        }

    })
}


makeCoffee();