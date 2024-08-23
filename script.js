function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
    }
  }    




// Add this to your script.js for image in gallery pop up
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
const iconButton = document.querySelector(".iconbutton");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  iconButton.style.display = "block";
} else {
  iconButton.style.display = "none";
}
}

// scripts.js
function openModal(imageSrc) {
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var caption = document.getElementById("caption");
modal.style.display = "block";
modalImg.src = imageSrc;
caption.innerHTML = "Some descriptive text here"; // Optionally, you can set a caption
}

function closeModal() {
var modal = document.getElementById("imageModal");
modal.style.display = "none";
}

