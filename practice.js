$(document).ready(function(){

	console.log("Ready!");

	$( "button" ).click(function() {
       	console.log( "Enjoy your stuff :3" );


   
		var crayons_array=["purple","yellow","green","blue","pink","red","orange"];
		crayons_array.sort ();
		crayons_array.reverse();
		console.log(crayons_array);
		
		for (var i=0; i<crayons_array.length; i++) {
              console.log ("i=" + i);
              console.log (crayons_array [i]);

               var name = $("#Say Something").val();
			  console.log(name);
        }
          
	});
});