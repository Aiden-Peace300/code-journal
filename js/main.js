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

const $viewTitle = document.querySelector('.view-title');

const $deleteEntryButton = document.querySelector('#delete-entry-button');
const $deleteModal = document.querySelector('#delete-modal');
const $cancelDeleteButton = document.querySelector('#cancel-delete-button');
const $deleteButton = document.querySelector('#delete-entry-button');

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
  $entryElement.setAttribute('data-entry-id', entry.entryId);
  // Adding the CSS class name "entry" to the newly created list item element using the classList.add() method.
  $entryElement.classList.add('entry');

  // Creating a new HTML div element (<div>) and assigning it to the variable $entryContent.
  const $entryContent = document.createElement('div');
  // Adding the CSS class name "entry-content" to the newly created div element using the classList.add() method.
  $entryContent.classList.add('row');

  // Creating a new HTML div element (<div>) and assigning it to the variable $entryText.
  const $entryText = document.createElement('div');
  // Adding the CSS class name "entry-text" to the newly created div element using the classList.add() method.
  $entryText.classList.add('column-half');

  // Creating a new HTML div element (<div>) and assigning it to the variable $columnFull.
  const $columnHalf = document.createElement('div');
  $columnHalf.classList.add('title-and-edit-icon-same-row');

  // Creating a new HTML heading element (<h3>) and assigning it to the variable $entryTitle.
  const $entryTitle = document.createElement('h3');
  // Adding the CSS class name "entry-title" to the newly created heading element using the classList.add() method.
  $entryTitle.classList.add('entry-title');
  // Setting the text content of the heading element to the entry's title.
  $entryTitle.textContent = entry.title;

  const $editIconDiv = document.createElement('div');
  $editIconDiv.classList.add('edit-icon');

  const $editIcon = document.createElement('i');
  $editIcon.classList.add('fa', 'fa-pencil', 'edit-icon');

  // Creating a new HTML paragraph element (<p>) and assigning it to the variable $entryNotes.
  const $entryNotes = document.createElement('p');
  // Adding the CSS class name "entry-notes" to the newly created paragraph element using the classList.add() method.
  $entryNotes.classList.add('entry-notes');
  // Setting the text content of the paragraph element to the entry's notes.
  $entryNotes.textContent = entry.notes;

  // Creating a new HTML div element (<div>) and assigning it to the variable $entryPhotoDiv.
  const $entryPhotoDiv = document.createElement('div');
  // Adding the CSS class name "column-half" to the newly created div element using the classList.add() method.
  $entryPhotoDiv.classList.add('column-half');

  // Creating a new HTML div element (<div>) and assigning it to the variable $entryPhoto.
  const $entryPhoto = document.createElement('div');
  // Adding the CSS class name "entry-photo" to the newly created div element using the classList.add() method.
  $entryPhoto.classList.add('entry-photo');

  // Creating a new HTML image element (<img>) and assigning it to the variable $photoImg.
  const $photoImg = document.createElement('img');
  // Setting the source (src) attribute of the image element to the entry's photoUrl.
  $photoImg.src = entry.photoUrl;
  // Setting the alt attribute of the image element to the entry's title.
  $photoImg.alt = entry.title;
  // Adding the CSS class name "entry-image" to the newly created image element using the classList.add() method.
  $photoImg.classList.add('entry-image');

  // Appending the elements in the correct order to create the desired HTML structure for an entry element.
  $entryPhoto.appendChild($photoImg);
  $entryPhotoDiv.appendChild($entryPhoto);
  $columnHalf.appendChild($entryTitle);
  $editIconDiv.appendChild($editIcon);
  $columnHalf.appendChild($editIconDiv);
  $entryText.appendChild($columnHalf);
  $entryText.appendChild($entryNotes);
  $entryContent.appendChild($entryPhotoDiv);
  $entryContent.appendChild($entryText);
  $entryElement.appendChild($entryContent);

  // returning the created entry element, which can be later appended to the entries list.
  return $entryElement;
}

function handleSubmit(event) {
  event.preventDefault(); // Preventing form submission

  // Getting the values from the form inputs
  const title = $form.elements['note-title'].value;
  const photoUrl = $form.elements['photo-url'].value;
  const notes = $form.elements.message.value;

  // Checking if we are editing an existing entry or creating a new one
  if (data.editing === null) {
    // Creating a new entry object for a new entry
    const newEntry = {
      entryId: data.nextEntryId,
      title,
      photoUrl,
      notes,
    };

    // Incrementing the nextEntryId for the next form submission
    data.nextEntryId++;

    // Adding the new entry to the beginning of the entries array
    data.entries.unshift(newEntry);

    // Rendering a new DOM tree for the new entry and prepend it to the entries list
    const newEntryElement = renderEntry(newEntry);
    $entriesList.prepend(newEntryElement);

    // Hide the "Delete Entry" button when adding a new entry
    toggleDeleteButtonVisibility(false);
  } else {
    // Finding the index of the edited entry in the entries array
    let index = -1; // Initialize the index to -1 (not found)

    for (let i = 0; i < data.entries.length; i++) {
      // Compare the entryId of the current entry with the entryId we're editing
      if (data.entries[i].entryId === data.editing.entryId) {
        index = i; // Found the index!!
        break; // No need to continue searching
      }
    }

    if (index !== -1) {
      // Creating a new object with the updated form values
      const updatedEntry = {
        ...data.entries[index],
        title,
        photoUrl,
        notes,
      };

      // Replacing the original entry with the updated entry
      data.entries[index] = updatedEntry;

      // Rendering a new DOM tree for the updated entry and replace the existing entry
      const updatedEntryElement = renderEntry(updatedEntry);
      const $existingEntryElement = document.querySelector(
        `[data-entry-id="${data.editing.entryId}"]`
      );
      $entriesList.replaceChild(updatedEntryElement, $existingEntryElement);

      // Resetting data.editing to null
      data.editing = null;

      // Updating the title on the form to "New Entry"
      $viewTitle.textContent = 'New Entry';
    }
  }

  // Resetting the form inputs
  $form.reset();

  // Resetting the image src to the placeholder
  $image.src = 'images/placeholder-image-square.jpg';

  // Show the "entries" view
  viewSwap('entries');

  // Show or hide the "No entries" message as needed
  toggleNoEntries(data.entries.length === 0);
}

