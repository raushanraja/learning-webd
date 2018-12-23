function copy() {
    var copyText = document.getElementById("textToCopy");
    copyText.select();
    document.execCommand("copy");
    alert("Copied text:\n"+copyText.value)
  } 