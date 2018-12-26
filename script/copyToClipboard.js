function copyIn() {
  var copyText = document.getElementById("textToCopy");
  copyText.select();
  document.execCommand("copy");
}

function copy(element) {
  var v = document.getElementById(element);
  var newInput = document.createElement('input');
  newInput.value = v.lastChild.data;
  newInput.id = "cp";
  newInput.setAttribute('readonly', '');
  newInput.style.position = 'absolute';
  newInput.style.left = '-9999px';
  v.parentNode.insertBefore(newInput, v.nextSibling);
  newInput.select();
  document.execCommand("copy");
  newInput.parentNode.removeChild(newInput);
}

