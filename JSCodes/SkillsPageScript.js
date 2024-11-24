
// Wael Ouddane (U21104525)

// Define the data for each category
const data = {
    programming: ["C++", "Java", "C#", "Python", "JavaScript", "HTML & CSS"],
    tools: ["Git & GitHub", "Visual Studio Code", "MySQL", "Docker", "Postman"],
    frameworks: ["React", "Node.js", ".NET Core", "Bootstrap"],
    certifications: [
        "Certified Python Developer - XYZ Institute",
        "Full Stack Web Development - ABC Online Course",
        "Java Programming Fundamentals - Coursera"
    ]
};

// Function to display the list based on the selected category
function showList(category) {
    const container = document.getElementById("list-container");

    // Clear the existing content
    container.innerHTML = "";

    // Get the items for the selected category
    const items = data[category];

    // Create a new list
    const ul = document.createElement("ul");
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    // Append the new list to the container
    container.appendChild(ul);
}

// Display the default list when the page loads
window.onload = function () {
    showList('programming');
};
