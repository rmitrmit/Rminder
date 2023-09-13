
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyAtnvURUGMPryY7KJWc6i2YVKbSs5r6EhM",
  authDomain: "trackrecords-3a228.firebaseapp.com",
  projectId: "trackrecords-3a228",
  storageBucket: "trackrecords-3a228.appspot.com",
  messagingSenderId: "267445828891",
  appId: "1:267445828891:web:db04bbca72d8efd85227be",
  measurementId: "G-ZXG9GRGNVE"
    };


    
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
  const database = firebase.database();
const storage = firebase.storage();
const storageRef = storage.ref();



function uploadAudioFile(file) {
  const audioRef = storageRef.child(`audio/${file.name}`);
  return audioRef.put(file);
}

function saveTrackInfo(trackData) {
  const trackRef = database.ref('courses').push();
  return trackRef.set(trackData)
    .then(() => trackRef.key);
}


function fetchTrackData() {
  const database = firebase.database();
  const trackRef = database.ref('courses');

  return trackRef.once('value')
    .then(snapshot => snapshot.val())
    .catch(error => {
      console.error('Error fetching track data:', error);
      throw error;
    });
}

var feelsRef = database.ref('feels');

// Get the show form button element
var showFormButton = document.getElementById('showFormButton');

// Get the user input form element
var form = document.getElementById('userInputForm');

// Get the cancel button element
var formCancelButton = document.getElementById('formCancelButton');

// Add a click event listener to the show form button
showFormButton.addEventListener('click', function() {
  showForm();

  filtersContainer.style.display = "none";
  searchContainer.style.display = "none";
  uploadButton.style.display = "none";
});

// Add a click event listener to the cancel button
formCancelButton.addEventListener('click', function() {
  form.reset(); // Reset the form
  hideForm(); // Hide the form and show the "Show Form" button
   filtersContainer.style.display = "block";
  searchContainer.style.display = "block";
  uploadButton.style.display = "block";
});

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the user input values
  var name = form.elements['name'].value;
  var email = form.elements['email'].value;
  var message = form.elements['message'].value;

  // Save the user input data to the Realtime Database
  saveUserInput(name, email, message)
    .then(function(key) {
      console.log('User input saved with key:', key);
      form.reset(); // Reset the form after successful submission
      hideForm(); // Hide the form and show the "Show Form" button
    })
    .catch(function(error) {
      console.error('Error saving user input:', error);
    });
});

function showForm() {
  showFormButton.style.display = 'none'; // Hide the show form button
  form.classList.remove('hidden'); // Show the user input form
  formCancelButton.classList.remove('hidden'); // Show the cancel button
}

function hideForm() {
  showFormButton.style.display = 'block'; // Show the show form button
  form.classList.add('hidden'); // Hide the user input form
  formCancelButton.classList.add('hidden'); // Hide the cancel button
}

function saveUserInput(name, email, message) {
  // Create a new unique key for the user input
  var userInputRef = feelsRef.push();

  // Set the user input data
  var userInputData = {
    name: name,
    email: email,
    message: message
  };

  // Save the user input data to the Realtime Database
  return userInputRef.set(userInputData)
    .then(function() {
      return userInputRef.key;
    });
}


function retrieveTrackInfo(trackId) {
  return new Promise((resolve, reject) => {
    // Assuming you have initialized Firebase and have a reference to your database
    const trackRef = firebase.database().ref('courses/' + trackId);
    
    trackRef.once('value')
      .then((snapshot) => {
        const trackData = snapshot.val();
        resolve(trackData);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
