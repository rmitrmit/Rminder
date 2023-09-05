document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".container");

  container.innerHTML = "";

 fetchTrackData()


    .then((courses) => {
      // Iterate over the retrieved track data
      Object.keys(courses).forEach((key) => {
        const track = courses[key];
        
        // Create a new grid item element
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");

 

  
       
        // Create a container for the audio intro element
      const audioIntroContainer = document.createElement("div");
      audioIntroContainer.classList.add("audio-intro-container");

      // Create the audio intro element
      const audioIntroElement = document.createElement("p");
      audioIntroElement.classList.add("keyword");
      audioIntroElement.style.fontSize = "24px";
      audioIntroElement.style.fontFamily = "sans-serif";

      // Set the innerHTML of the audio intro element

const genre = track.genre;
const keykey = track.key;
 const rhythm = track.rhythm;
const color = track.color;
const intensity = track.intensity;
const instrument = track.instrument;
const chords = JSON.parse(track.chords); // Parse the JSON string to convert it back to an array
const links = track.links;
const resources = track.resources;
const dynamic = track.dynamic;
const dirty = track.dirty;
const dark = track.dark;


const rhythmDisplay = `<strong>${rhythm}</strong>`;
const colorDisplay = `<strong>${color}</strong>`;
const intensityDisplay = `<strong>${intensity}</strong>`;
const instrumentDisplay = `<strong>${instrument}</strong>`;
const chordsDisplay = chords.join(" + "); // Join the chord values with a separator

const chordsDisplayElement = document.createElement("span");
chordsDisplayElement.style.fontWeight = "bold";
chordsDisplayElement.style.fontSize = "16px";
chordsDisplayElement.style.fontStyle = "italic";
chordsDisplayElement.style.color = "#666666";
chordsDisplayElement.innerHTML = "Mode: " + dynamic + " - " + dirty + dark + " ";

const genreDisplayElement = document.createElement("span");
genreDisplayElement.style.fontWeight = "normal";
genreDisplayElement.style.fontSize = "16px";
genreDisplayElement.style.fontStyle = "italic";
genreDisplayElement.style.color = "black";
genreDisplayElement.innerHTML = `${keykey}`;

const instrumentDisplayElement = document.createElement("span");
instrumentDisplayElement.style.fontWeight = "normal";
instrumentDisplayElement.style.fontSize = "16px";
instrumentDisplayElement.style.fontStyle = "italic";
instrumentDisplayElement.style.color = "#666666";
instrumentDisplayElement.innerHTML = `&nbsp;${chordsDisplay}`;

audioIntroElement.innerHTML = `${rhythmDisplay}&nbsp;&nbsp;&nbsp;${intensityDisplay}&nbsp;&nbsp;&nbsp;${colorDisplay}&nbsp;&nbsp;&nbsp;${instrumentDisplay}&nbsp;&nbsp;&nbsp;&nbsp;${genreDisplayElement.outerHTML}&nbsp;${genre}<br>`;

audioIntroElement.appendChild(chordsDisplayElement);
audioIntroElement.appendChild(instrumentDisplayElement);


newGridItem.appendChild(audioIntroContainer);
      // Append the audio intro element to the container
      audioIntroContainer.appendChild(audioIntroElement);
newGridItem.dataset.genre = genre;
newGridItem.dataset.key = keykey;
newGridItem.dataset.rhythm = rhythm;
newGridItem.dataset.intensity = intensity;
newGridItem.dataset.color = color;

newGridItem.dataset.dynamic = dynamic;
newGridItem.dataset.dirty = dirty;
newGridItem.dataset.dark = dark;

newGridItem.dataset.instrument = instrument;
newGridItem.dataset.chords = JSON.stringify(chords);

const trackName = `Notification #${trackCount}`;


      // Increment the track count for the next upload
      trackCount++;
const trackNameElement = document.createElement("p");        
        trackNameElement.classList.add("track-name");
         trackNameElement.textContent = trackName;


 


        
         const starButton = document.createElement("span");
       starButton.classList.add("star-button");
       starButton.innerHTML = "&#9734;"; // Star symbol
       
       // Add a click event listener to handle starring/unstarring the grid item
     
    
       let recipientEmails = [];
       if ((rhythm === 'COSC 2083') && (dynamic === 'lecture')) {
        recipientEmails = ['s3988516@rmit.edu.vn', 's3878010@rmit.edu.vn', 's3830318@rmit.edu.vn',
        's3813338@rmit.edu.vn', 's3819675@rmit.edu.vn', 's3980813@rmit.edu.vn',
        's3974781@rmit.edu.vn', 's3975935@rmit.edu.vn', 's3979875@rmit.edu.vn',
        's3932873@rmit.edu.vn', 's3978862@rmit.edu.vn', 's3747702@rmit.edu.vn',
        's3975181@rmit.edu.vn', 's3970870@rmit.edu.vn', 's4015153@rmit.edu.vn',
        's4010788@rmit.edu.vn', 's3924306@rmit.edu.vn', 's3924514@rmit.edu.vn',
        's4031709@rmit.edu.vn', 's3975161@rmit.edu.vn', 's4027621@rmit.edu.vn',
        's3941770@rmit.edu.vn', 's4026699@rmit.edu.vn', 's4022059@rmit.edu.vn',
        's3975801@rmit.edu.vn', 's3975091@rmit.edu.vn', 's3980424@rmit.edu.vn',
        's4037889@rmit.edu.vn', 's4010791@rmit.edu.vn', 's4015832@rmit.edu.vn',
        's4022136@rmit.edu.vn', 's3975939@rmit.edu.vn', 's3893635@rmit.edu.vn',
        's3992133@rmit.edu.vn', 's3970879@rmit.edu.vn', 's3975175@rmit.edu.vn',
        's3924472@rmit.edu.vn', 's3979718@rmit.edu.vn', 's4032012@rmit.edu.vn',
        's4053400@rmit.edu.vn', 's3977880@rmit.edu.vn', 's4012094@rmit.edu.vn',
        's3974868@rmit.edu.vn', 's3981136@rmit.edu.vn', 's3979325@rmit.edu.vn',
      ];
        } else if ((rhythm === 'COSC 2083') && (dynamic === 'tutorial') && (dirty === '08')) {
        recipientEmails = ['s3988516@rmit.edu.vn', 's3813338@rmit.edu.vn', 's3819675@rmit.edu.vn', 
        's3975935@rmit.edu.vn', 's3932873@rmit.edu.vn', 's3978862@rmit.edu.vn', 
        's3970870@rmit.edu.vn', 's4010788@rmit.edu.vn', 's3941770@rmit.edu.vn', 
        's4022059@rmit.edu.vn', 's3975801@rmit.edu.vn', 's3975091@rmit.edu.vn', 
        's3980424@rmit.edu.vn', 's3975939@rmit.edu.vn', 's3992133@rmit.edu.vn', 
        's3970879@rmit.edu.vn', 's4012094@rmit.edu.vn', 's3974868@rmit.edu.vn'
      ];        
        } else if ((rhythm === 'COSC 2083') && (dynamic === 'tutorial') && (dirty === '10')) {
          recipientEmails = ['s3878010@rmit.edu.vn', 's3830318@rmit.edu.vn',
          's3980813@rmit.edu.vn',
          's3974781@rmit.edu.vn', 's3979875@rmit.edu.vn',
          's3747702@rmit.edu.vn',
          's3975181@rmit.edu.vn', 's4015153@rmit.edu.vn',
          's3924306@rmit.edu.vn', 's3924514@rmit.edu.vn',
          's4031709@rmit.edu.vn', 's3975161@rmit.edu.vn', 's4027621@rmit.edu.vn',
          's4026699@rmit.edu.vn',
          's4037889@rmit.edu.vn', 's4010791@rmit.edu.vn', 's4015832@rmit.edu.vn',
          's4022136@rmit.edu.vn', 's3893635@rmit.edu.vn',
          's3975175@rmit.edu.vn',
          's3924472@rmit.edu.vn', 's3979718@rmit.edu.vn', 's4032012@rmit.edu.vn',
          's4053400@rmit.edu.vn', 's3977880@rmit.edu.vn',
          's3981136@rmit.edu.vn', 's3979325@rmit.edu.vn',
        ];
        } else if ((rhythm === 'COSC 2429') && (dynamic === 'lecture')) {
          recipientEmails = [
's3988516@rmit.edu.vn', 's3978831@rmit.edu.vn', 's3914597@rmit.edu.vn', 's3878655@rmit.edu.vn', 's3877271@rmit.edu.vn', 's3915203@rmit.edu.vn',
's3894678@rmit.edu.vn', 's3830318@rmit.edu.vn', 's3878076@rmit.edu.vn', 's3938204@rmit.edu.vn', 's3979194@rmit.edu.vn', 's3914538@rmit.edu.vn',
's3877592@rmit.edu.vn', 's3980813@rmit.edu.vn', 's3974781@rmit.edu.vn', 's3975935@rmit.edu.vn', 's3891442@rmit.edu.vn', 's3989101@rmit.edu.vn',
's3924306@rmit.edu.vn', 's3924514@rmit.edu.vn', 's3804693@rmit.edu.vn', 's3975161@rmit.edu.vn', 's3925113@rmit.edu.vn', 's4027621@rmit.edu.vn',
's4024865@rmit.edu.vn', 's3978567@rmit.edu.vn', 's4026699@rmit.edu.vn', 's4022059@rmit.edu.vn', 's3926975@rmit.edu.vn', 's3927078@rmit.edu.vn',
's3878737@rmit.edu.vn', 's3978778@rmit.edu.vn', 's4028019@rmit.edu.vn', 's3980424@rmit.edu.vn', 's4037889@rmit.edu.vn', 's4032825@rmit.edu.vn',
's3975121@rmit.edu.vn', 's4022136@rmit.edu.vn', 's3931082@rmit.edu.vn', 's4021255@rmit.edu.vn', 's3926065@rmit.edu.vn', 's3927141@rmit.edu.vn',
's3992133@rmit.edu.vn', 's3806416@rmit.edu.vn', 's3970879@rmit.edu.vn', 's3975175@rmit.edu.vn', 's3924472@rmit.edu.vn', 's4023243@rmit.edu.vn',
's3979718@rmit.edu.vn', 's3926047@rmit.edu.vn', 's4032012@rmit.edu.vn', 's4053400@rmit.edu.vn', 's3914997@rmit.edu.vn', 's4012094@rmit.edu.vn',
's3974868@rmit.edu.vn', 's4032067@rmit.edu.vn', 's3979403@rmit.edu.vn', 's3823045@student.rmit.edu.au'];
      } else if ((rhythm === 'COSC 2429') && (dynamic === 'tutorial') && (intensity === '1' || intensity === '8' || intensity === '15' || intensity === '22' || intensity === '29'|| intensity === '5') && (dirty === '12')) {
  recipientEmails = [
's3979194@rmit.edu.vn', 's3924472@rmit.edu.vn', 's4026699@rmit.edu.vn', 's3877271@rmit.edu.vn', 's3877592@rmit.edu.vn', 's3915203@rmit.edu.vn'];
      } else if ((rhythm === 'COSC 2429') && (dynamic === 'tutorial') && (intensity === '2' || intensity === '9' || intensity === '16' || intensity === '23') && (dirty === '12')) {
  recipientEmails = [
's3974868@rmit.edu.vn', 's3975091@rmit.edu.vn'];
      } else if ((rhythm === 'COSC 2429') && (dynamic === 'tutorial') && (intensity === '4' || intensity === '11' || intensity === '18' || intensity === '25'|| intensity === '8') && (dirty === '12')) {
  recipientEmails = [
's3978862@rmit.edu.vn', 's3980813@rmit.edu.vn', 's3978831@rmit.edu.vn', 's3924514@rmit.edu.vn', 's3988516@rmit.edu.vn', 's3975161@rmit.edu.vn', 's3927078@rmit.edu.vn', 's3878076@rmit.edu.vn'];
      } else if ((rhythm === 'COSC 2429') && (dynamic === 'tutorial') && (intensity === '4' || intensity === '11' || intensity === '18' || intensity === '25'|| intensity === '8') && (dirty === '16')) {
  recipientEmails = [
's4053400@rmit.edu.vn', 's3978567@rmit.edu.vn', 's4012094@rmit.edu.vn', 's3823045@student.rmit.edu.au', 's3894678@rmit.edu.vn', 's3925113@rmit.edu.vn', 's3914597@rmit.edu.vn', 's4023243@rmit.edu.vn', 's3979403@rmit.edu.vn'];
      } else if ((rhythm === 'ISYS 3414') && (dynamic === 'lecture')) {
        recipientEmails = [
          's4053400@rmit.edu.vn',
          's3988516@rmit.edu.vn',
          's4023681@rmit.edu.vn',
          's3975844@rmit.edu.vn',
          's3926937@rmit.edu.vn',
          's3979639@rmit.edu.vn',
          's3975067@rmit.edu.vn',
          's3978719@rmit.edu.vn',
          's3927251@rmit.edu.vn',
          's3836528@rmit.edu.vn',
          's3877612@rmit.edu.vn',
          's3975129@rmit.edu.vn',
          's3978955@rmit.edu.vn',
          's3977994@rmit.edu.vn',
          's3777258@rmit.edu.vn',
          's3974915@rmit.edu.vn',
          's3979486@rmit.edu.vn',
          's3979030@rmit.edu.vn',
          's3891648@rmit.edu.vn',
          's4015692@rmit.edu.vn',
          's3979290@rmit.edu.vn',
          's3979297@rmit.edu.vn',
          's3924506@rmit.edu.vn',
          's4015153@rmit.edu.vn',
          's3822927@rmit.edu.vn',
          's3932184@rmit.edu.vn',
          's3939114@rmit.edu.vn',
          's3924729@rmit.edu.vn',
          's3935748@rmit.edu.vn',
          's3966150@rmit.edu.vn',
          's3974876@rmit.edu.vn',
          's3978419@rmit.edu.vn',
          's3975162@rmit.edu.vn',
          's3978862@rmit.edu.vn',
          's3979367@rmit.edu.vn',
          's3975091@rmit.edu.vn',
          's3976069@rmit.edu.vn',
          's3975793@rmit.edu.vn',
          's3963284@rmit.edu.vn',
          's3929218@rmit.edu.vn',
          's3978081@rmit.edu.vn',
          's4015832@rmit.edu.vn',
          's3975939@rmit.edu.vn',
          's3975128@rmit.edu.vn',
          's3983427@rmit.edu.vn',
          's3974892@rmit.edu.vn',
          's3974929@rmit.edu.vn',
          's3978302@rmit.edu.vn',
          's3921846@rmit.edu.vn',
          's3981133@rmit.edu.vn',
          's3870729@rmit.edu.vn',
          's3981136@rmit.edu.vn'
          ];  
        } else if ((rhythm === 'ISYS 3414') && (dynamic === 'tutorial') && (intensity === '2' || intensity === '9' || intensity === '16' || intensity === '23') && (dirty === '12')) {
          recipientEmails = [
            's3924472@rmit.edu.vn',
            's3929218@rmit.edu.vn',
            's3974876@rmit.edu.vn',
            's3974892@rmit.edu.vn',
            's3979194@rmit.edu.vn',
            's3977955@rmit.edu.vn',
            's3977994@rmit.edu.vn',
            's3979391@rmit.edu.vn',
            's3979542@rmit.edu.vn',
            's3939114@rmit.edu.vn',
            's3958668@rmit.edu.vn',
            's3978955@rmit.edu.vn',
            's3979239@rmit.edu.vn',
            's3983427@rmit.edu.vn',
            's3975175@rmit.edu.vn',
            's3975935@rmit.edu.vn',
            's4022878@rmit.edu.vn',
            's4026699@rmit.edu.vn',
            's3935748@rmit.edu.vn',
            's3938309@rmit.edu.vn',
            's3979802@rmit.edu.vn',
            's3976069@rmit.edu.vn',
            's3975067@rmit.edu.vn',
            's3978268@rmit.edu.vn',
            's4032825@rmit.edu.vn',
            's3911737@rmit.edu.vn',
            's3927291@rmit.edu.vn',
            's3963284@rmit.edu.vn',
            's3979030@rmit.edu.vn',
            's4022059@rmit.edu.vn'
          ];
        } else if ((rhythm === 'ISYS 3414') && (dynamic === 'tutorial') && (intensity === '2' || intensity === '9' || intensity === '16' || intensity === '23') && (dirty === '16')) {
          recipientEmails = [
            's3613692@rmit.edu.vn',
's3974868@rmit.edu.vn',
's3988516@rmit.edu.vn',
's4015153@rmit.edu.vn',
's3937966@rmit.edu.vn',
's3877612@rmit.edu.vn',
's3981136@rmit.edu.vn',
's4015832@rmit.edu.vn',
's4032012@rmit.edu.vn',
's3975091@rmit.edu.vn',
's3975939@rmit.edu.vn',
's3978862@rmit.edu.vn',
's3980424@rmit.edu.vn',
's4022136@rmit.edu.vn',
's3924514@rmit.edu.vn',
's3974781@rmit.edu.vn',
's3975161@rmit.edu.vn',
's4037889@rmit.edu.vn',
's3975801@rmit.edu.vn',
's3921846@rmit.edu.vn',
's3891648@rmit.edu.vn',
's3926937@rmit.edu.vn',
's3938194@rmit.edu.vn',
's4021255@rmit.edu.vn',
's3804693@rmit.edu.vn',
's3830318@rmit.edu.vn',
's3907699@rmit.edu.vn'
          ];
        } else if ((rhythm === 'ISYS 3414') && (dynamic === 'tutorial') && (intensity === '3' || intensity === '10' || intensity === '17' || intensity === '24') && (dirty === '12')) {
          recipientEmails = [
            "s3924506@rmit.edu.vn",
            "s3974929@rmit.edu.vn",
            "s3979718@rmit.edu.vn",
            "s3981133@rmit.edu.vn",
            "s3922568@rmit.edu.vn",
            "s3977773@rmit.edu.vn",
            "s3977856@rmit.edu.vn",
            "s3978081@rmit.edu.vn",
            "s3979367@rmit.edu.vn",
            "s3979290@rmit.edu.vn",
            "s3924729@rmit.edu.vn",
            "s3932184@rmit.edu.vn",
            "s3979297@rmit.edu.vn",
            "s3986878@rmit.edu.vn",
            "s4023681@rmit.edu.vn",
            "s3975128@rmit.edu.vn",
            "s3975129@rmit.edu.vn",
            "s3975162@rmit.edu.vn",
            "s3975793@rmit.edu.vn",
            "s3836528@rmit.edu.vn",
            "s3891442@rmit.edu.vn",
            "s3974915@rmit.edu.vn",
            "s3980813@rmit.edu.vn",
            "s3759316@rmit.edu.vn",
            "s3966150@rmit.edu.vn",
            "s3978719@rmit.edu.vn",
            "s3979639@rmit.edu.vn",
            "s4031709@rmit.edu.vn",
            "s3963213@rmit.edu.vn",
            "s3975844@rmit.edu.vn",
            "s3978302@rmit.edu.vn",
            "s3979856@rmit.edu.vn"
        ]; 
      } else if ((rhythm === 'ISYS 3414') && (dynamic === 'tutorial') && (intensity === '3' || intensity === '10' || intensity === '17' || intensity === '24') && (dirty === '16')) {
        recipientEmails = [
          's3822927@rmit.edu.vn',
          's3979034@rmit.edu.vn',
          's3979486@rmit.edu.vn',
          's4028019@rmit.edu.vn',
          's3870729@rmit.edu.vn',
          's3927251@rmit.edu.vn',
          's3970818@rmit.edu.vn',
          's3970870@rmit.edu.vn',
          's3978685@rmit.edu.vn',
          's3777258@rmit.edu.vn',
          's3978419@rmit.edu.vn',
          's4012094@rmit.edu.vn',
          's4015692@rmit.edu.vn',
          's4053400@rmit.edu.vn'
      ];                           
      } else {
          recipientEmails = ['s4053400@rmit.edu.vn', 's3979718@rmit.edu.vn', 's3924514@rmit.edu.vn', 's4012094@rmit.edu.vn'];
        }  
       starButton.addEventListener("click", function() {
       
           // Convert and encode each email address separately
           const encodedEmails = recipientEmails.map(email => encodeURIComponent(email));
       
           // Join the encoded email addresses with commas
           const recipientEmail = encodedEmails.join(',');
       
           const emailBody = `Dear friend, `;
           const emailBody2 = `This is a friendly email reminder with the relevant links for your upcoming ${rhythm} ${dynamic} at ${dirty}${dark}. You can find the links below:`;
          
          const emailBody3 = `Link to online lecture: \n${links}`;
          const emailBody4 = `Lecture slides/materials: \n${resources.join('\n')}`;

           const emailBody5 = `Happy studying :)`;
       

           let emailSubject = '';
           if (dynamic === 'lecture') {
            emailSubject = `Your upcoming ${rhythm} lecture at ${dirty}${dark} (${genre} - ${chords} ${intensity}/${color})`;
            } else {
              emailSubject = `Your upcoming ${rhythm} tutorial at ${dirty}${dark} (${genre} - ${chords} ${intensity}/${color})`;
            }

          let emailBodyFull = '';
           if (dynamic === 'lecture') {
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
findTrackButton.innerHTML = "Links";
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
    links;
    

    linkValuesContainer.innerHTML = "";



    const titleElement = document.createElement("h2");
    titleElement.textContent = "Find and purchase track at:";
    linkValuesContainer.appendChild(titleElement);
links.forEach((value, index) => {
  const linkValueElement = document.createElement("p");
  const linkElement = document.createElement("a");
  linkElement.href = value;
  linkElement.textContent = `${value}`;
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


        // Append the play button to the new grid item



        // Add the grid item to the grid container
        container.prepend(newGridItem);
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
      });
    })
    .catch((error) => {
      console.error("Error retrieving grid items:", error);
    });

});
