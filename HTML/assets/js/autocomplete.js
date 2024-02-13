function searchFunction(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    // Get the input value
    var searchQuery = document.getElementById('find').value.toLowerCase();

    // Get all elements with class "dish-box-wp"
    var dishBoxes = document.querySelectorAll('.dish-box-wp');

    // Show all dish boxes initially
    dishBoxes.forEach(dishBox => {
        dishBox.style.display = 'block';
    });

    // Filter elements based on the search query
    var matchingItems = Array.from(dishBoxes).filter(item => !item.textContent.toLowerCase().includes(searchQuery));

    // Hide the non-matching items
    matchingItems.forEach(matchingItem => {
        matchingItem.style.display = 'none';
    });

    // Scroll to the first matching item with smooth animation
    var firstMatchingItem = document.querySelector('.dish-box-wp:not([style*="display: none"])');
    if (firstMatchingItem) {
        firstMatchingItem.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    
}