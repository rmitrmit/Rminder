
function filterGridItems() {
  const rhythmFilterValue = document.getElementById("rhythmfilter").value;
  const colorFilterValue = document.getElementById("colorfilter").value;
  const intensityFilterValue = document.getElementById("intensityfilter").value;
  const instrumentFilterValue = document.getElementById("instrumentfilter").value;

    const rhythmRhythmFilterValue = document.getElementById("rhythmRhythmfilter").value;
  const colorColorFilterValue = document.getElementById("colorColorfilter").value;
  const soundSoundFilterValue = document.getElementById("soundSoundfilter").value;


  const genreFilterValue = document.getElementById("genreselect").value;

  const keyFilterValue = document.getElementById("keyselect").value;
  const searchInputValue = trackSearchInput.value.trim();

  const chordFilters = document.querySelectorAll('[id^="chordFilter"]');
  const selectedChords = Array.from(chordFilters)
    .map(filter => filter.value)
    .filter(chord => chord !== undefined);

  const gridItems = document.querySelectorAll(".grid-item");

  for (let i = 0; i < gridItems.length; i++) {
    const gridItem = gridItems[i];
    const introElement = gridItem.querySelector(".keyword");
    const genreSelectValue = introElement.dataset.genre || '' || gridItem.dataset.genre;
    const keySelectValue = introElement.dataset.key || '' || gridItem.dataset.key;
    const trackNameElement = gridItem.querySelector(".track-name");
    const trackName = trackNameElement.textContent.trim();
    const isTrackNameMatched = trackName.includes(searchInputValue);
    const rhythmSelectValue = introElement.dataset.rhythm || '' || gridItem.dataset.rhythm;
    const colorSelectValue = introElement.dataset.color || '' || gridItem.dataset.color;
    const intensitySelectValue = introElement.dataset.intensity || '' || gridItem.dataset.intensity;
    const instrumentSelectValue = introElement.dataset.instrument || '' || gridItem.dataset.instrument;
    const displayedChords = introElement.dataset.chords ? JSON.parse(introElement.dataset.chords) : [] || gridItem.dataset.chords ? JSON.parse(gridItem.dataset.chords) : [];

    const rhythmRhythmSelectValue = introElement.dataset.dynamic || '' || gridItem.dataset.dynamic;
    const colorColorSelectValue = introElement.dataset.dark || '' || gridItem.dataset.dark;
    const soundSoundSelectValue = introElement.dataset.dirty || '' || gridItem.dataset.dirty;


    let introFilterMatch = false;
    if (
      (rhythmFilterValue === "" || rhythmSelectValue === rhythmFilterValue) &&
      (colorFilterValue === "" || colorSelectValue === colorFilterValue) &&
      (intensityFilterValue === "" || intensitySelectValue === intensityFilterValue) &&
      (instrumentFilterValue === "" || instrumentSelectValue === instrumentFilterValue) &&
      (rhythmRhythmFilterValue === "" || rhythmRhythmSelectValue === rhythmRhythmFilterValue) &&
      (colorColorFilterValue === "" || colorColorSelectValue === colorColorFilterValue) &&
      (soundSoundFilterValue === "" || soundSoundSelectValue === soundSoundFilterValue) &&
      ((genreFilterValue === "" || genreSelectValue === genreFilterValue)) &&
      (keyFilterValue === "" || keySelectValue === keyFilterValue) &&
      (isTrackNameMatched)
    ) {
      introFilterMatch = true;
    }

    if (introFilterMatch && (selectedChords.every(chord => chord === ""))) {
      gridItem.style.display = "block"; // Show the grid item
    } else if (introFilterMatch && displayedChords.some(chord => selectedChords.includes(chord))) {
      gridItem.style.display = "block"; // Show the grid item
    } else {
      gridItem.style.display = "none"; // Hide the grid item
    }
  }
}


const rhythmFilterDropdown = document.getElementById("rhythmfilter");
const colorFilterDropdown = document.getElementById("colorfilter");
const intensityFilterDropdown = document.getElementById("intensityfilter");
const instrumentFilterDropdown = document.getElementById("instrumentfilter");

const rhythmRhythmFilterDropdown = document.getElementById("rhythmRhythmfilter");
const colorColorFilterDropdown = document.getElementById("colorColorfilter");
const soundSoundFilterDropdown = document.getElementById("soundSoundfilter");

rhythmFilterDropdown.addEventListener("change", filterGridItems);
colorFilterDropdown.addEventListener("change", filterGridItems);
intensityFilterDropdown.addEventListener("change", filterGridItems);
instrumentFilterDropdown.addEventListener("change", filterGridItems);

rhythmRhythmFilterDropdown.addEventListener("change", filterGridItems);
colorColorFilterDropdown.addEventListener("change", filterGridItems);
soundSoundFilterDropdown.addEventListener("change", filterGridItems);

const chordFilterDropdown = document.querySelectorAll('[id^="chordFilter"]');
chordFilterDropdown.forEach(chordFilter => {
  chordFilter.addEventListener("change", filterGridItems);
});

const genreFilterDropdown = document.getElementById("genreselect");
genreFilterDropdown.addEventListener("change", filterGridItems);


const keyFilterDropdown = document.getElementById("keyselect");
keyFilterDropdown.addEventListener("change", filterGridItems);


cancelButton.style.display = "none";

searchButton.addEventListener("click", function() {
  // Clear other filters
  rhythmFilterDropdown.value = "";
  colorFilterDropdown.value = "";
  intensityFilterDropdown.value = "";
  instrumentFilterDropdown.value = "";

    rhythmRhythmFilterDropdown.value = "";
  colorColorFilterDropdown.value = "";
  soundSoundFilterDropdown.value = "";

  genreFilterDropdown.value = "";

  keyFilterDropdown.value = "";
  cancelButton.style.display = "block";
  searchButton.style.display = "none";
});

searchButton.addEventListener("click", filterGridItems);


cancelButton.addEventListener("click", function() {
  // Clear other filters
  rhythmFilterDropdown.value = "";
  colorFilterDropdown.value = "";
  intensityFilterDropdown.value = "";
  instrumentFilterDropdown.value = "";

      rhythmRhythmFilterDropdown.value = "";
  colorColorFilterDropdown.value = "";
  soundSoundFilterDropdown.value = "";


  genreFilterDropdown.value = "";

  keyFilterDropdown.value = "";


  // Reset track name input
  document.getElementById("trackSearchInput").value = "";

  // Trigger search button click
  searchButton.click();
  searchButton.style.display = "block";
  cancelButton.style.display = "none";
});





const titleElement = document.getElementById("title");

// Add a click event listener to the title element
titleElement.addEventListener("click", () => {
  // Function to be executed when the title is clicked

  rhythmFilterDropdown.value = "";
  colorFilterDropdown.value = "";
  intensityFilterDropdown.value = "";
  instrumentFilterDropdown.value = "";

      rhythmRhythmFilterDropdown.value = "";
  colorColorFilterDropdown.value = "";
  soundSoundFilterDropdown.value = "";


  genreFilterDropdown.value = "";
  genreFilterDropdown2.value = "";
  genreFilterDropdown3.value = "";
  keyFilterDropdown.value = "";
  // Add your custom logic here
  // For example, you can open a modal, navigate to a different page, etc.
});
titleElement.addEventListener("click", filterGridItems);