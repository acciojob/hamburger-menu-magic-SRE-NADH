//your JS code here. If required.
let header = document.getElementsByClassName("header")[0];
let body  = document.getElementsByTagName('body')[0];
let links = document.getElementsByClassName("links")[0];
let slide = document.getElementsByClassName("slide")[0];


window.addEventListener('resize',handleResize);

function handleResize(e){
	if(window.innerWidth<=480){
		
		header.innerHTML = `
		       <p>Hamburger Navigation</p>
	            <div>
				<p onClick="show()" >click event</P>
				</div> `;
		console.log(header);
	}
	else{
				
		header.innerHTML = `
		       <p>Hamburger Navigation</p>
	           <div class="links" >
		  <p>Home</p> 
		  <p>BLog</p> 
		  <p>about me</p> 
	   </div> `;
		
	 slide.setAttribute('active','false');
	}
	
}


function show(){
	slide.setAttribute('active','true');
}
