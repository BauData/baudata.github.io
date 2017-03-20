function validateEmailForm() {
	var x = document.forms["emailForm"]["_replyto"].value;
	if (x == "") {
		alert("Email must be filled out");
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