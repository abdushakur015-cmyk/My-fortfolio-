alert("Welcome!!")
const contactform = 
document.getElementById("sendBtn");

contactform.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Message sent successfully!✅")
})