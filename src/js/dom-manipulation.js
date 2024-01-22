/*
  The file contains what deals with interacting
  with the DOM to capture input dynamically
*/

const getInputValue = id => document.getElementById(id).value;

const getRemainingNodes = () =>
  Array.from(document.getElementById(thesisIdLstId).children);

const getChosenIds = () =>
  Array.from(document.getElementById(stdThesisIdLstId).children).map(
    selection => selection.value
  );
