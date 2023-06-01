// This adds the checkboxes to each challenge by injecting some HTML into the document. 

let challenge = document.querySelectorAll(".challenge");

challenge.forEach(function (e) {
  e.innerHTML +=
    "<span class='checkbox'>Complete:<input type='checkbox'></span>";
});
