document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show the loading indicator
  document.querySelector('.loading').style.display = 'block';

  // Collect the form data
  var formData = new FormData(this);

  // Send the form data using fetch
  fetch(this.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    // Check if response is JSON
    return response.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (error) {
        return { ok: false, error: text };
      }
    });
  })
  .then(response => {
    // Hide the loading indicator
    document.querySelector('.loading').style.display = 'none';

    if (response.ok || response.next) {
      document.querySelector('.sent-message').style.display = 'block';
      document.querySelector('.error-message').style.display = 'none';
      document.getElementById('contact-form').reset(); // Reset the form after successful submission
    } else {
      document.querySelector('.error-message').style.display = 'block';
      document.querySelector('.error-message').textContent = 'There was an error sending your message. Please try again later.';
      document.querySelector('.sent-message').style.display = 'none';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Hide the loading indicator
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.error-message').textContent = 'There was an error sending your message. Please try again later.';
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.sent-message').style.display = 'none';
  });
});
