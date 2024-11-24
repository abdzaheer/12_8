// Form validation
document.querySelector("form").addEventListener("submit", function (e) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert("Please fill out all fields before submitting.");
    } else {
        alert("Thank you for your message!");
    }
});

// Dynamic year in footer
var yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

// Background color toggle
var toggleButton = document.getElementById("toggle-bg");
toggleButton.addEventListener("click", function () {
    var colors = ["#f4f4f4", "#e0f7fa", "#fbe9e7", "#ede7f6", "#fffde7"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
