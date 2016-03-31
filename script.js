var xmlhttp = new XMLHttpRequest();
var urlLinkinPark = "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz";
var urlRush = "https://api.spotify.com/v1/artists/2Hkut4rAAyrQxRdof7FVJq";
var urlShaniaTwain = "https://api.spotify.com/v1/artists/5e4Dhzv426EvQe3aDb64jL";
var urlKanyeWest = "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x";
var urlBeethoven = "https://api.spotify.com/v1/artists/2wOqMjp9TyABvtHdOSOTUS";

document.getElementById("btnLinkinPark").addEventListener("click", function(){
	xmlhttp.abort();
	xmlhttp.open("GET", urlLinkinPark, true);
	xmlhttp.send();	
});

document.getElementById("btnRush").addEventListener("click", function(){
	xmlhttp.abort();
	xmlhttp.open("GET", urlRush, true);
	xmlhttp.send();	
});

document.getElementById("btnShaniaTwain").addEventListener("click", function(){
	xmlhttp.abort();
	xmlhttp.open("GET", urlShaniaTwain, true);
	xmlhttp.send();	
});

document.getElementById("btnKanyeWest").addEventListener("click", function(){
	xmlhttp.abort();
	xmlhttp.open("GET", urlKanyeWest, true);
	xmlhttp.send();	
});

document.getElementById("btnBeethoven").addEventListener("click", function(){
	xmlhttp.abort();
	xmlhttp.open("GET", urlBeethoven, true);
	xmlhttp.send();	
});

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var artist = JSON.parse(xmlhttp.responseText);       
		document.getElementById("artistName").innerHTML = artist.name;
		document.getElementById("artistGenre").innerHTML = artist.genres[0];
		document.getElementById("artistPop").innerHTML = artist.popularity;
		document.getElementById("artistFollowers").innerHTML = artist.followers.total;
		document.getElementById("artistImage").innerHTML = '<img src="' + artist.images[0].url + '" style="width:100%;height:auto;">';
	}
};

function formatTable(){
	var rows = document.getElementsByTagName("tr");
	for(var i = 0; i < rows.length; i = i + 2){
		rows[i].style.background = "#8c8c8c";
	}
}

window.addEventListener("load", formatTable, false);