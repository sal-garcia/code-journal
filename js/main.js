/* global data */
/* exported data */
var $input = document.querySelector('#photo-url');
$input.addEventListener('input', inputfunc);

function inputfunc(event) {
  $input.setAttribute('src', event.target.value);

}
