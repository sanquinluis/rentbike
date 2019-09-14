import $ from 'jquery';
window.jQuery = window.$ = $;

$(document).ready(function(){

	$.getJSON('bikerentals.json', function(data){
		var products = "";

			$.each(data, function(key, value){
				products += '<h1>' + value.name + '</h1>'
			});
			$('#bikeMale').append(products);
			console.log(products);
	});

});