document.addEventListener('DOMContentLoaded', function () {
    // Reference to the input field and paragraph
    var userInputField = document.getElementById('userInput');
    var appendedTextParagraph = document.getElementById('appendedText');

    // Event listener for Enter keypress on the input field
    userInputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // Get user input value
            var userInput = userInputField.value.trim().toLowerCase();

            // Check if user input is 'about'
            if (userInput === 'about') {
                // Load the content of text_5.txt using fetch
                fetch('text_1.txt')
                    .then(response => response.text())
                    .then(content => {
                        // Append the content to the paragraph
                        appendedTextParagraph.textContent += content;
                    })
                    .catch(error => console.error('Error fetching text.', error));

                // Clear the input field
                userInputField.value = '';
            }
        }
    });
});
