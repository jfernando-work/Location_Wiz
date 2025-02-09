
var locations = [
  [ { lat: 5.57177500398597, lng: -0.203331122166479 }, {city: 'Accra'} ],
  [ { lat: 35.1101481521801, lng: -106.661148047953 }, {city: 'Albuquerque'} ],
  [ { lat: 40.6339370896046, lng: 14.60271096361 }, {city: 'Amalfi'} ],
  [ { lat: 39.9228497618449, lng: 32.8585621700913 }, {city: 'Ankara'} ],
  [ { lat: 39.2860392938043, lng: -76.6088750223302 }, {city: 'Baltimore'} ],
  [ { lat: 12.9735191186423, lng: 77.5493109318975 }, {city: 'Bangalore'} ],
  [ { lat: 52.4781106670031, lng: -1.89174519190738 }, {city: 'Birmingham'} ],
  [ { lat: 4.59840085609018, lng: -74.0764352393931 }, {city: 'Bogota'} ],
  [ { lat: 44.4934413577402, lng: 11.343685243722 }, {city: 'Bologna'} ],
  [ { lat: 42.3458768069297, lng: -71.0752538429464 }, {city: 'Boston'} ],
  [ { lat: -27.4637048143565, lng: 153.035820795937 }, {city: 'Brisbane'} ],
  [ { lat: 22.5411986103704, lng: 88.3441304914166 }, {city: 'Calcutta'} ],
  [ { lat: 18.7871476631194, lng: 98.9874533435836 }, {city: 'Chiang Mai'} ],
  [ { lat: -43.5297697620964, lng: 172.631368303377 }, {city: 'Christchurch'} ],
  [ { lat: 41.5089081798152, lng: -81.6944976140397 }, {city: 'Cleveland'} ],
  [ { lat: 14.7164168756954, lng: -17.4679542721288 }, {city: 'Dakar'} ],
  [ { lat: 14.7235185813501, lng: -17.4952085426196 }, {city: 'Dakkar'} ],
  [ { lat: -29.8469419454415, lng: 31.0371350113613 }, {city: 'Durban'} ],
  [ { lat: 51.2197808255689, lng: 6.76520313792053 }, {city: 'Düsseldorf'} ],
  [ { lat: 53.5376827382692, lng: -113.486167662184 }, {city: 'Edmonton'} ],
  [ { lat: 53.5500394176675, lng: 9.99306415602341 }, {city: 'Hamburg'} ],
  [ { lat: 29.7612907805185, lng: -95.3753783972773 }, {city: 'Houston'} ],
  [ { lat: 17.3616985820221, lng: 78.4743169533848 }, {city: 'Hyderabad'} ],
  [ { lat: 26.9875553196534, lng: 75.8548262507307 }, {city: 'Jaipur'} ],
  [ { lat: -26.2034363525234, lng: 28.0303341707043 }, {city: 'Johannesburg'} ],
  [ { lat: 24.8310047876047, lng: 67.0792028979184 }, {city: 'Karachi'} ],
  [ { lat: 27.7207036261814, lng: 85.3614782998802 }, {city: 'Kathmandu'} ],
  [ { lat: 50.0552874805003, lng: 19.9347130446952 }, {city: 'Krakow'} ],
  [ { lat: 3.13247128767546, lng: 101.689994524998 }, {city: 'Kuala Lumpur'} ],
  [ { lat: 31.5152120471226, lng: 74.3430593835017 }, {city: 'Lahore'} ],
  [ { lat: -12.0446707187487, lng: -77.0315294586777 }, {city: 'Lima'} ],
  [ { lat: 34.7468010748128, lng: -92.2898925042437 }, {city: 'Little Rock'} ],
  [ { lat: 45.7635848957339, lng: 4.83870159652714 }, {city: 'Lyon'} ],
  [ { lat: 53.4743938078046, lng: -2.24815716187493 }, {city: 'Manchester'} ],
  [ { lat: 43.3003218333489, lng: 5.36437752541422 }, {city: 'Marseille'} ],
  [ { lat: 6.23972889320831, lng: -75.5773885534178 }, {city: 'Medellin'} ],
  [ { lat: 35.139180363729, lng: -90.0379746508926 }, {city: 'Memphis'} ],
  [ { lat: 43.0544804894845, lng: -87.9042846764178 }, {city: 'Milwaukee'} ],
  [ { lat: 25.6767965427108, lng: -100.312271115046 }, {city: 'Monterrey'} ],
  [ { lat: -34.9101932, lng: -56.17049 }, {city: 'Montevideo'} ],
  [ { lat: 35.1839646529783, lng: 136.899117049291 }, {city: 'Nagoya'} ],
  [ { lat: -1.2901107802693, lng: 36.8138880518596 }, {city: 'Nairobi'} ],
  [ { lat: -1.2891127, lng: 36.8276129 }, {city: 'Nairobi'} ],
  [ { lat: 17.0768391252586, lng: -96.7227937415374 }, {city: 'Oaxaca'} ],
  [ { lat: 34.6910307323117, lng: 135.522354610446 }, {city: 'Osaka'} ],
  [ { lat: 38.1155490464144, lng: 13.3611549998388 }, {city: 'Palermo'} ],
  [ { lat: -31.9693095339105, lng: 115.850928181769 }, {city: 'Perth'} ],
  [ { lat: 40.4446089426793, lng: -80.0093266279379 }, {city: 'Pittsburgh'} ],
  [ { lat: -30.047495986612, lng: -51.2318293035728 }, {city: 'Porto Alegre'} ],
  [ { lat: 18.5185852768192, lng: 73.8558463455717 }, {city: 'Pune'} ],
  [ { lat: 24.7289944834828, lng: 46.6659006897947 }, {city: 'Riyadh'} ],
  [ { lat: -33.4559949598483, lng: -70.668753840096 }, {city: 'Santiago'} ],
  [ { lat: 31.2386669753768, lng: 121.490862837983 }, {city: 'Shanghai'} ],
  [ { lat: 41.3104095553024, lng: 69.2825292182356 }, {city: 'Tashkent'} ],
  [ { lat: 43.6075408042664, lng: 1.44007805652916 }, {city: 'Toulouse'} ],
  [ { lat: 36.8061676203391, lng: 10.1618631582346 }, {city: 'Tunis'} ],
  [ { lat: 47.9017717692672, lng: 106.910293804341 }, {city: 'Ulaanbaatar'} ],
  [ { lat: 39.4751521283467, lng: -0.375376541346815 }, {city: 'Valencia'} ],
  [ { lat: 49.2953382897442, lng: -123.144868842922 }, {city: 'Vancouver'} ],
  [ { lat: 17.9776352204562, lng: 102.637205422815 }, {city: 'Vientiane'} ],
  [ { lat: -41.2942092, lng: 174.7731682 }, {city: 'Wellington'} ],
  [ { lat: -41.289722134088, lng: 174.780652283949 }, {city: 'Wellington'} ],
  [ { lat: -22.5677739959857, lng: 17.0867795953587 }, {city: 'Windhoek'} ]
]

curLocation = locations[Math.floor(Math.random()*(locations.length))]

curCoordinates = curLocation[0]
curCity = curLocation[1].city

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
  score = 200;
  document.getElementById("scoretext").value = score;
  document.getElementById("gameform").submit();
  event.preventDefault()
}

function decreaseScore() {
  score = -100;
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
        modalContent.textContent = "Sorry, you lose 100 points.";
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
