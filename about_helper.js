let back_arrow = document.getElementById("back_arrow")
let curr_song = document.getElementById("curr_song")
back_arrow.onclick = function(){
  
  location.href = "index.html";

}


fetch('https://flask-app-394017.el.r.appspot.com/')
    .then(response => response.text())
    .then(text => curr_song.innerHTML = text);

