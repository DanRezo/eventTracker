$(document).ready(function() {
	start();
});

var start = function() {

	$.ajax({
		type : "GET",
		url : "rest/shoes",
		dataType : "json"
	}).done(function(data, status) {
		loadTable(data);

	});
}

function loadTable(data) {

	var $table = $('<table>');
	var $tr1 = $('<tr>');
	var $tr3 = $('<tr>');
	var $th1 = $('<th>');
	var $th2 = $('<th>');
	var $th3 = $('<th>');
	var $th4 = $('<th>');

	$th1.text('');
	$th2.text('Brand');
	$th3.text('Name');
	$th4.text('Total Distance');
	$tr1.append($th1, $th2, $th3, $th4);
	$table.append($tr1);

	data.forEach(function(val) {
		var $tr2 = $('<tr>');
		var $td1 = $('<td>');
		var $td2 = $('<td>');
		var $td3 = $('<td>');
		var $td4 = $('<td>');
		var $td5 = $('<td>');

		$td1.prepend('<img id="theImg" src="Pictures/runningShoe.png" />');
		$td2.text(val.brand);
		$td3.text(val.name);
		$td4.text(val.totalMileage + ' miles');

		var $button = $('<button id="' + val.id + '">');

		$button.attr('type', 'button');
		$button.text('+miles');

	
	})

	$('body').append($table);

	$('#new').on('click', function(e) {
		console.log('clicked');
	});

	$('#retired').on('click', function(e) {
		console.log('click');
	});

	$('#shoes').on('click', function(e) {
		console.log('click');
	})
	
	$('button').click(function(e) {
		getShoe(e.id);
	});
}
var getShoe = function(e) {
	$.ajax({
		type : "GET",
		url : "rest/shoes/" + e.id,
	}).done(function(data, status) {
		edit(data);
	}).fail(function() {
		console.log('FAIL');
	})
}

var edit = function(shoe) {
	var $form = $('<form name="form">');
	var $p = $('<p>');

	var $input = $('<input>');
	$input.attr('name', 'miles');
	$input.attr('type', 'text');
	$input.attr('placeholder', 'Miles Run');

	var $input2 = $('<input>');
	$input2.attr('value', 'Submit');
	$input2.attr('type', 'submit');

	$form.append($p, $input, $input2);
	$('body').append($form);

	$input2.on('click', function(e) {
		e.preventDefault();

		var $shoe = {
			brand : shoe.mile,
			name : shoe.name,
			totalMileage : $(form.input).val(),
			currentMileage : shoe.currentMilage,
			image : shoe.image
		};

		$.ajax({
			type : "PUT",
			url : "rest/shoes/" + val.id,
		}).done(function(data, status) {
			start();
			$('#myForm').remove();
		});
	});

	$td5.append($button);

	$tr2.append($td1, $td2, $td3, $td4, $td5);
	$table.append($tr2)

}