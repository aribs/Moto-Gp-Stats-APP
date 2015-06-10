allPilots = [];
$(document).ready(function(){
	getAllPilots();
	$("#infoPilots").hide();
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
		$("#infoPilots").hide()
		$("#infoPilots").slideDown();
		var clickedPilot = $(this).attr("id");
		var position = $(this).position();
		$("#infoPilots").css({ "position": "relative", "top": position.top-325 +"px", "left": position.left+ 10 + 'px' });
		 clickedPilot = parseInt(clickedPilot);
		 $("#listName").text(allPilots[clickedPilot].name);
		 $("#listLastName").text(allPilots[clickedPilot].last_name);
		 $("#listNumber").text(allPilots[clickedPilot].number);
		 $("#listRaces").text(allPilots[clickedPilot].n_races);
		 $("#listVictories").text(allPilots[clickedPilot].n_victory);
		 $("#listSecond").text(allPilots[clickedPilot].n_second_position);
		 $("#listThird").text(allPilots[clickedPilot].n_third_position);
		 $("#listPoles").text(allPilots[clickedPilot].n_pole_positions);
		 $("#listFastestLap").text(allPilots[clickedPilot].n_fastest_lap);



		 
	});
	$("#infoPilots").on("click", function(){
		$(this).slideUp();
	});
	
});

