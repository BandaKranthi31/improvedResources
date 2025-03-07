function callbackFunction (){
    console.log(`callback function`)
}

function higherOrderFunction(callback){
    console.log(`Iam higher order function`)
    callback()
}

higherOrderFunction(callbackFunction)