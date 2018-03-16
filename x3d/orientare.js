window.addEventListener("deviceorientation", on_device_orientation);




function on_device_orientation(e){
  document.getElementById("id_orientation").innerHTML=e.alpha.toFixed(2) + " " + e.beta.toFixed(2) + " "+ e.gamma.toFixed(2);
}