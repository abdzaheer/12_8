
// Mohammed Ghassan u21103188
// Form validation
document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert("Please fill out all fields before submitting.");
    } else {
        alert("Thank you for your message!");
    }
});


document.getElementById("year").textContent = new Date().getFullYear();
