
const { Client } = require('pg');

const client = new Client({
  user: 'mapgame_wif2_user',
  host: 'dpg-cv56u1btq21c73f1v2f0-a.ohio-postgres.render.com',
  database: 'mapgame_wif2',
  password: process.env.LOCATION_KEY,
  port: 5432, // Default PostgreSQL port
});

client.connect();

async function fetchData() {
  try {
    const result = await client.query('SELECT lat, lng, city FROM locations'); // Modify as needed
    const dataArray = result.rows; // Extract data as an array of objects
    console.log(dataArray);
    return dataArray;
  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    client.end(); // Close connection
  }
}

// Call the function
fetchData();

const locations = dataArray;
curLocation = locations[Math.floor(Math.random()*(locations.length))]

// Extract lat, lng, and city
const curCoordinates = { lat: curLocation.lat, lng: curLocation.lng };
const curCity = curLocation.city;

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

function increaseScore() {
  score = 100;
  document.getElementById("scoretext").value = score;
  document.getElementById("gameform").submit();
  event.preventDefault()
}

function decreaseScore() {
  score = -50;
  document.getElementById("scoretext").value = score;
  document.getElementById("gameform").submit();
  event.preventDefault()
}

function resetForm() {
  document.getElementById("guess").value = "";
  event.preventDefault()
}

function guesscity() {
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
