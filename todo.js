var todos = [];

function saveList() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function retrieveList() {
	todos = JSON.parse(
		localStorage.getItem('todos') ? localStorage.getItem('todos') : '[]');
}

function refreshList() {
	$('#list').html('');
	console.log(todos.length);
	if (!todos.length) {
		$('#list').html('<h3 class="display3">No current tasks.</h3>');
	} else {
		for (var i = 0; i < todos.length; ++i) {
			if (todos[i].done) {
				var li = "<li class='list-item-group' data-id =" + i + "><del>" + todos[i].task + "</del></li>";

			} else {
				console.log("inside !todo.one");
				var li = "<li class='list-item-group' data-id =" + i + ">" + todos[i].task + "</li>";
			}
			$(li).prependTo($("#list"));
		}
		$('li').click(function () {
			todos[parseInt($(this).attr('data-id'))].done = true;
			saveList();
			refreshList();
		})
	}
}

$(function () {
	retrieveList();
	refreshList();
	$('#addTask').click(function () {

		if ($('#task').val() == "") {
			alert("Cant add an empty task");
		} else {
			console.log($('#task')[0].value);

			todos.push({
				task: $('#task')[0].value,
				done: false
			});

			console.log(todos[0]);
			saveList();
			refreshList();
		}
	});
});
