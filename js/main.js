const $photoUrlInput = document.querySelector('#photo-url');
const $image = document.querySelector('#image');
const $form = document.querySelector('#note-form');
const $entryForm = document.querySelector('[data-view="entry-form"]');
const $entriesView = document.querySelector('[data-view="entries"]');
const $entriesViewList = document.querySelector('[data-view="entries-list"]');

function handlePhotoUrl(event) {
  const photoUrl = $photoUrlInput.value;
  $image.src = photoUrl;
}

function renderEntry(entry) {
  // Creating a new HTML list item element (<li>) and
  // assign it to the variable $entryElement.
  const $entryElement = document.createElement('li');
  // Add the CSS class name "entry" to the newly
  // creating a list item element using the classList.add() method.
  $entryElement.classList.add('entry');

  // Creating a new HTML div element (<div>) and
  // assign it to the variable $entryElement.
  const $entryContent = document.createElement('div');
  // Add the CSS class name "entry-content" to the newly
  // creating a list item element using the classList.add() method.
  $entryContent.classList.add('entry-content');

  const $entryText = document.createElement('div');
  $entryText.classList.add('entry-text');

  const $entryTitle = document.createElement('h3');
  $entryTitle.classList.add('entry-title');
  $entryTitle.textContent = entry.title;

  const $entryNotes = document.createElement('p');
  $entryNotes.classList.add('entry-notes');
  $entryNotes.textContent = entry.notes;

  const $entryPhoto = document.createElement('div');
  $entryPhoto.classList.add('entry-photo');

  const $photoImg = document.createElement('img');
  $photoImg.src = entry.photoUrl;
  $photoImg.alt = entry.title;
  $photoImg.classList.add('entry-image');

  // Append the elements in the correct order
  $entryText.appendChild($entryTitle);
  $entryText.appendChild($entryNotes);
  $entryPhoto.appendChild($photoImg);
  $entryContent.appendChild($entryText);
  $entryContent.appendChild($entryPhoto);
  $entryElement.appendChild($entryContent);

  return $entryElement;
}

function updateEntriesView() {
  // Find the HTML element with the attribute "data-view" set to "entries" and
  // selectng its first <ul> (unordered list) element.
  // Assign the selected <ul> element to the variable $entriesList.
  const $entriesList = document.querySelector('[data-view="entries"] ul');

  // Clear existing entries from the view
  $entriesList.innerHTML = '';

  // Create and append entry elements to the view
  for (const entry of data.entries) {
    const entryElement = renderEntry(entry);
    $entriesList.appendChild(entryElement);
  }
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const title = $form.elements['note-title'].value;
  const photoUrl = $form.elements['photo-url'].value;
  const notes = $form.elements.message.value;

  const newEntry = {
    entryId: data.nextEntryId,
    title,
    photoUrl,
    notes,
  };

  // Incrementing the nextEntryId for the next form submission
  data.nextEntryId++;

  // Adding the newEntry to the entries array
  data.entries.unshift(newEntry);

  // Update the entries view with the new entry
  updateEntriesView();

  // Hide the entry form and show the entries view
  $entryForm.classList.add('hidden');
  $entriesView.classList.remove('hidden');
  $entriesViewList.classList.add('hidden');

  // Resetting the preview image's src attribute back to the placeholder image
  $image.src = 'images/placeholder-image-square.jpg';

  // Resetting the form
  $form.reset();
}

// Add event listeners
$photoUrlInput.addEventListener('input', handlePhotoUrl);
$form.addEventListener('submit', handleSubmit);

// Initially hide the entries view and show the entry form on page load
$entryForm.classList.add('hidden');
$entriesView.classList.remove('hidden');
$entriesViewList.classList.remove('hidden');

// Updating the entries view when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  updateEntriesView();
});
