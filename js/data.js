/* exported data */
// adding an event listener to the beforeunload event of the window object.
// When the user is about to leave or reload the webpage,
// the handleStorage function will be executed.
window.addEventListener('beforeunload', handleStorage);

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

// getItem() => retrieve data from the browser's
const previousEntriesJSON = localStorage.getItem('Javascript-local-storage');

// Checking if previousEntriesJSON is not null and parse it if it has a value
if (previousEntriesJSON !== null) {
  data.entries = JSON.parse(previousEntriesJSON);
}

function handleStorage(event) {
  // stringify() => static method converts a JavaScript value to a JSON string
  const entriesJSON = JSON.stringify(data.entries);

  // setItem() => store data in the browser's
  localStorage.setItem('Javascript-local-storage', entriesJSON);
}
