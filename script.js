function shortTerm(){
  document.getElementById("intromsg").style.display = "none";
  document.getElementById("shortTerm").style.display = "block";
  document.getElementById("longTerm").style.display = "none";
}

function longTerm(){
  document.getElementById("intromsg").style.display = "none";
  document.getElementById("shortTerm").style.display = "none";
  document.getElementById("longTerm").style.display = "block";
}

function personalVids(){
  document.getElementById("videomsg").style.display = "none";
  document.getElementById("favorite-vids").style.display = "none";
  document.getElementById("music").style.display = "none";
  document.getElementById("personal-vids").style.display = "block";
}

function favoriteVids(){
  document.getElementById("videomsg").style.display = "none";
  document.getElementById("favorite-vids").style.display = "block";
  document.getElementById("music").style.display = "none";
  document.getElementById("personal-vids").style.display = "none";
}

function jumpToMusic(){
  document.getElementById("videomsg").style.display = "none";
  document.getElementById("favorite-vids").style.display = "none";
  document.getElementById("music").style.display = "block";
  document.getElementById("personal-vids").style.display = "none";
}

function changeAccent(){
  var colors = ["#ffd359", "#a442f5", "#f54242"];
  var banners = ["images/Bottom_Banner_Upper.png","images/Bottom_Banner_Upper2.png","images/Bottom_Banner_Upper3.png"];
  var randIndex = Math.floor(Math.random()*3); //returns an index 0-2

  document.getElementById("active").style.backgroundColor = colors[randIndex];
  document.getElementById("bottom-banner").style.backgroundColor = colors[randIndex];
  document.getElementById("bottom-banner-img").src = banners[randIndex];
}
