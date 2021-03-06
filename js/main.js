/* global data */
/* exported data */
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
var $imageUrl = document.querySelector('.image');
var $photo = document.querySelector('#photo-url');
$photo.addEventListener('input', inputfunc);

function inputfunc(event) {
  $imageUrl.setAttribute('src', event.target.value);

}

var $form = document.querySelector('#form');
$form.addEventListener('submit', formFunc);

function formFunc(event) {
  event.preventDefault();
  var obj = {
    title: $title.value,
    photo: $photo.value,
    notes: $notes.value,
    nextEntryId: data.nextEntryId
  };

  localStorage.setItem('code-journal', JSON.stringify(obj));

  data.entries.unshift(obj);
  data.nextEntryId++;
  $imageUrl.setAttribute('src', './images/placeholder-image-square.jpg');
  $form.reset();

}
