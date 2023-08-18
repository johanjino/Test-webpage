// Get a reference to the button element using its ID
const button = document.getElementById('submit_button');

// Define a function to be called when the button is clicked
function handleClick() {
    //alert('Button clicked!');
    // Get form data
    const formData = new FormData(document.getElementById('myForm'));

    // Formspree API endpoint
    const formspreeEndpoint = 'https://formspree.io/f/xknlrwaq'; // Replace with your Formspree API endpoint

    // Make a POST request to Formspree API
    fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Formspree API Response:', data);

        if (data.success) {
            // Hide the form
            document.getElementById('myForm').style.display = 'none';

            // Show the thank you overlay
            document.getElementById('thankYouOverlay').style.display = 'block';
        } else {
            // Handle error
            console.error('Form submission failed.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Add a click event listener to the button, binding it to the handleClick function
button.addEventListener('click', handleClick);