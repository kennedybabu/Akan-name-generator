const form = document.getElementById("form")

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()
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
    var YY = thirdDigit + firstDigit    


    if (userDay < 0 || userDay > 31 && userMonth <= 0 || userMonth > 12) {
        alertUser()
        return
    } else {
        console.log(CC, YY)
    }

    // if( male.checked == true) {
    //     var birthDay =   ( ( (firstTwo/4) -2*firstTwo-1) + ((5*lastTwo/4) ) + ((26*(MM+1)/10)) + CC ) % 7
    //     console.log(birthDay)
    // }


})

function alertUser(){
    alert("Enter valid day")
}