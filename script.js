arrayPilots = [];
$(document).ready(function(){
	getPilot("Rossi");
	getPilot("Lorenzo");
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
        console.log(pilot.last_name);
		$("#pilots").append("<span id='" + pilot.last_name + "'></span>")
        $("#" + pilot.last_name+"").text(" - " + pilot.last_name);

        $("#pilots").append("<span id='" + pilot.number + "'></span>")
        $("#" + pilot.number+"").text(" - " + pilot.number);

        $("#pilots").append("<span id='" + pilot.n_races + "'></span>")
        $("#" + pilot.n_races+"").text(" - " + pilot.n_races);

        $("#pilots").append("<span id='" + pilot.n_victory + "'></span>")
        $("#" + pilot.n_victory + "").text(" - " + pilot.n_victory );

        $("#pilots").append("<span id='" + pilot.n_second_position + "'></span>")
        $("#" + pilot.n_second_position + "").text(" - " + pilot.n_second_position );

       $("#pilots").append("<span id='" + pilot.n_third_position + "'></span>")
        $("#" + pilot.n_third_position + "").text(" - " + pilot.n_third_position );

        $("#pilots").append("<span id='" + pilot.n_pole_positions + "'></span>")
        $("#" + pilot.n_pole_positions + "").text(" - " + pilot.n_pole_positions );

        $("#pilots").append("<span id='" + pilot.n_fastest_lap + "'></span>")
        $("#" + pilot.n_fastest_lap + "").text(" - " + pilot.n_fastest_lap );		
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
                'Fast Lap'
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