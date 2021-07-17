const form = document.getElementById("form")

document.getElementById("form").addEventListener("submit", function(e) {
    let userDay = document.getElementById("inputDay").value


    e.preventDefault()
    userAlert()
    console.log(userDay, form, form.value)
})

function userAlert(){
    alert("Enter valid day")
}