const form = document.getElementById("form")

document.getElementById("form").addEventListener("submit", function(e) {
    let userDay = document.getElementById("inputDay").value
    let userMonth = document.getElementById("inputMonth").value
    let userYear = document.getElementById("inputYear").value

    let male = document.getElementById("male")
    let female = document.getElementById("female")

    e.preventDefault()

    if (userDay < 0 || userDay > 31 && userMonth <= 0 || userMonth > 12) {
        alertUser()
        return
    } else {
        console.log(userDay, userMonth, userYear)
    }
})

function alertUser(){
    alert("Enter valid day")
}