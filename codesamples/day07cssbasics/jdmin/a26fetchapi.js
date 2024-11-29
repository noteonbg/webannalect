// Fetch the JSON data from the file
fetch('./data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Get the container element where the user data will be displayed
    const userContainer = document.getElementById('user-container');

    // Loop through the users and create HTML elements to display their details
    data.scrap.forEach(user => {
      // Create a div element for each user
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');

      // Create a span for the user's name
      const userName = document.createElement('span');
      userName.classList.add('user-name');
      userName.textContent = `${user.name}`;

      // Create a span for the user's email
      const userEmail = document.createElement('span');
      userEmail.textContent = ` (${user.email})`;

      // Append the user name and email to the user div
      userDiv.appendChild(userName);
      userDiv.appendChild(userEmail);

      // Append the user div to the container
      userContainer.appendChild(userDiv);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
