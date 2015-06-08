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

	/*var arrCoordLat = [-12.043333, -11.043333, -10.043333];
	var arrCoodLong = [-77.028333,-76.028333, -75.028333];
	 var map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333
    });
	for(var i=0; i <= arrCoodLong.length-1; i++){
		 map.addMarker({
  		lat: arrCoordLat[i],
  		lng: arrCoodLong[i],
  		title: 'Bitch',
		});
	};*/
});