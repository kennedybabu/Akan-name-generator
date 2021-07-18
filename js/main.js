const form = document.getElementById("form")


//array of Akan names
maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]



document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()
    //store user input values
    let userDay = document.getElementById("inputDay").value
    let userMonth = document.getElementById("inputMonth").value
    let userYear = document.getElementById("inputYear").value

    let male = document.getElementById("male")
    let female = document.getElementById("female")

    
    let yr = userYear.toString()
    var  firstDigit = yr[0]
    var  secondDigit = yr[1]
    var  thirdDigit = yr[2]
    var  fourthDigit = yr[3]

    var CC = firstDigit + secondDigit
    var YY = thirdDigit + fourthDigit    

    let message = "Your Akan name is "

    //validate user input
    if (userDay < 0 || userDay > 31 && userMonth <= 0 || userMonth > 12) {
        alertUser()
        return
    } else if( male.checked == true) {
        var birthDay =   ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(userMonth+1)/10)) + userDay ) % 7
        var key = parseInt(birthDay)
        var akanName = maleNames[key]
        if(akanName === undefined) {
            alertUserYear()
        } else {
            document.getElementById("output").innerHTML = message.concat(akanName) 
        }
           
        
    } if (female.checked == true) {
        var birthDay =   ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(userMonth+1)/10)) + userDay ) % 7
        var key = parseInt(birthDay)
        var akanName = femaleNames[key]
        if(akanName === undefined) {
            alertUserYear()
        } else {
            document.getElementById("output").innerHTML = message.concat(akanName) 
        }
               
    } 

})

//alert functions
function alertUser(){
    alert("Enter valid Date")
}

function alertUserYear() {
    alert("Enter a valid Year")
}