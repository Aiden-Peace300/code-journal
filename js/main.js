const $photoUrlInput = document.querySelector('#photo-url-Input');
const $image = document.querySelector('#image');

function handlePhotoUrl(event) {
  const photoUrl = $photoUrlInput.value;
  $image.src = photoUrl;
}

$photoUrlInput.addEventListener('input', handlePhotoUrl);
