$(document).ready(function() {
	start();
});


var start = function() {
    $.ajax({
            type: "GET",
            url: "rest/shoes",
            dataType: "json"
        })
        .done(function(data, status) {
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
	$tr1.append($th1,$th2,$th3,$th4);
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
		
		
		  var $button = $('<button>');

	        $button.attr('type', 'button');
	        $button.text('+miles');

	        $button.click(function(e) {
	          e.preventDefault();
	            $.ajax({
	                type: "PUT",
	                url: "rest/shoes" + $id,
	            })
	            .done(function(data, status){
	              start();
	              $('#myForm').remove();
	            });
	          })

	        $td5.append($button);
		
	$tr2.append($td1,$td2,$td3,$td4,$td5);
	$table.append($tr2)
	
	});
	$('body').append($table);
	
}



