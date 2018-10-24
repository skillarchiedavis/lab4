/*Exercise 1: Single boundary turns red

window.onload = function(){
	
	
const boundary = document.getElementById("boundary1");
	
	
boundary.onmouseover = function(){
		
boundary.classList.add("youlose");
	
};
};
*/
loser = false;
winner = false;

window.onload = function(){

	
	const boundaries = document.getElementById("maze").querySelectorAll(".boundary");
	
	const end = document.getElementById("end");
	
	const start = document.getElementById("start");

	const maze = document.getElementById("maze");
	
	for (var i=0;i<boundaries.length;i++){

		boundaries[i].addEventListener("mouseover", function(){
		
		if (winner == false){
			
			loser = true;
			
			for (var i=0;i<boundaries.length;i++){
				
				boundaries[i].classList.add("youlose")
			
			}
			
			document.getElementById("status").textContent = "You Lose!";
		
	}
	
		});
	
	}

	
	end.addEventListener("mouseover", function(){
		
	if (loser == false){
			
		document.getElementById("status").textContent = "You Win!";
			
		winner = true;
		
	}
	});

	
	start.addEventListener("click", function(){
		
		loser = false;
		
		winner = false;
		
		document.getElementById("status").innerHTML = "Move your mouse over the &quot;S&quot; to begin.";
	
		for (var i=0;i<boundaries.length;i++){
			
			boundaries[i].classList.remove("youlose");
			
		}
	
	});

	
	maze.onmouseleave = function(){
		
		if (winner == false){
			
			document.getElementById("status").textContent = "You tried to cheat!";
			
			for (var i=0;i<boundaries.length;i++){
					
				boundaries[i].classList.add("youlose")
			}
		
			loser = true;
		

	    }
	}


};