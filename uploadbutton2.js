const uploadButton = document.getElementById("uploadButton");
const filtersContainer = document.querySelector(".allfilters");
const searchContainer = document.querySelector(".search-container");
let trackCount = 1; // Track count starts from 1
const uploadHeading = document.getElementById("uploadHeading");
const chooseFilterOverlay = document.getElementById("chooseFilterOverlay");
const filterHeading = document.getElementById("filterHeading");
const starredoverlay = document.querySelector(".starredoverlay");

const pulsingCircle = document.createElement("div");
pulsingCircle.classList.add("pulsing-circle");
const demoPlayer = document.getElementById("demoPlayer");





const selectFileButton = document.createElement("button");
selectFileButton.classList.add("file-upload-button");
selectFileButton.textContent = "Select image from computer";
selectFileButton.style.position = "fixed";
selectFileButton.style.top = "350px";
selectFileButton.style.left = "50px";
document.body.appendChild(selectFileButton);
selectFileButton.style.display = "none";
uploadHeading.style.display = "none";

uploadButton.addEventListener("click", function() {

  // Trigger the file upload dialog
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  filtersContainer.style.display = "none";
  searchContainer.style.display = "none";
  selectFileButton.style.display = "block";
  uploadHeading.style.display = "block";
  uploadButton.style.display = "none";
  chooseFilterOverlay.style.display = "block";


    var clickHandler = function() {


  document.body.appendChild(fileInput);
  fileInput.click();
  
  };
  
    selectFileButton.addEventListener("click", clickHandler, { once: true });

chooseFilterOverlay.addEventListener("click", function(event) {
  // Hide the filters and reset other elements as needed
  filtersContainer.style.display = "block";
  searchContainer.style.display = "block";
  selectFileButton.style.display = "none";
  showFormButton.style.display = "block";
  uploadHeading.style.display = "none";
  uploadButton.style.display = "block";
  chooseFilterOverlay.style.display = "none";
  event.stopPropagation();

  // Remove the event listener from the upload button
  selectFileButton.removeEventListener("click", clickHandler);
});







  // Wait for the user to select a file
// Wait for the user to select a file
fileInput.addEventListener("change", function(event) {
     

  // Hide "select file" button
  selectFileButton.style.display = "none";



    const reader = new FileReader();
    // Remove the event listener
    selectFileButton.removeEventListener("click", clickHandler);


    reader.addEventListener("load", function() {



  

      // Create the modal dialog for the intro description
      const modal = createModalDialog();

      // Create a new track name
      const trackName = `Notification #${trackCount}`;


      // Increment the track count for the next upload
      trackCount++;

     
      // Create the intro description drop-down selections
        const rhythmRhythm = createDropDown("",  ["", "lecture", "tutorial"], modal.content);

        const soundSound = createDropDown("", [
          "", "01", "02", "03", "04", "05", 
          "06", "07", "08", "09", "10", 
          "11", "12", "13", "14", "15", 
          "16", "17", "18", "19", "20", 
          "21", "22", "23", "24"], modal.content);
        
      const colorColor = createDropDown("", ["", ":00", ":15", ":30", ":45"], modal.content);

      const rhythmSelect = createDropDown("",  ["Course", "COSC 2083", "COSC 2429", "ISYS 3414"], modal.content);

      const intensitySelect = createDropDown("", [
        "Day", "1", "2", "3", "4", "5", 
        "6", "7", "8", "9", "10", 
        "11", "12", "13", "14", "15", 
        "16", "17", "18", "19", "20", 
        "21", "22", "23", "24", "25", 
        "26", "27", "28", "29", "30", "31"], modal.content);
      
        const colorSelect = createDropDown("", [
          "Month", "1", "2", "3", 
          "4", "5", "6", 
          "7", "8", "9", 
          "10", "11", "12"], modal.content);
        
      const instrumentSelect = createDropDown("", ["Year", "2023"], modal.content);
      const chordContainer = document.createElement("div");
chordContainer.classList.add("chord-container");
      const chordSelects = [];

      for (let i = 1; i <= 1; i++) {
  const chordSelect = createDropDown("", ["", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"], modal.content);
  chordSelects.push(chordSelect);
}
 const genreSelect = createDropDown("", ["", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"], modal.content);
      // Create the key select dropdown
      const keySelect = createDropDown("", ["", "C", "Cm", "C#", "C#m", "D", "Dm", "Eb", "Ebm", "E", "Em", "F", "F#", "Fm", "F#m", "G", "G#", "Gm", "G#m", "A", "Am", "Bb", "Bbm", "B", "Bm"], modal.content);

      // Add a CSS class to the container elements -> To fix their position
            rhythmRhythm.container.classList.add("rhythm-rhythm");

      soundSound.container.classList.add("sound-sound");


      colorColor.container.classList.add("color-color");

      rhythmSelect.container.classList.add("dropdown-rhythm");

      intensitySelect.container.classList.add("dropdown-intensity");


      colorSelect.container.classList.add("dropdown-color");

      instrumentSelect.container.classList.add("dropdown-instrument");

      genreSelect.container.classList.add("dropdown-genre");
      keySelect.container.classList.add("dropdown-key");

chordSelects.forEach((chordSelect, index) => {
  const chordContainerClass = `dropdown-chord-${index + 1}`;
  if (chordSelect.container) {
    chordSelect.container.classList.add(chordContainerClass);
  }
});
// Create the input boxes for URLs
const linkInputsContainer = document.createElement("div");
linkInputsContainer.classList.add("link-inputs-container");


for (let i = 1; i <= 1; i++) {
  const linkInput = document.createElement("input");
  linkInput.setAttribute("type", "text");
  
    linkInput.setAttribute("placeholder", "Meeting Link");  

  
  linkInputsContainer.appendChild(linkInput);
}


const linkInputsContainer2 = document.createElement("div");
linkInputsContainer2.classList.add("link-inputs-container2");


for (let i = 1; i <= 5; i++) {
  const linkInput2 = document.createElement("input");
  linkInput2.setAttribute("type", "text");

    linkInput2.setAttribute("placeholder", `Syllabus link ${i}`);
  
  
  linkInputsContainer2.appendChild(linkInput2);
}



      // Create a submit button for the modal dialog
      const submitButton = document.createElement("button");
      submitButton.textContent = "Publish";
      submitButton.classList.add("submit-button"); // Add the CSS class to the button

      // Add a click event listener to handle the form submission
      submitButton.addEventListener("click", function() {

        // show filters again
        filtersContainer.style.display = "block";
        uploadHeading.style.display = "none";
        uploadButton.style.display = "block";
        
        chooseFilterOverlay.style.display = "none";
        searchContainer.style.display = "block";
  


        // Create a new grid item to display the uploaded audio
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");


  



        // Name the tracks
        const trackNameElement = document.createElement("p");        
        trackNameElement.classList.add("track-name");
         trackNameElement.textContent = trackName;
       

setTimeout(function() {
    showNotification(trackName + " successfully saved to Firebase.");
  }, 2500); // Delay in milliseconds



let currentTrackIndex = 0;


  const starButton = document.createElement("span");
starButton.classList.add("star-button");
starButton.innerHTML = "&#9734;"; // Star symbol

// Add a click event listener to handle starring/unstarring the grid item


let recipientEmails = ['s4053400@rmit.edu.vn']; // Replace with the recipient's email address
starButton.addEventListener("click", function() {

    // Convert and encode each email address separately
    const encodedEmails = recipientEmails.map(email => encodeURIComponent(email));

    // Join the encoded email addresses with commas
    const recipientEmail = encodedEmails.join(',');

    const emailBody = `Hi Student, `;
    const emailBody2 = `Attached below are the relevant links for your upcoming ${rhythm} ${dynamic} lecture at ${dirty}${dark}: `;
   
   const emailBody3 = `Link to online lecture: ${links}`;   
    const emailBody4 = `Lecture slides and materials from today's lecture: ${resources}`;
    const emailBody5 = `Happy studying :)`;

    const emailSubject = `Your upcoming ${rhythm} lecture at ${dirty}${dark}`;

   let emailBodyFull = '';
    if (dynamic === 'Online') {
     emailBodyFull = `${emailBody}\n\n${emailBody2}\n\n${emailBody3}\n\n${emailBody4}\n\n${emailBody5}`;
     } else {
       emailBodyFull = `${emailBody}\n\n${emailBody2}\n\n${emailBody4}\n\n${emailBody5}`;
     }
    

    let mailToUrl;
    if (/chrome/i.test(navigator.userAgent)) {
      // User is on Chrome, open Gmail
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyFull)}`;
      mailToUrl = gmailUrl;
    } else {
      // User is not on Chrome, use the default mailto URL
      mailToUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyFull)}`;
    }

    // Open the email client
    window.open(mailToUrl, '_blank');
  
});




// FIND TRACKS
const findTrackButton = document.createElement("button");
findTrackButton.classList.add("find-track-button");
findTrackButton.innerHTML = "Find";
findTrackButton.style.fontWeight = "bold";
const linkValuesContainer = document.createElement("div");
linkValuesContainer.classList.add("link-values-container");

let isLinkInfoVisible = false; // Track the visibility state of link information

findTrackButton.addEventListener("click", function () {
  if (isLinkInfoVisible) {
    // If link information is already visible, hide it
    linkValuesContainer.style.display = "none";
    linkValuesContainer.innerHTML = "";
  } else {
    // If link information is not visible, show it
    const linkInputs = linkInputsContainer.querySelectorAll("input");
    const linkValues = Array.from(linkInputs).map((input) => input.value);
    const linkInputs2 = linkInputsContainer2.querySelectorAll("input");
    const linkValues2 = Array.from(linkInputs2).map((input) => input.value);

    linkValuesContainer.innerHTML = "";



    const titleElement = document.createElement("h2");
    titleElement.textContent = "Links:";
    linkValuesContainer.appendChild(titleElement);
linkValues.forEach((value, index) => {
  const linkValueElement = document.createElement("p");
  const linkElement = document.createElement("a");
  linkElement.href = value;
  linkElement.textContent = value;
  linkElement.style.color = "#1E90FF";
  linkElement.target = "_blank"; // Open the link in a new tab
  linkValueElement.appendChild(linkElement);
  linkValuesContainer.appendChild(linkValueElement);
});


        const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", function () {
      linkValuesContainer.style.display = "none";
      linkValuesContainer.innerHTML = "";
      isLinkInfoVisible = false;
    });
    linkValuesContainer.appendChild(closeButton);
   


    linkValuesContainer.style.display = "block";
    linkValuesContainer.style.position = "fixed";
    linkValuesContainer.style.top = "50%";
    linkValuesContainer.style.left = "50%";
    linkValuesContainer.style.width = "30%";
    linkValuesContainer.style.height = "30%";
    linkValuesContainer.style.color = "white";
    linkValuesContainer.style.transform = "translate(-50%, -50%)";
    linkValuesContainer.style.backgroundColor = "black";
    linkValuesContainer.style.opacity = "0.9";
    linkValuesContainer.style.padding = "20px";
    linkValuesContainer.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
    linkValuesContainer.style.zIndex = "9999";
  }

  isLinkInfoVisible = !isLinkInfoVisible; // Toggle the visibility state
});



document.body.appendChild(linkValuesContainer);





        const audioIntroElement = document.createElement("p");
        audioIntroElement.classList.add("keyword");
        audioIntroElement.dataset.genre = genreSelect.value;
        audioIntroElement.dataset.key = keySelect.value;
        audioIntroElement.dataset.rhythm = rhythmSelect.value;
        audioIntroElement.dataset.intensity = intensitySelect.value;
        audioIntroElement.dataset.color = colorSelect.value;
        audioIntroElement.dataset.dynamic = rhythmRhythm.value;
        audioIntroElement.dataset.dirty = soundSound.value;
        audioIntroElement.dataset.dark = colorColor.value;
        
        audioIntroElement.dataset.instrument = instrumentSelect.value;
audioIntroElement.style.fontSize = "24px";
audioIntroElement.style.fontFamily = "sans-serif";
const rhythm = `<strong>${rhythmSelect.value}</strong>`;
const color = `<strong>${colorSelect.value}</strong>`;
const intensity = `<strong>${intensitySelect.value}</strong>`;
const instrument = `<strong>${instrumentSelect.value}</strong>`;
const dynamic = `${rhythmRhythm.value}`;
const dark = `${colorColor.value}`;
const dirty = `${soundSound.value}`;


        const chordValues = chordSelects.map(chordSelect => chordSelect.value).filter(value => value !== "");
        audioIntroElement.dataset.chords = JSON.stringify(chordValues);
        let chordsDisplay = "";
        if (chordValues.length > 0) {
          if (chordValues.length > 1) {
            chordsDisplay = chordValues.join(" + ");
          } else {
            chordsDisplay = chordValues[0];
          }
          chordsDisplay = `<span style="font-weight: bold; font-size: 16px; font-style: italic; color: #666666;">Mode: ${dynamic}, ${dirty}, ${dark}, ${chordsDisplay}</span>`;
        }
        audioIntroElement.innerHTML = `${rhythm}&nbsp;&nbsp;&nbsp;${intensity}&nbsp;&nbsp;&nbsp;${color}&nbsp;&nbsp;&nbsp;${instrument}<br>${chordsDisplay}`;
      // Create a container for the audio intro element
      const audioIntroContainer = document.createElement("div");
      audioIntroContainer.classList.add("audio-intro-container");



// Add the audio intro element to the container
audioIntroContainer.appendChild(audioIntroElement);

// Add the audio intro container to the grid item
newGridItem.appendChild(audioIntroContainer);
// Call the saveTextElements function to save the text elements to Firebase
const file = event.target.files[0];

// Upload audio file to Firebase Storage
uploadAudioFile(file)
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(audioUrl => {
    // Save track information (including text elements) to Firebase Realtime Database
    const linkInputs = linkInputsContainer.querySelectorAll("input");
    const linkValues = Array.from(linkInputs).map((input) => input.value);
    const linkInputs2 = linkInputsContainer2.querySelectorAll("input");
    const linkValues2 = Array.from(linkInputs2).map((input) => input.value);
    const isStarred = false;
    const trackData = {
      pic: audioUrl,
      genre: genreSelect.value,
      key: keySelect.value,
      rhythm: rhythmSelect.value,
      color: colorSelect.value,
      intensity: intensitySelect.value,
      instrument: instrumentSelect.value,
      chords: JSON.stringify(chordValues),
      links: linkValues,
      resources: linkValues2,
      isStarred: isStarred,
      dynamic: rhythmRhythm.value,
      dirty: soundSound.value,
      dark: colorColor.value

    };

    return saveTrackInfo(trackData);
  })
  .then((trackId) => {
    console.log('Track information saved successfully with track ID:', trackId);
    // Additional code here if needed
  })
  .catch((error) => {
    console.error('Error saving track information:', error);
  });


// Create a star button

const leftContainer = document.createElement("div");
leftContainer.classList.add("left-container");
leftContainer.appendChild(starButton);
leftContainer.appendChild(findTrackButton);

const contentContainer = document.createElement("div");
contentContainer.classList.add("content-container");
// Add the star button and track name to the content container
contentContainer.appendChild(leftContainer);
contentContainer.appendChild(trackNameElement);


newGridItem.appendChild(contentContainer);
        // Add the new grid item element to the container
        const container = document.querySelector(".container");
        container.appendChild(newGridItem);

        // Close the modal dialog
        closeModalDialog(modal);
      });


      // Add the drop-downs and submit button to the modal dialog
      const rhythmHeading = document.createElement("h3");
rhythmHeading.textContent = "Course & Date:";
rhythmHeading.classList.add("rhythm-heading");






const adjectivesHeading = document.createElement("h3");
adjectivesHeading.textContent = "Mode & Time:";
adjectivesHeading.classList.add("adjectives-heading");



const chordHeading = document.createElement("h3");
chordHeading.textContent = "Day:";
chordHeading.classList.add("chord-heading");





const genreHeading = document.createElement("h3");
genreHeading.textContent = "Week:";
genreHeading.classList.add("genre-heading");

const keyHeading = document.createElement("h3");
keyHeading.textContent = "Key:";
keyHeading.classList.add("key-heading");

const linkHeading = document.createElement("h3");
linkHeading.textContent = "Link(s):";
linkHeading.classList.add("link-heading");




modal.content.appendChild(rhythmHeading);
modal.content.appendChild(adjectivesHeading);
modal.content.appendChild(chordHeading);
modal.content.appendChild(genreHeading);
modal.content.appendChild(keyHeading);
modal.content.appendChild(linkHeading);

      modal.content.appendChild(rhythmRhythm.container);
      modal.content.appendChild(soundSound.container);
      modal.content.appendChild(colorColor.container);


      modal.content.appendChild(rhythmSelect.container);
      modal.content.appendChild(intensitySelect.container);
      modal.content.appendChild(colorSelect.container);
      
      modal.content.appendChild(instrumentSelect.container);
      modal.content.appendChild(chordContainer);
        modal.content.appendChild(genreSelect.container);
      modal.content.appendChild(keySelect.container);
        modal.content.appendChild(linkInputsContainer);
        modal.content.appendChild(linkInputsContainer2);

      // Create a wrapper container for the submit button
      const submitContainer = document.createElement("div");
      submitContainer.classList.add("submit-container");
      submitContainer.appendChild(submitButton);
      modal.content.appendChild(submitContainer);

    });


// Starring the tracks
const showStarredButton = document.getElementById("showStarredButton");
const gridItems = document.querySelectorAll(".grid-item");

let isFilterActive = false;
const starIcon = document.querySelector(".star-icon");

for (const item of gridItems) {
  const starButton = item.querySelector(".star-button");
}

showStarredButton.addEventListener("click", function() {
  // Toggle the filter state
  isFilterActive = !isFilterActive;

  rhythmFilterDropdown.value = "";
  colorFilterDropdown.value = "";
  intensityFilterDropdown.value = "";
  instrumentFilterDropdown.value = "";

  rhythmRhythmFilterDropdown.value = "";
  colorColorFilterDropdown.value = "";
  soundSoundFilterDropdown.value = "";

  chordFilterDropdown.forEach(chordFilter => {
    chordFilter.value = "";
  });
  genreFilterDropdown.value = "";
  keyFilterDropdown.value = "";

  if (isFilterActive) {
    // Filter and show only the starred grid items
    const starredGridItems = Array.from(gridItems).filter(item => {
      const starButton = item.querySelector(".star-button");
      return starButton && starButton.classList.contains("starred");
    });

    // Iterate through all grid items and hide them by default
    for (const item of gridItems) {
      item.style.display = "none";
    }

    // Show only the starred grid items
    for (const item of starredGridItems) {
      item.style.display = "block";
    }

    showStarredButton.classList.add("active");
    starIcon.style.color = "yellow"; // Set the star icon color to yellow
  } else {
    // Reset the visibility of all grid items
    for (const item of gridItems) {
      item.style.display = "block";
    }



    showStarredButton.classList.remove("active");
    starIcon.style.color = "black"; // Set the star icon color to white
  }
});




     reader.readAsDataURL(event.target.files[0]);
  });
});






