// Get the modal
var modalJoin = document.getElementById('modalJoin');
var modalSubmit = document.getElementById('modalSubmit');
// Get the button that opens the modal
var joinUs = document.getElementById("buttonJoin");
var submitTopic = document.getElementById("buttonSubmitTopic");
// When the user clicks on the button, open the modal 
joinUs.onclick = function() {
    modalJoin.style.display = "block";
}
submitTopic.onclick = function() {
    modalSubmit.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalJoin) {
        modalJoin.style.display = "none";
    }
    else if (event.target == modalSubmit) {
        modalSubmit.style.display = "none";
    }
}

window.ontouchend = function(event) {
    if (event.target == modalJoin) {
        modalJoin.style.display = "none";
    }
    else if (event.target == modalSubmit) {
        modalSubmit.style.display = "none";
    }
}
