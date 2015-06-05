arrayPilots = [];
$(document).ready(function(){
	getPilot("Marquez");
	getPilot("Lorenzo");
    $("#menu").hide();
	function getPilot(namePilot){
		$.ajax({
				url: "http://localhost:3000/api/pilots/" + namePilot,
				data: "",
				success: function(response){drawPilot(response)},
				error: function(){console.log("error error error")},
				dataType: "json"
				});
		
	};

	function drawPilot(pilot){
        arrayPilots.push(pilot);
		$("#pilots").append("<div id='" + pilot.last_name + "'></div>")
        $("#" + pilot.last_name+"").text("Last name: - " + pilot.last_name);

        $("#pilots").append("<div id='" + pilot.number + "'></div>")
        $("#" + pilot.number+"").text("Number:  - " + pilot.number);

        $("#pilots").append("<div id='" + pilot.n_championships + "'></div>")
        $("#" + pilot.n_championships + "").text("Championships: - " + pilot.n_championships );

        $("#pilots").append("<div id='" + pilot.n_races + "'></div>")
        $("#" + pilot.n_races+"").text("Number of Races: - " + pilot.n_races);

        $("#pilots").append("<div id='" + pilot.n_victory + "'></div>")
        $("#" + pilot.n_victory + "").text("Victories: - " + pilot.n_victory );

        $("#pilots").append("<div id='" + pilot.n_second_position + "'></div>")
        $("#" + pilot.n_second_position + "").text("Second position: - " + pilot.n_second_position );

       $("#pilots").append("<div id='" + pilot.n_third_position + "'></div>")
        $("#" + pilot.n_third_position + "").text("Third Position: - " + pilot.n_third_position );

        $("#pilots").append("<div id='" + pilot.n_pole_positions + "'></div>")
        $("#" + pilot.n_pole_positions + "").text("Pole Position: - " + pilot.n_pole_positions );

        $("#pilots").append("<div id='" + pilot.n_fastest_lap + "'></div>")
        $("#" + pilot.n_fastest_lap + "").text("Fast Lap: - " + pilot.n_fastest_lap );
        $("#pilots").append("<img src='" + pilot.url_photo + "'>")	
	};
});
//end
    
$("#viewGraphic").on("click",function(){
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: arrayPilots[0].last_name + " VS " + arrayPilots[1].last_name
        },
        subtitle: {
            text: 'Api MotoGp'
        },
        xAxis: {
            categories: [
                'Races',
                'Victory',
                'Second',
                'Third',
                'Pole',
                'Fast Lap',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'MotoGp Stats'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:15px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: arrayPilots[0].last_name,
            data: [arrayPilots[0].n_races, arrayPilots[0].n_victory, arrayPilots[0].n_second_position, arrayPilots[0].n_third_position, arrayPilots[0].n_pole_positions, arrayPilots[0].n_fastest_lap]

        }, {
            name: arrayPilots[1].last_name,
            data: [arrayPilots[1].n_races, arrayPilots[1].n_victory, arrayPilots[1].n_second_position, arrayPilots[1].n_third_position, arrayPilots[1].n_pole_positions, arrayPilots[1].n_fastest_lap]

        },  ]
    });

})
$("#btnMenu").on("click",function(){
    $("#menu").slideToggle()
});