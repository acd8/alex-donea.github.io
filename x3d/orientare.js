window.addEventListener("deviceorientation", on_device_orientation);




function on_device_orientation(e){
  document.getElementById("id_orientation").innerHTML=e.alpha.toFixed(1) + " " + e.beta.toFixed(1) + " "+ e.gamma.toFixed(1);
}