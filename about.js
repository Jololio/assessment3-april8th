console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been sumbitted successfully!")
}

let form = document.querySelector('form#contact');

// Callbacks require functions to be ran. If it is not a function, the line of code will be ran when the code compiles
// Making it a function runs when the event listener is called
document.getElementById("cat-picture").addEventListener('mouseover', function() {
	alert('You are so funny!')
})

form.addEventListener('submit', handleSubmit);