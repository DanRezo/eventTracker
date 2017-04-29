$(document).ready(function() {
	start();
});

var start = function() {
	$('#div2').remove();
	$('div').remove;
	$('#div').remove();
	$('#form1').remove();
	$('#form2').remove();
	$('#table').empty();

	$.ajax({
		type : "GET",
		url : "rest/shoes",
		dataType : "json"
	}).done(function(data, status) {
		loadTable(data);

	});
}

function loadTable(data) {
	var $div = $('<div id="div">')
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

		var $button = $('<button id="'+ val.id +'">');
		var $dbutton = $('<button id="del"'+ val.id +'">');

		$button.attr('type', 'button');
		$button.text('+miles');
		
		$dbutton.attr('type', 'button');
		$dbutton.text('delete');

		$button.click(function(e) {
			getShoe(val.id);
		});
		
		$dbutton.click(function(e) {
			deleteShoe(val.id);
		});

		$td5.append($button, $dbutton);

		$tr2.append($td1, $td2, $td3, $td4, $td5);
		$table.append($tr2)

	});
	$div.append($table);
	$('body').append($div);
	
	$('#new').on('click', function(e) {
		addshoe();
	});
	
	$('#retired').on('click', function(e) {
		console.log('click');
	});
	
	$('#shoes').on('click',function(e){
	})
	
}


var getShoe = function(id) {
	$.ajax({
		type : "GET",
		url : "rest/shoes/" + id,
	}).done(function(data, status) {
		edit(data);
	}).fail(function() {
		console.log('FAIL');
	})
}

var edit = function(shoe) {
	var $form = $('<form name="form1">');
	var $div2 = $('<div id="div2">');

	var $p = $('<p>');

	var $input = $('<input>');
	$input.attr('name', 'miles');
	$input.attr('type', 'text');
	$input.attr('placeholder', 'Miles Run');

	var $input2 = $('<input>');
	$input2.attr('value', 'Submit');
	$input2.attr('type', 'submit');

	$form.append($p, $input, $input2);
	$div2.append($form);
	$('#div').append($div2);

	$input2.on('click', function(e) {
		e.preventDefault();

		var $tm = parseFloat(shoe.totalMileage) + parseFloat($input.val());
		
		var $shoe = {
			    totalMileage: $tm,
			    brand: shoe.brand,
			    name: shoe.name
		};

		$.ajax({
            type: "PUT",
            url: "rest/shoes/"+ shoe.id,
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify($shoe)
        })
        .done(function(data, status) {
            console.log('milage update');
            start();
        })
        .fail(function(xhr, status, error) {
            console.log('fail');
            console.log(error);
            console.log(status);
        });
	});
	
}

var addshoe = function(){
	
	var $form = $('<form name="form2">');
	var $div2 = $('<div id="div2">');

	

	var $input1 = $('<input>');
	$input1.attr('name', 'brand');
	$input1.attr('type', 'text');
	$input1.attr('placeholder', 'Brand');

	var $input2 = $('<input>');
	$input2.attr('name', 'name');
	$input2.attr('type', 'text');
	$input2.attr('placeholder', 'Shoe Name');
	
	var $input3 = $('<input>');
	$input3.attr('name', 'totalMileage');
	$input3.attr('type', 'text');
	$input3.attr('placeholder', 'Miles Run');
	
	var $input4 = $('<input>');
	$input4.attr('value', 'Submit');
	$input4.attr('type', 'submit');

	$form.append($input1, $input2, $input3, $input4);
	$div2.append($form);
	$('#div').append($div2);
	
	$input4.on('click', function(e){
        e.preventDefault();
	
		var $shoe = {
			    totalMileage: $input3.val(),
			    brand: $input1.val(),
			    name: $input2.val()
		};
		

		$.ajax({
            type: "POST",
            url: "rest/shoes/",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify($shoe)
        })
        .done(function(data, status) {
            console.log('milage update');
            start();
//            $('#table').empty();
        })
        .fail(function(xhr, status, error) {
            console.log('fail');
            console.log(error);
            console.log(status);
        });
	});
	
	
}

var deleteShoe = function(id) {
	$.ajax({
        type: "DELETE",
        url: "rest/shoes/" + id,
    })
    .done(function(data, status){
    	start();
    });
};

