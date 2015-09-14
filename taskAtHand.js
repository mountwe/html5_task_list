"use strict";

function TaskAtHandApp()
{
	var version = "v1.0;"

	function setStatus(mesage)
	{
		$("#app>footer").text(message);
	}

	function addTask()
	{
		var taskName = $("#new-task-name").val();
		if (taskName)
		{
			addTaskElement(taskName);
			// Reset the text field
			$("#new-task-name").val("").focus();
		}
	}
	function addTaskElement(taskName)
	{
		var $task = $("<li></li>");
		$task.text(taskName);
		$("#task-list").append($task);
	}

	this.start = function()
	{
		$("#new-task-name").keypress(function(e) {
			if (e.which == 13)
			{
				addTask();
				return false;
			}
		})
		.focus();

		$("#app>header").append(version);
		setStatus("ready");
	};

	$(function() {
    window.app = new TaskAtHandApp();
    windown.app.start();
});

}