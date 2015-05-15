$(function(){
	$.ajax({
		type: "GET",
		url: "TheDomesticConsumptionOfWater.json",
		dataType: "jsonp",
		success: function (data) {
			document.getElementById('out').innerText=data.TheDomesticConsumptionOfWater[0].TheDomesticConsumptionOfWater;
			console.log('0');
		}
	});
});
