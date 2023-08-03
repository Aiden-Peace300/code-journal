// *****************************Get references to the required elements*******************************//

// Grabbing the first HTML element with the ID 'photo-url' and storing it in the constant variable $photoUrlInput.
// $photoUrlInput OUTPUT: <input class="border" type="text" id="photo-url" name="photo-url" required="">
const $photoUrlInput = document.querySelector('#photo-url');
// Grabbing the first HTML element with the ID 'image' and storing it in the constant variable $image.
// $image OUTPUT: <img id="image" src="images/placeholder-image-square.jpg" alt="Photo place holder">
const $image = document.querySelector('#image');
// Grabbing the first HTML element with the ID 'note-form' and storing it in the constant variable $form.
// $form OUTPUT: way to long to put here but it will grab ALL of the children inside for the first element it sees with the ID 'note-form'
const $form = document.querySelector('#note-form');
// Grabbing the first HTML element with the data-view="entry-form" and storing it in the constant variable $entryForm.
// $entryForm OUTPUT: way to long to put here but it will grab ALL of the children inside for the first element it sees with the ID 'data-view="entry-form"'
const $entryForm = document.querySelector('[data-view="entry-form"]');
// Grabbing the first HTML element with the data-view="entries" and storing it in the constant variable $entriesView.
// $entriesView OUTPUT: way to long to put here but it will grab ALL of the children inside for the first element it sees with the ID 'data-view="entries"'
const $entriesView = document.querySelector('[data-view="entries"]');
// Grabbing the first HTML element with the ID 'entries-list' and storing it in the constant variable $entriesList.
// $entriesList OUTPUT:
//  <ul id="entries-list">
//    <li class="no-entries-message">No entries have been recorded yet.</li>
//  </ul >
const $entriesList = document.querySelector('#entries-list');
// Grabbing the first HTML element with the class 'no-entries-message' and storing it in the constant variable $noEntriesMessage.
// $noEntriesMessage OUTPUT: <li class="no-entries-message">No entries have been recorded yet.</li>
const $noEntriesMessage = document.querySelector('.no-entries-message');
// *************************************************************************************************//

// ***************************** handlePhotoUrl() (EVENT LISTENER FUNCTION) ************************//
// PURPOSE: This function is an event listener designed to handle changes in the photo URL input field.
// It retrieves the value of the input field and updates the src attribute of an image element with the
// provided URL from user.
// RETURNS: This function does not return anything explicitly.

// AKA: the handlePhotoUrl() Function will handle changes in the photo URL input field.
function handlePhotoUrl(event) {
  // Getting the value of the photo URL input field
  const photoUrl = $photoUrlInput.value;

  // Update the src attribute of the image element with the provided URL
  $image.src = photoUrl;
}
// *************************************************************************************************//

// ******************************* renderEntry() (EVENT LISTENER FUNCTION) *************************//
// PURPOSE: This function takes an entry object as input and creates an HTML representation of the entry.
// It generates a new HTML list item element (<li>) and assigns it to the variable $entryElement.
// The function then adds the CSS class name "entry" to the newly created list item element using the classList.add() method.
// It creates additional HTML elements to represent the entry's title, notes, and photo, and appends them to the list item element in the correct order.

// RETURNS: The function returns the created entry element, which can be later appended to the entries list.

