function logo() {
	var picture = document.getElementById('img');
	picture.src = "images/grains.png";
	picture.style.width = "30vw";
	picture.style.height = "35vw";
	picture.style.margin = "5vw 0 0 6vw";

   document.getElementById('text').innerHTML = "Welcome to our coffee Shop!";
	var text = document.getElementById('right_side');
	text.style.width = "53vw"; 
   text.style.height = "33vw"; 
   text.style.margin = "4vw 0 0 5vw";
}

function change(element) {
	switch (element.innerHTML) {
		case "Coffee":
			var picture = document.getElementById('img');
			picture.src = "images/coffee.png";
			picture.style.width = "20vw";
			picture.style.height = "32vw";
			picture.style.margin = "1vw 0 0 6vw";

			document.getElementById('text').innerHTML = "Coffee";
			document.getElementById('paragraph').innerHTML = "You can’t imagine a day without a cup of coffee and we believe that your office and on-the-go coffee should never be a compromise.";
			var text = document.getElementById('right_side');
			text.style.width = "70vw"; 
		   text.style.height = "33vw"; 
		   text.style.margin = "8vw 4vw 0";
		   break;

		case "Order Online":
			var picture = document.getElementById('img');
			picture.src = "images/terminal.png";
			picture.style.width = "45vw";
			picture.style.height = "40vw";
			picture.style.margin = "0 -10vw 0 -4vw";

			document.getElementById('text').innerHTML = "Order Online";
			document.getElementById('paragraph').innerHTML = "Want to experience the best coffee you’ve ever tasted? Come join us at Nadia Cafe for sparkling conversation, a warm and welcoming atmosphere, and of course coffee beyond all imagining.";
			var text = document.getElementById('right_side');
			text.style.width = "70vw"; 
		   text.style.height = "33vw"; 
		   text.style.margin = "10vw 5vw 0 9vw";
		   break;

		case "About Us":
			var picture = document.getElementById('img');
			picture.src = "images/aboutus.png";
			picture.style.width = "20vw";
			picture.style.height = "20vw";
			picture.style.margin = "0 7vw 7vw";

			document.getElementById('text').innerHTML = "About us";
			document.getElementById('paragraph').innerHTML = "Our aim isn’t just to give people a place to meet and drink coffee, but to get people excited about the coffee they drink, and where it comes from. Got more questions? Drop by and join us for a chat.";
			var text = document.getElementById('right_side');
			text.style.width = "70vw"; 
		   text.style.height = "33vw"; 
		   text.style.margin = "8vw 10vw 0 0";
		   break;

		case "Contacts":
			var picture = document.getElementById('img');
			picture.src = "images/contacts.png";
			picture.style.width = "30vw";
			picture.style.height = "25vw";
			picture.style.margin = "0";

			document.getElementById('text').innerHTML = "Contacts";
			document.getElementById('paragraph').innerHTML = "We believe a cup of coffee is one of the most important, simple pleasures in life.";
			var text = document.getElementById('right_side');
			text.style.width = "70vw"; 
		   text.style.height = "33vw"; 
		   text.style.margin = "10vw 2vw 0 0";
		   break;
	}

	$("#img").animate({top: '+=30px', opacity: '0'}, "slow");
   $("#img").animate({top: '-=30px', opacity: '1'}, "slow");
	
   $("#right_side").animate({opacity: '0'}, "slow");
   $("#right_side").animate({opacity: '1'}, "slow");
}

function big(element) {
    element.style.fontSize = "2.5vw";
    element.style.opacity = "0.5";
}

function small(element) {
    element.style.fontSize = "1.7vw";
    element.style.opacity = "0.95";
}

function load() {
    $(".main").animate({opacity: '1'}, "slow");
}