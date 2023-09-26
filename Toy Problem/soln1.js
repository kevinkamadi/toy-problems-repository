const prompt = require('prompt-sync')()   

function studentsMarks(marks){
    if (marks >=79 && marks <=100){
        return "A"
    }
    else if(marks >=60 && marks <=79){    
        return "B"
    }                                                  
    else if(marks >=59 && marks <=49){
        return "C"
    }
    else if(marks >=40 && marks <=49){
        return "D"
    }
    else if(marks <=40){
        return "E"
    }
}


console.log(studentsMarks(86));