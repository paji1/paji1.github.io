
var i = 0;
var tab = ["wasahbi wahdarna empty makadozch", "wakbar", "chrab 7lib", "nari chgal lih"];
function reset() {
	var x = document.getElementById("demo");
	var y = document.getElementById("myText").value;
	if (y === "")
		x.innerHTML = tab[i++ % 4];
	else
	{
		x.innerHTML = "safi rah tfa " + y ;
		fetch("http://45.32.235.105:5000/logger_end?id="+y).then(function(response) {
			console.log(response);
		});
	}
	setTimeout(hi,2000);
}
function hi() {
	var x = document.getElementById("demo");
	x.innerHTML = "tfih tani ?";
}

