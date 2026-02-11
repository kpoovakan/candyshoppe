window.onload = loadButtons

function loadButtons() {
	document.getElementById("output").innerHTML = `<button onclick="play()" class="main-button">PLAY NOW</button>`
}

function play() {
	document.getElementById("output").innerHTML = `<div class="main-picture"><iframe width="700px" height="395" src="https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1&modestbranding=1&controls=0&rel=0&loop=1"
	title="muahahahahaha" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`

}