// toggleNoEntries() Function to toggle the visibility of the "No entries" message
function toggleNoEntries(show) {
  if (show) {
    $noEntriesMessage.classList.remove('hidden');
  } else {
    $noEntriesMessage.classList.add('hidden');
  }
}

// viewSwap() Function to switch between views (entry-form and entries)
function viewSwap(nameOfView) {
  // Showing the view whose name was provided as an argument
  if (nameOfView === 'entries') {
    $entriesView.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  } else if (nameOfView === 'entry-form') {
    $entryForm.classList.remove('hidden');
    $entriesView.classList.add('hidden');
  }

  // Updating the data.view property to track the currently shown view
  data.view = nameOfView;
}

// Function to handle the "New" button click
function handleNewButtonClick(event) {
  viewSwap('entry-form');
}

// Function to handle the "New" button click
function handleNavbarEntriesLinkClick(event) {
  viewSwap('entries');
}

// Function to handle the "edit icon" button click
function handleEditIconClicked(event) {
  // Check if the clicked element is an <i> element with the class 'edit-icon'
  if (
    event.target.tagName === 'I' &&
    event.target.classList.contains('edit-icon')
  ) {
    // Finding the closest ancestor li element
    const entryElement = event.target.closest('.entry');

    // Accessing the number of entry clicked (entryId) stored in the "data-entry-id" attribute
    const entryId = entryElement.getAttribute('data-entry-id');

    let clickedEntry;
    for (let i = 0; i < data.entries.length; i++) {
      const entry = data.entries[i];
      if (entry.entryId === parseInt(entryId)) {
        clickedEntry = entry;
        break;
      }
    }

    data.editing = clickedEntry;

    toggleDeleteButtonVisibility(true);

    // Pre-populating the entry form with the clicked entry's values
    $form.elements['note-title'].value = clickedEntry.title;
    $form.elements['photo-url'].value = clickedEntry.photoUrl;
    $form.elements.message.value = clickedEntry.notes;

    // Updating the displayed image with the photo URL
    $image.src = clickedEntry.photoUrl;

    // Updating the title of the entry-form view to "Edit Entry"
    $viewTitle.textContent = 'Edit Entry';

    // Using the viewSwap function to show the "entry-form" view
    viewSwap('entry-form');
  }
}

function showDeleteModal() {
  $deleteModal.classList.add('block');
}

function hideDeleteModal() {
  $deleteModal.classList.remove('block');
}

function handleDeleteEntry(event) {
  event.preventDefault();
  showDeleteModal();
}

function handleCancelDelete(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  hideDeleteModal();
}

function toggleDeleteButtonVisibility(visible) {
  if (visible) {
    $deleteButton.removeAttribute('hidden');
  } else {
    $deleteButton.setAttribute('hidden', 'true');
  }
}

$deleteEntryButton.addEventListener('click', handleDeleteEntry);
$cancelDeleteButton.addEventListener('click', handleCancelDelete);

// Adding a event listener for the "PhotoUrl" input
$photoUrlInput.addEventListener('input', handlePhotoUrl);

// Adding a event listener for the "submit" button
$form.addEventListener('submit', handleSubmit);

// Adding event listener for the "New" button
const $newEntryButton = document.querySelector('#new-entry-button');
$newEntryButton.addEventListener('click', handleNewButtonClick);

// Adding a event listener for the "Entries" button
const $navbarEntriesLink = document.querySelector('#navbar-entries-link');
$navbarEntriesLink.addEventListener('click', handleNavbarEntriesLinkClick);

// Adding a event listener to update the view when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Looping through the parsed entries and appending them to the entries list
  for (let i = 0; i < data.entries.length; i++) {
    const entryElement = renderEntry(data.entries[i]);
    $entriesList.appendChild(entryElement);
  }

  // Showing the view which was displayed prior to page refresh, or default to "entries" view
  viewSwap(data.view);

  // toggleNoEntries function to show or remove the "No entries" text if needed
  toggleNoEntries(data.entries.length === 0);
});

$entriesList.addEventListener('click', handleEditIconClicked);
