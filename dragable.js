
var countPuzzle = 0;
$(document).ready(function(){
	$(".puzzle").droppable({
		drop:comparePuzzle

	});
	$(".imgPuzzle").draggable();
	$("#menu").hide();
});
function comparePuzzle(event, ui){
	var idDrop = parseInt($(this).data('id'));
	var idDrag = parseInt(ui.draggable.data('id'))
	
	if(idDrop === idDrag){
		$(this).droppable('disable');
		ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
		ui.draggable.draggable( 'disable' );
		countPuzzle ++;
		console.log(countPuzzle);
	}
	
	if(countPuzzle === 9){
		alert("finished");
		};
	
};
$("#btnMenu").on("click", function(){
    $("#menu").slideToggle();
});
