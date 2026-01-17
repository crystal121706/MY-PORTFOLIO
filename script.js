document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
    } else {
        
        alert("Thank you, " + name + "! Your message has been received.");
        document.getElementById('contactForm').reset();
    }
});

const textarea = document.getElementById("message");

textarea.addEventListener("input", function() {
    this.style.height = "auto"; // Reset height muna
    this.style.height = (this.scrollHeight) + "px";

});    