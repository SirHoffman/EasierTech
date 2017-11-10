function clickBombilla() {
	if($.cookie("css") == "off"){
		$('link[title="css"]').attr("href", "css/style.css");
		document.getElementById('bombilla').src="img/bombilla-amarilla-icono.png";
		$.cookie("css", "on", {expires: 365, path: '/'});
	}else{
		$('link[title="css"]').attr("href", "css/style2.css");
		document.getElementById('bombilla').src="img/bombilla-icono.png";
		$.cookie("css", "off", {expires: 365, path: '/'});
	}
}

$(document).ready(function(){
	if ($.cookie("css") == "off"){
		$('link[title="css"]').attr("href", "css/style2.css");
		document.getElementById('bombilla').src="img/bombilla-icono.png";
	}else{
		$('link[title="css"]').attr("href", "css/style.css");
		document.getElementById('bombilla').src="img/bombilla-amarilla-icono.png";
	}
});