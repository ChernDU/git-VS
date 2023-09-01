// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var info = document.getElementById("info");
var auth = document.getElementById("auth");
var enter = document.getElementById("enter");
var info_nav = document.getElementById("info_nav");
var auth_nav = document.getElementById("auth_nav");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
info.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the button, open the modal
auth.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the button, open the modal
enter.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the button, open the modal
info_nav.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the button, open the modal
auth_nav.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}