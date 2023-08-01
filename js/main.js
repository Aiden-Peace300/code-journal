const $photoUrlInput = document.querySelector('#photo-url-input');
const $image = document.querySelector('#image');
const $form = document.querySelector('#note-form');
const entries = []; // Array to store the form data
let nextEntryId = 1; // Initialize the nextEntryId

function handlePhotoUrl(event) {
  const photoUrl = $photoUrlInput.value;
  $image.src = photoUrl;
}

function handleSubmit(event) {
  event.preventDefault(); // Preventing form submission

  const title = $form.elements.noteTitle.value;
  const photoUrl = $form.elements.photoUrl.value;
  const notes = $form.elements.message.value;

  const newEntry = {
    entryId: nextEntryId, // Assigning the entryId property from the nextEntryId variable
    title,
    photoUrl,
    notes,
  };

  // Incrementing the nextEntryId for the next form submission
  nextEntryId++;

  // Adding the newEntry to the entries array
  entries.unshift(newEntry);

  // Resetting the preview image's src attribute back to the placeholder image
  $image.src = 'images/placeholder-image-square.jpg';

  // Resetting the form
  $form.reset();
}

$photoUrlInput.addEventListener('input', handlePhotoUrl);
$form.addEventListener('submit', handleSubmit);
