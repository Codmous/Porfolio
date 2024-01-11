// Inside file_1.js

document.addEventListener('DOMContentLoaded', function () {
    // Reference to the input field and paragraph
    var userInputField = document.getElementById('userInput');
    var appendedTextContainer = document.getElementById('appendedText');

    // Event listener for Enter keypress on the input field
    userInputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // Get user input value
            var userInput = userInputField.value.trim().toLowerCase();

            // Check if user input
            if (userInput === 'hello') {
                fetch('text_1.txt')
                    .then(response => response.text())
                    .then(content => {
                        var newLineDiv = document.createElement('div');
                        newLineDiv.textContent = content;
                        appendedTextContainer.appendChild(newLineDiv);
                    })
                    .catch(error => console.error('Error fetching text_5.txt:', error));

                // Clear the input field
                userInputField.value = '';
            }
        }
    });
});
