document.getElementById("id_business_level").innerHTML = "Business version = 2018.03.23.0";
var stare={y:0,directie:1};
setInterval(deseneaza,30,stare);
var y = 0;
var directie = 1;
function deseneaza(x)
{
	var t = document.getElementById("id_transform");
	t.setAttribute("translation","0 " + x.y + " ");
	x.y += x.directie;
	if (x.y > 10)
		x.directie = -1;
	else
		if (x.y < 0)
			x.directie = 1
	
}