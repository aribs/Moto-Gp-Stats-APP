$(document).ready(function(){
	getAllRaces();
	function getAllRaces(){
		$.ajax({
			url: "http://localhost:3000/api/gp_races",
			data: '',
			dataType: "json",
			success:function(response){printMap(response)},
			error:function(){console.log("error, gp's not found")}
		});
	}
	function printMap(gp_races){
		var allLatitudes = getLatitudes(gp_races);
		var allLongitudes = getLongitudes(gp_races);
		var allNames = getNames(gp_races);
		drawGraphicAttendance(gp_races);
		drawVictoriesGraphic(gp_races);
		var map = new GMaps({
      		el: '#map',
      		lat: 29.799583,
      		lng: -36.367787,
      		zoom: 2,
      		mapTypeId: google.maps.MapTypeId.SATELLITE
    	});
    	for(var i=0; i <= allLatitudes.length-1; i++){
		 	map.addMarker({
  				lat: allLatitudes[i],
  				lng: allLongitudes[i],
  				title: allNames[i],
			});
		};


	};
	function getLatitudes(gp_races){
		var allLatitudes = [];
		for(i=0; i<=gp_races.length -1; i++){
			allLatitudes.push(gp_races[i].latitude);
		}
		return allLatitudes;
	};
	function getLongitudes(gp_races){
		var allLongitudes = [];
		for(i=0; i<=gp_races.length -1; i++){
			allLongitudes.push(gp_races[i].longitude);
		}
		return allLongitudes;
	};

	function getNames(gp_races){
		var allNames = [];
		for(i=0; i<=gp_races.length -1; i++){
			allNames.push(gp_races[i].name);
		}
		return allNames;
	};
	function drawGraphicAttendance(gp_races){
		   var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'graphicAttendance',
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 55,
                beta: 55,
                depth: 20,
                viewDistance: 25
            }
        },
        title: {
            text: 'Attendance in each GP'
        },
        subtitle: {
            text: 'Season 2014'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [gp_races[0].attendance_2014, gp_races[1].attendance_2014, gp_races[2].attendance_2014, gp_races[3].attendance_2014, gp_races[4].attendance_2014, gp_races[5].attendance_2014, gp_races[6].attendance_2014, gp_races[7].attendance_2014, gp_races[8].attendance_2014, gp_races[9].attendance_2014, gp_races[10].attendance_2014, gp_races[11].attendance_2014, gp_races[12].attendance_2014, gp_races[13].attendance_2014, gp_races[14].attendance_2014, gp_races[15].attendance_2014, gp_races[16].attendance_2014, gp_races[17].attendance_2014]
        }]
    });

	    function showValues() {
	        $('#R0-value').html(chart.options.chart.options3d.alpha);
	        $('#R1-value').html(chart.options.chart.options3d.beta);
	    }

    	// Activate the sliders
	    $('#R0').on('change', function () {
	        chart.options.chart.options3d.alpha = this.value;
	        showValues();
	        chart.redraw(false);
	    });
	    $('#R1').on('change', function () {
	        chart.options.chart.options3d.beta = this.value;
	        showValues();
	        chart.redraw(false);
	    });

	    showValues();
		}
	function drawVictoriesGraphic(gp_races){
			var allVictories = countVictories(gp_races);
			 $('#graphicVictories').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '% Victories',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Marquez',   allVictories[0]],
                ['Lorenzo',       allVictories[1]],
                ['Rossi', 		allVictories[2]],
                ['Pedrosa',    allVictories[3]],
                
            ]
        }]
    });
	};
	function countVictories(gp_races){
		var arrayVictories = [0,0,0,0];
		for(var i=0; i <= gp_races.length-1; i++){
			if(gp_races[i].winner_2014 === 'Marquez'){
				arrayVictories[0] += 1;
			}
			else if(gp_races[i].winner_2014 === 'Lorenzo'){
				arrayVictories[1] +=1;
			}
			else if(gp_races[i].winner_2014 === 'Rossi'){
				arrayVictories[2] += 1;
			}
			else if(gp_races[i].winner_2014 === 'Pedrosa'){
				arrayVictories[3] += 1;
			}
		};
		return arrayVictories;
	};
});