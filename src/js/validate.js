function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateEmailForm() {
	var x = document.forms["emailForm"]["_replyto"].value;
	if (validateEmail(x)) {
		alert("Please fill out with a valid email");
		return false;
	}
}

function validateTopicForm() {
	var x = document.forms["topicForm"]["topic"].value;
	if (x == "") {
		alert("Topic must be filled out");
		return false;
	}
}