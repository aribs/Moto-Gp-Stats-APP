allPilots = [];
$(document).ready(function(){
	getAllPilots();

	function getAllPilots(){
		$.ajax({
			url: "http://localhost:3000/api/pilots/",
			data:'',
			dataType: "json",
			success:function(response){printAllPilots(response)},
			error:function(){console.log("error, pilots not found")}

		});
	};
	function printAllPilots(arrayPilots){
		for(var i = 0; i <= arrayPilots.length -1 ; i++){
			imgToAdd = ("<img id='"+ i +"' class='imgPilot' src='"+ arrayPilots[i].url_photo + "'>");
			$("#photoPilots")
			.append("<div class='inline' id='" + arrayPilots[i].last_name + "'>" + imgToAdd + "</div>")
			allPilots.push(arrayPilots[i]);
		};
	};
	$("#photoPilots").on("click", ".imgPilot",function(){
		var clickedPilot = $(this).attr("id");
		 clickedPilot = parseInt(clickedPilot);
		 $("#listName").text("Name: " + allPilots[clickedPilot].name);
		 $("#listLastName").text("Last Name : " + allPilots[clickedPilot].last_name);
		 $("#listNumber").text("Number: " + allPilots[clickedPilot].number);
		 $("#listRaces").text("Races: " + allPilots[clickedPilot].n_races);
		 $("#listVictories").text("Victories: " + allPilots[clickedPilot].n_victory);
		 $("#listSecond").text("Seconds: " + allPilots[clickedPilot].n_second_position);
		 $("#listThird").text("Thirds: " + allPilots[clickedPilot].n_third_position);
		 $("#listPoles").text("Poles: " + allPilots[clickedPilot].n_pole_positions);
		 $("#listFastestLap").text("Fastest lap: " + allPilots[clickedPilot].n_fastest_lap);
		 
	});
	
});

