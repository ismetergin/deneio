document.addEventListener("DOMContentLoaded", function() {
  var popups = document.querySelectorAll('.popup');
  var closeButtons = document.querySelectorAll('.close');
  
  // Open popup
  document.getElementById('misyonBtn').onclick = function() {
    document.getElementById('misyonPopup').style.display = 'block';
  };
  document.getElementById('vizyonBtn').onclick = function() {
    document.getElementById('vizyonPopup').style.display = 'block';
  };
  document.getElementById('kaliteBtn').onclick = function() {
    document.getElementById('kalitePopup').style.display = 'block';
  };

  // Close popup
  closeButtons.forEach(function(btn) {
    btn.onclick = function() {
      popups.forEach(function(popup) {
        popup.style.display = 'none';
      });
    };
  });

  // Close on window click
  window.onclick = function(event) {
    popups.forEach(function(popup) {
      if (event.target == popup) {
        popup.style.display = 'none';
      }
    });
  };
});
