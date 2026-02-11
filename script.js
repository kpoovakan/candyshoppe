window.onload = loadButtons

function loadButtons() {
	document.getElementById("output").innerHTML = `<button onclick="play()" class="main-button">PLAY NOW</button>`
}

function play() {
	document.getElementById("output").innerHTML = `<iframe width="700px" height="395" src="https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1" title="muahahahahaha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
}