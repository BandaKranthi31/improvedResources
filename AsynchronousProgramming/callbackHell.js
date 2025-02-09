setTimeout(()=>{
    console.log(`I Like green color, nvm I hate callback it didnt work`)


    setTimeout(()=>{
        console.log(`Damnn i'll give you 5 seconds`)

        setTimeout(()=>{
            console.log(`Guess my Fav Color`)

            setTimeout(()=>{
                console.log('Lets play a Game')
            },1000)
        },2000)
    },500)
},5000)