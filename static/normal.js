
let locations = [];
let usedCities = new Set();
let curLocation, curCity, curCoordinates;

fetch('/normal_locations')
    .then(response => response.json())
    .then(data => {
        locations = data;

        if (usedCities.size === locations.length) {
          usedCities.clear();
        }

        // Filter out used cities
        let remainingCities = locations.filter(location => !usedCities.has(location.id));
        if (remainingCities.length === 0) return;

        // Now you can use the locations array as before
        curLocation = remainingCities[Math.floor(Math.random() * remainingCities.length)];
        usedCities.add(curLocation.id);
        curCoordinates = { lat: curLocation.lat, lng: curLocation.lng };
        curCity = curLocation.city;
        initialize(); // Initialize Street View after data is loaded
    })
    .catch(error => console.error('Error fetching locations:', error));


let score = 0;
var failCounter = 0;

function openModal() {
  var closeButton = document.getElementById("closeModal");
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  closeButton.focus();
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function increaseScore(event) {
  score = 100;
  document.getElementById("scoretext").value = score;
  document.getElementById("gameform").submit();
  event.preventDefault()
}

function decreaseScore(event) {
  score = -50;
  document.getElementById("scoretext").value = score;
  document.getElementById("gameform").submit();
  event.preventDefault()
}

function resetForm(event) {
  document.getElementById("guess").value = "";
  event.preventDefault()
}

function guesscity(event) {
  guess = document.getElementById("guess").value;
  closeModalButton = document.getElementById("closeModal");

  if (guess.toLowerCase() == curCity.toLowerCase()) {
      modalContent.textContent = "Correct!";
      openModal();

      closeModalButton.addEventListener('click', () => {
        increaseScore();
        resetForm();
      });
    }
    else {
      if (failCounter < 3) {
        modalContent.textContent = "Wrong. Try again.";
        openModal();

        closeModalButton.addEventListener('click', () => {
          failCounter++;
          resetForm();
        });
      }
      else {
        modalContent.textContent = "Sorry, you lose 50 points.";
        openModal();

        closeModalButton.addEventListener('click', () => {
          decreaseScore();
          resetForm();
        });
      }
    }
    event.preventDefault()
  }

function initialize() {

  if (locations.length === 0) return; // Ensure locations are loaded before initializing Street View

    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
            position: curCoordinates,
            pov: {
                heading: 34,
                pitch: 10,
            },
            panControl: false,
            addressControl: false,
            showRoadLabels: false,
            fullscreenControl: false,
        },
    );
    map.setStreetView(panorama);
}

window.initialize = initialize;
