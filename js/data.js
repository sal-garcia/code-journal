/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $codeJournal = localStorage.getItem('code-journal');
if ($codeJournal !== null) {
  $codeJournal = JSON.parse($codeJournal);
}