const showStarredContainer = document.createElement("div");
showStarredContainer.classList.add("show-starred-container");
showStarredContainer.appendChild(showStarredButton);
starredoverlay.appendChild(showStarredContainer);

function createModalDialog() {
  // Create the modal overlay
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");

  // Create the modal content container
  const content = document.createElement("div");
  content.classList.add("modal-content");

  // Append the content to the overlay
  overlay.appendChild(content);

  // Append the overlay to the document body
  document.body.appendChild(overlay);

  // Return the modal dialog components
  return {
    overlay: overlay,
    content: content
  };
}

function closeModalDialog(modal) {
  // Remove the modal dialog components from the document body
  document.body.removeChild(modal.overlay);
}

// ...

function createDropDown(label, options, parentElement) {
  const selectElement = document.createElement("select");

  // Create the label element
  const labelElement = document.createElement("label");
  labelElement.textContent = label + " ";
  labelElement.appendChild(selectElement);

  // Create the container element
  const containerElement = document.createElement("div");
  containerElement.appendChild(labelElement);

  // Create the options and append them to the select element
  options.forEach(function(option) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });

  // Add change event listener to capture selected value
  selectElement.addEventListener("change", function() {
    labelElement.value = selectElement.value;
  });

  // Append the container element to the parent element
  parentElement.appendChild(containerElement);

  // Return the select element and label
  return {
    container: containerElement,
    label: label,
    get value() {
      return selectElement.value;
    }
  };
}






// PART 2 OF THE SCRIPT (EXTRAS)

// Function to show the custom notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(function() {
    notification.remove();
  }, 2000); // Delay for the notification to be displayed

  // Apply custom CSS styles to the notification
  notification.style.backgroundColor = "black";
notification.style.fontSize = "26px";
notification.style.fontWeight = "bold";
notification.style.fontStyle = "italic";
  notification.style.color = "#1E90FF";
  notification.style.padding = "45px";
  notification.style.position = "fixed";
  notification.style.top = "20%";
  notification.style.left = "50%";
  notification.style.transform = "translate(-50%, -50%)";
  notification.style.zIndex = "9999";
}

const threshold = 120; // Adjust the threshold value as needed

window.addEventListener("scroll", function() {
  const showStarredContainer = starredOverlay.querySelector(".show-starred-container");

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= threshold) {
    // Change the position to fixed
    starredOverlay.style.position = "fixed";
    starredOverlay.style.top = "4px"; // Adjust the top value as needed
  } else {
    // Change the position back to absolute
    starredOverlay.style.position = "absolute";
    starredOverlay.style.top = "155px"; // Adjust the top value as needed
  }
});



