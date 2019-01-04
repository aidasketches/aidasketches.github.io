/* This function shows and hides x alternately*/
function showHideId(x,y){
	var p = document.getElementById(x);
	var q = document.getElementById(y);
	if ((p.style.display === "block")||(p.style.display === "block")) {
	        p.style.display = "none";
	        q.style.display = "none";
		} else {
    		p.style.display = "block";
    		q.style.display = "none";
		}	
}

function hideDropdowns(){
	// Ovo sam našla na netu i iskoristila. 
	var x = window.matchMedia("(max-width: 1024px)");
	hideWhenSmallerScreen(x); // Call listener function at run time
	x.addListener(hideWhenSmallerScreen); // Attach listener function on state changes

	function hideWhenSmallerScreen(){
		var z=document.getElementById("second");
		if (x.matches){
			hideClass("dropdown");
			z.style.display="none";
		}
		else{
			hideClass("dropdown");
			z.style.display="block";
		}	
	}
}	

function hideClass(x){
	var z=document.getElementsByClassName(x);
	for (i=0; i<z.length; i++){
		z[i].style.display="none";
	}
}