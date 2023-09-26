//Speed Detector Code

const prompt = require("prompt-sync")()

function speedDemerits(speed){
    if (speed <= 70){                           
        return "Proper Driving!"
    }

    const overSpeed = speed - 70;
    const speedDemerits = Math.floor(overSpeed / 5);

    if (speedDemerits > 12){                                
        return "License suspended";                             
    }
    return `points: ${speedDemerits}`
}

console.log(speedDemerits(70));