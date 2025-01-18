window.onload = function() {
  var disclaimerPopup = document.getElementById("disclaimerPopup");

  // Check if the disclaimer has been agreed upon
  var agreed = sessionStorage.getItem("disclaimerAgreed");

  if (!agreed) {
    // Show the popup if not agreed
    disclaimerPopup.style.display = "block";

    // Close the popup and set the flag when the close button is clicked
    var closeButton = document.querySelector(".agree-button");
    closeButton.addEventListener("click", function() {
      disclaimerPopup.style.display = "none";
      sessionStorage.setItem("disclaimerAgreed", "true");
    });
  }
};

  document.getElementById('disagree-btn').addEventListener('click', function() {
    // Redirect to Google when the user doesn't agree
    window.location.href = 'https://www.google.com';
  });

  


//  script for navbar 
function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}
// The logo will also get vanished
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}  


// js for Practice areas
function showContent(id) {
    // Hide all content divs
    document.querySelectorAll('.content').forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the selected content
    document.getElementById('content' + id).style.display = 'block';
}

function closeContent(id) {
    // Hide the selected content
    document.getElementById('content' + id).style.display = 'none';
}
