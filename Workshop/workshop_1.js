document.addEventListener('DOMContentLoaded', function () {
    // Reference to the button and paragraph
    var appendButton = document.getElementById('appendButton');
    var appendedTextParagraph = document.getElementById('appendedText');

    // Event listener for button click
    appendButton.addEventListener('click', function () {
        fetch('text_1.txt')
            .then(response => response.text())
            .then(content => {
                // Append the content to the paragraph
                appendedTextParagraph.textContent += content;
            })
            .catch(error => console.error('Error fetching', error));
    });
});
