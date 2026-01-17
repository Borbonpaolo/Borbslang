// Initialize map
var map = L.map('map').setView([25.276987, 55.296249], 13); // Example: Dubai coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Example: current user marker
var currentUserMarker = L.marker([25.276987, 55.296249]).addTo(map)
  .bindPopup("You are here")
  .openPopup();

// Users array
var users = [];

// DOM Elements
var addUserBtn = document.getElementById("addUserBtn");
var usernameInput = document.getElementById("username");
var userList = document.getElementById("userList");

// Function to add user
addUserBtn.addEventListener("click", function() {
  var name = usernameInput.value.trim();
  if(name) {
    var randomLat = 25.276987 + (Math.random() - 0.5) * 0.05; // Random nearby location
    var randomLng = 55.296249 + (Math.random() - 0.5) * 0.05;

    // Add marker on map
    var marker = L.marker([randomLat, randomLng]).addTo(map)
      .bindPopup(name);

    // Add user to array
    users.push({name: name, marker: marker});

    // Add user to list
    var li = document.createElement("li");
    li.textContent = name;
    userList.appendChild(li);

    usernameInput.value = "";
  }
});
