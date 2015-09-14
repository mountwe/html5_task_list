"use strict";

function TaskAtHandApp()
{
	var version = "v1.0;"

	function setStatus(mesage)
	{
		$("#app>footer").text(message);
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