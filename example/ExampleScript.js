//this is the js script that makes the bot run. you shouldn't need to change anything here

//this tells the script to run right away when your page loads
window.addEventListener("load", () => {

	//this is the typical tracery setup code
	var grammar = tracery.createGrammar(BotTracery);
	grammar.addModifiers(tracery.baseEngModifiers);

	//this function runs the tracery and inserts the output into the webpage
	function BotOutput() {
		var result = grammar.flatten("#origin#");
		document.getElementById("output").innerHTML = result;
	}

	BotOutput(); //this runs the function and outputs the first output

	document.getElementById("new").addEventListener("click", BotOutput); //this makes a new output when the button is clicked
});
