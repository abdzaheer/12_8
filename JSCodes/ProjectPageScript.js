// Days ago tooltip (and sort project cards by order (newest, oldest, name ascending, name descending))
document.addEventListener('DOMContentLoaded', function() {
    var sortDropdown = document.getElementById('sortprojects');  // Get the sort dropdown
    var projectCards = document.querySelectorAll('.project-card');  // Get all project cards

    // Function to calculate the number of days ago for a project card
    function calculateDaysAgo(dateString) {
        // Create a Date object from the date string
        var dateObject = new Date(dateString.split('-').reverse().join('-'));
        // More on this line:
        // Splitting the date string using .split() limited by the '-' creates an array of elements splitted by the '-' char
        // Reversing the date array so we could achieve a yyyy-mm-dd format for JavaScript readability
        // Joining the date array back to a string using .join() joint by the '-' char making a correct new Date object of Date(yyyy-mm-dd)
        
        // Calculate the difference in time between now and the project date in milliseconds, as .now() and .getTime() is in milliseconds
        var daysDifference = Date.now() - dateObject.getTime();

        // Convert the difference result(ms) to days by dividing over milliseconds, seconds, minutes, and hours
        return Math.floor(daysDifference / (1000 * 60 * 60 * 24));
    }

    // Function to sort the projects based on the selected sort option
    function sortprojects(sortOption) {
        var sortedProjects = new Array();  // Create an empty array to hold the sorted projects

        // Convert NodeList into an array and loop through each project card
        // This is because we retrieved the project cards with documentquerySelectorAll(), it gets as a NodeList which lacks array methods that we need
        for (var i = 0; i < projectCards.length; i++) {
            sortedProjects.push(projectCards[i]);
        }

        // Sort based on the selected option
        // For both 'newest' and 'oldest' sort options, we use calculateDaysAgo() to retrieve the card's "days ago" value to compare
        // For both 'asc-name' and 'desc-name' sort options, name1 and name2 are compared using > and < comparators, sorting alphabetically (Unicode values), then return to the .sort() array method
        // We are using the array's sort() method (a-b, -n sorts ascending, +n sorts descending, 0 remains unchanged), sorts all elements using a sorting algorithm (probably merge sort, I kind of understand it)
        if (sortOption === 'newest') {
            sortedProjects.sort(function(card1, card2) {
                var daysAgo1 = calculateDaysAgo(card1.querySelector('.project-date').textContent);
                var daysAgo2 = calculateDaysAgo(card2.querySelector('.project-date').textContent);
                return daysAgo1 - daysAgo2;  // Sort in ascending order (newest first) (arg1 - arg2 gives ascending)
            });
        } else if (sortOption === 'oldest') {
            sortedProjects.sort(function(card1, card2) {
                var daysAgo1 = calculateDaysAgo(card1.querySelector('.project-date').textContent);
                var daysAgo2 = calculateDaysAgo(card2.querySelector('.project-date').textContent);
                return daysAgo2 - daysAgo1;  // Sort in descending order (oldest first) (arg2 - arg1 gives descending)
            });
        } else if (sortOption === 'asc-name') {
            sortedProjects.sort(function(card1, card2) {
                var name1 = card1.querySelector('.project-title').textContent.toLowerCase();
                var name2 = card2.querySelector('.project-title').textContent.toLowerCase();
                if (name1 < name2) {
                    return -1; // name1 comes before name2
                } else if (name1 > name2) {
                    return 1; // name1 comes after name2
                } else {
                    return 0; // names are equal
                }                
            });
        } else if (sortOption === 'desc-name') {
            sortedProjects.sort(function(card1, card2) {
                var name1 = card1.querySelector('.project-title').textContent.toLowerCase();
                var name2 = card2.querySelector('.project-title').textContent.toLowerCase();
                if (name1 > name2) {
                    return -1; // name1 comes before name2 (in descending order)
                } else if (name1 < name2) {
                    return 1; // name1 comes after name2 (in descending order)
                } else {
                    return 0; // names are equal
                }                
            });
        }

        // Append the project cards based on the sorted order back to 'projects-container' by using the method .appendChild() iteratively in a for loop
        var container = document.querySelector('.projects-container');
        for (var i = 0; i < sortedProjects.length; i++) {
            container.appendChild(sortedProjects[i]);
        }
    }

    // Event listener for when the user changes the sort option in the dropdown
    sortDropdown.addEventListener('change', function() {
        sortprojects(sortDropdown.value);  // Call the function with the selected option
    });

    // Set the "days ago" tooltip for each project date
    var dates = document.querySelectorAll('.project-date');
    dates.forEach(function(dateIndex) {
        var dateString = dateIndex.textContent;
        var daysAgo = calculateDaysAgo(dateString);
        dateIndex.title = `${daysAgo}d ago`;  // Set the tooltip
    });
});


// YouTube Media Player Modal
document.addEventListener('DOMContentLoaded', function() {
    // Get modal, buttons, and YouTube media player
    var modal = document.getElementById('myModal');
    var closeModalButton = document.getElementById('closeModal');
    var YouTubeMediaPlayer = document.getElementById('YouTubeMediaPlayer');

    // Get all the Live Demo buttons (links with video-link)
    var openModalButtons = document.querySelectorAll('.project-card .project-links a[video-link]'); // Select all Live Demo links

    // For when any Live Demo button is clicked
    openModalButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (default behavior as in <a> tag behavior)

            // Set display to block
            modal.style.display = "block";

            // Get the YouTube video link from the clicked button's attribute to set to iframe's src embed link
            var videoLink = button.getAttribute('video-link');
            
            // Set the src attribute in iframe with video link
            YouTubeMediaPlayer.src = `https://www.youtube.com/embed/${videoLink}`;
        });
    });

    // When the user clicks the close button, close the modal
    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none"; // Display to none
        YouTubeMediaPlayer.src = ""; // Stop the video by clearing the iframe src attribute
    });

    // When the user clicks anywhere outside the modal content, close the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) { // Specifically "modal", rather than the conents inside
            modal.style.display = "none"; // Display to none
            YouTubeMediaPlayer.src = ""; // Stop the video by clearing the iframe src attribute
        }
    });

    // When the user presses the ESC key, close the modal
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") { // Check if the ESC key is pressed
            modal.style.display = "none"; // Display to none
            YouTubeMediaPlayer.src = ""; // Stop the video by clearing the iframe srs attribute
        }
    });
});