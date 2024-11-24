// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('scroll-progress-bar'); // Select the progress bar element by its ID

    // Listen for the scroll event on the window
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset; // Get the current vertical scroll position
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
        // Calculate the total scrollable height (document height minus viewport height)
        
        const scrollPercent = (scrollTop / docHeight) * 100; 
        // Calculate the percentage of the page that has been scrolled

        progressBar.style.width = `${scrollPercent}%`; 
        // Dynamically update the width of the progress bar to reflect the scroll percentage
    });
});

// Wait for the DOM to fully load before executing the hover functionality
document.addEventListener('DOMContentLoaded', () => {
    const expertiseItems = document.querySelectorAll('#expertise-list li'); // Select all list items in the expertise list
    const hoverInfo = document.getElementById('hover-info'); // Select the hover info box by its ID

    expertiseItems.forEach(item => {
        // Add an event listener for when the mouse enters a list item
        item.addEventListener('mouseenter', (e) => {
            const description = item.getAttribute('data-description'); 
            // Get the custom description attribute of the hovered item
            
            if (description) { 
                // If a description is available, display it in the hover info box
                hoverInfo.textContent = description; // Set the text content of the hover info box
                hoverInfo.style.display = 'block'; // Make the hover info box visible
                hoverInfo.style.opacity = '1'; // Set the opacity to fully visible
            }
        });

        // Add an event listener for when the mouse moves within a list item
        item.addEventListener('mousemove', (e) => {
            hoverInfo.style.top = `${e.pageY + 10}px`; // Position the hover info box below the cursor
            hoverInfo.style.left = `${e.pageX + 10}px`; // Position the hover info box to the right of the cursor
        });

        // Add an event listener for when the mouse leaves a list item
        item.addEventListener('mouseleave', () => {
            hoverInfo.style.display = 'none'; // Hide the hover info box
            hoverInfo.style.opacity = '0'; // Set the opacity to invisible
        });
    });
});
