// Toggle between hiding and showing blog replies/comments
$(document).ready(function(){
  $(".myBtn").click(function(){
    $(".demo1").toggle();
  });
});

// after click to like button
function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "✓ Liked";
}

// Message alert after click
document.getElementById("like-btn").addEventListener("click",function() {
	alert("Thanks for liking our content!");
});