// AKA: Function to render an entry element
function renderEntry(entry) {
  // Creating a new HTML list item element (<li>) and assigning it to the variable $entryElement.
  const $entryElement = document.createElement('li');
  // Adding the CSS class name "entry" to the newly created list item element using the classList.add() method.
  $entryElement.classList.add('entry');

  // Creating a new HTML div element (<div>) and assigning it to the variable $entryContent.
  const $entryContent = document.createElement('div');
  // Adding the CSS class name "entry-content" to the newly created div element using the classList.add() method.
  $entryContent.classList.add('entry-content');

  // Creating a new HTML div element (<div>) and assigning it to the variable $entryText.
  const $entryText = document.createElement('div');
  // Adding the CSS class name "entry-text" to the newly created div element using the classList.add() method.
  $entryText.classList.add('entry-text');

  // Creating a new HTML heading element (<h3>) and assigning it to the variable $entryTitle.
  const $entryTitle = document.createElement('h3');
  // Adding the CSS class name "entry-title" to the newly created heading element using the classList.add() method.
  $entryTitle.classList.add('entry-title');
  // Setting the text content of the heading element to the entry's title.
  $entryTitle.textContent = entry.title;

  // Creating a new HTML paragraph element (<p>) and assigning it to the variable $entryNotes.
  const $entryNotes = document.createElement('p');
  // Add the CSS class name "entry-notes" to the newly created paragraph element using the classList.add() method.
  $entryNotes.classList.add('entry-notes');
  // Set the text content of the paragraph element to the entry's notes.
  $entryNotes.textContent = entry.notes;

  // Creating a new HTML div element (<div>) and assigning it to the variable $entryPhoto.
  const $entryPhoto = document.createElement('div');
  // Add the CSS class name "entry-photo" to the newly created div element using the classList.add() method.
  $entryPhoto.classList.add('entry-photo');

  // Creating a new HTML image element (<img>) and assigning it to the variable $photoImg.
  const $photoImg = document.createElement('img');
  // Set the source (src) attribute of the image element to the entry's photoUrl.
  $photoImg.src = entry.photoUrl;
  // Set the alt attribute of the image element to the entry's title.
  $photoImg.alt = entry.title;
  // Add the CSS class name "entry-image" to the newly created image element using the classList.add() method.
  $photoImg.classList.add('entry-image');

  // Append the elements in the correct order to create the desired HTML structure for an entry element.
  $entryText.appendChild($entryTitle);
  $entryText.appendChild($entryNotes);
  $entryPhoto.appendChild($photoImg);
  $entryContent.appendChild($entryText);
  $entryContent.appendChild($entryPhoto);
  $entryElement.appendChild($entryContent);

  // Finally, return the created entry element, which can be later appended to the entries list.
  return $entryElement;
}

// Function to handle form submission
function handleSubmit() {
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

  // Call renderEntry to create the new entry element
  const entryElement = renderEntry(newEntry);

  // Append the new entry element to the entries list
  // prepend() => method is used to insert one or multiple elements as the first child of a parent element
  $entriesList.prepend(entryElement);

  // Conditionally use the toggleNoEntries function to remove the "No entries" text if needed
  toggleNoEntries(data.entries.length === 0);

  // Resetting the preview image's src attribute back to the placeholder image
  $image.src = 'images/placeholder-image-square.jpg';

  // Resetting the form
  $form.reset();

  // Use the viewSwap function to show the "entries" view after updating the entries list
  viewSwap('entries');
}

// Function to toggle the visibility of the "No entries" message
function toggleNoEntries(show) {
  if (show) {
    $noEntriesMessage.classList.remove('hidden');
  } else {
    $noEntriesMessage.classList.add('hidden');
  }
}

// Function to switch between views (entry-form and entries)
function viewSwap(nameOfView) {
  // Show the view whose name was provided as an argument
  if (nameOfView === 'entries') {
    $entriesView.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  } else if (nameOfView === 'entry-form') {
    $entryForm.classList.remove('hidden');
    $entriesView.classList.add('hidden');
  }

  // Update the data.view property to track the currently shown view
  data.view = nameOfView;
}

// Add event listeners
$photoUrlInput.addEventListener('input', handlePhotoUrl);
$form.addEventListener('submit', handleSubmit);

// Function to handle the "New" button click
function handleNewButtonClick(event) {
  viewSwap('entry-form');
}

// Add event listener for the "New" button
const $newEntryButton = document.querySelector('#new-entry-button');
$newEntryButton.addEventListener('click', handleNewButtonClick);

// Event listener to update the view when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Loop through the parsed entries and append them to the entries list
  for (let i = 0; i < data.entries.length; i++) {
    const entryElement = renderEntry(data.entries[i]);
    $entriesList.appendChild(entryElement);
  }

  // Showing the view which was displayed prior to page refresh, or default to "entries" view
  viewSwap(data.view);

  // Conditionally use the toggleNoEntries function to show or remove the "No entries" text if needed
  toggleNoEntries(data.entries.length === 0);
});
