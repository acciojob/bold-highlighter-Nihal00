
function highlight() {
    //Write your code here
	const strongTags = document.querySelectorAll("strong");

	for(const tags of strongTags){
		tags.style.color = "green";
	}
}


function return_normal() {
    //Write your code here
	const strongTags = document.querySelectorAll("strong");

	for(const tags of strongTags){
		tags.style.color = "black";
	}
    
}
