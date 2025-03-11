var locations = [
  [ { lat: 24.4736151524367, lng: 54.6015447358361 }, {city: 'Abu Dhabi'} ],
  [ { lat: 31.2181876235367, lng: 29.9261655414436 }, {city: 'Alexandria'} ],
  [ { lat: 52.3729781128996, lng: 4.90191049691144 }, {city: 'Amsterdam'} ],
  [ { lat: 61.214343463232, lng: -149.899619373681 }, {city: 'Anchorage'} ],
  [ { lat: 51.2175209156664, lng: 4.42093264860353 }, {city: 'Antwerp'} ],
  [ { lat: 37.9691268237661, lng: 23.7258239713833 }, {city: 'Athens'} ],
  [ { lat: -36.8477567022597, lng: 174.762802118695 }, {city: 'Auckland'} ],
  [ { lat: 30.271805699678, lng: -97.7414265312301 }, {city: 'Austin'} ],
  [ { lat: 13.7488348240176, lng: 100.494106364139 }, {city: 'Bangkok'} ],
  [ { lat: 41.3962074761729, lng: 2.15966848250124 }, {city: 'Barcelona'} ],
  [ { lat: 52.5077434675598, lng: 13.390328572908 }, {city: 'Berlin'} ],
  [ { lat: 46.9497246197774, lng: 7.44801067611519 }, {city: 'Bern'} ],
  [ { lat: 42.3573064, lng: -71.0708829 }, {city: 'Boston'} ],
  [ { lat: -34.6090606179438, lng: -58.3721182135368 }, {city: 'Buenos Aires'} ],
  [ { lat: 35.1028504126539, lng: 129.03230405083 }, {city: 'Busan'} ],
  [ { lat: 29.9779079136515, lng: 31.1286781419407 }, {city: 'Cairo'} ],
  [ { lat: -33.9171336448059, lng: 18.41337760795964 }, {city: 'Cape Town'} ],
  [ { lat: 41.8795397690464, lng: -87.62443820446474 }, {city: 'Chicago'} ],
  [ { lat: 55.6797474390867, lng: 12.5914064543668 }, {city: 'Copenhagen'} ],
  [ { lat: 42.3424036619186, lng: -83.0572478526843 }, {city: 'Detroit'} ],
  [ { lat: 42.3287691, lng: -83.0436831 }, {city: 'Detroit'} ],
  [ { lat: 25.1988989873941, lng: 55.2719915980155 }, {city: 'Dubai'} ],
  [ { lat: 53.3425589321852, lng: -6.2682191635519 }, {city: 'Dublin'} ],
  [ { lat: 43.773783697977, lng: 11.2555122233653 }, {city: 'Florence'} ],
  [ { lat: 55.8634482925431, lng: -4.23687362616196 }, {city: 'Glasgow'} ],
  [ { lat: 57.68304725826, lng: 11.9514930732088 }, {city: 'Gothenburg'} ],
  [ { lat: 21.0277198910874, lng: 105.834213090402 }, {city: 'Hanoi'} ],
  [ { lat: 60.1708242179725, lng: 24.9500227628498 }, {city: 'Helsinki'} ],
  [ { lat: 10.7758356747189, lng: 106.700363869748 }, {city: 'Ho Chi Minh City'} ],
  [ { lat: 22.2947178372339, lng: 114.1706921186 }, {city: 'Hong Kong'} ],
  [ { lat: 21.256326601296, lng: -157.812652395463 }, {city: 'Honolulu'} ],
  [ { lat: 41.022001348546, lng: 28.9747391898826 }, {city: 'Istanbul'} ],
  [ { lat: -6.17042077343011, lng: 106.821981731523 }, {city: 'Jakarta'} ],
  [ { lat: 6.47358050073812, lng: 3.37070414890388 }, {city: 'Lagos'} ],
  [ { lat: 36.1126877639545, lng: -115.173018617661 }, {city: 'Las Vegas'} ],
  [ { lat: 51.4999463630917, lng: -0.14163903948736 }, {city: 'London'} ],
  [ { lat: 34.0471896636063, lng: -118.317590698343 }, {city: 'Los Angeles'} ],
  [ { lat: 40.4152377316852, lng: -3.69147052177375 }, {city: 'Madrid'} ],
  [ { lat: 14.5832501473033, lng: 120.976166561687 }, {city: 'Manila'} ],
  [ { lat: 30.3109933616295, lng: -104.021144908052 }, {city: 'Marfa'} ],
  [ { lat: -37.8182070891697, lng: 144.968673408222 }, {city: 'Melbourne'} ],
  [ { lat: 19.4253775200428, lng: -99.1888466378941 }, {city: 'Mexico City'} ],
  [ { lat: 25.7618396163754, lng: -80.1897543860783 }, {city: 'Miami'} ],
  [ { lat: 45.4669566207287, lng: 9.18936804627072 }, {city: 'Milan'} ],
  [ { lat: 45.503286707325, lng: -73.5831077589314 }, {city: 'Montreal'} ],
  [ { lat: 55.758548823557, lng: 37.6184020198002 }, {city: 'Moscow'} ],
  [ { lat: 18.9222196004957, lng: 72.8346731444165 }, {city: 'Mumbai'} ],
  [ { lat: 40.8490621868421, lng: 14.2657988939667 }, {city: 'Naples'} ],
  [ { lat: 28.6560032685727, lng: 77.2396640108821 }, {city: 'New Delhi'} ],
  [ { lat: 29.9560507118135, lng: -90.0679668436766 }, {city: 'New Orleans'} ],
  [ { lat: 40.7575376146069, lng: -73.98586859015818 }, {city: 'New York City'} ],
  [ { lat: 28.3746208526669, lng: -81.54969056853 }, {city: 'Orlando'} ],
  [ { lat: 59.9078470450221, lng: 10.739467589671 }, {city: 'Oslo'} ],
  [ { lat: 48.8468365739858, lng: 2.34613750769563 }, {city: 'Paris'} ],
  [ { lat: 41.1457662275068, lng: -8.61070855845407 }, {city: 'Porto'} ],
  [ { lat: 64.1484229882696, lng: -21.9365196880943 }, {city: 'Reykjavik'} ],
  [ { lat: -22.8955509588246, lng: -43.1799174495584 }, {city: 'Rio De Janeiro'} ],
  [ { lat: 41.891304591137, lng: 12.4913312847421 }, {city: 'Rome'} ],
  [ { lat: 37.8082409498105, lng: -122.471213887686 }, {city: 'San Francisco'} ],
  [ { lat: -23.5839400702123, lng: -46.6545285789314 }, {city: 'São Paulo'} ],
  [ { lat: 47.6088687173465, lng: -122.340071155258 }, {city: 'Seattle'} ],
  [ { lat: 37.5779277359535, lng: 126.973999932657 }, {city: 'Seoul'} ],
  [ { lat: 1.30285846702025, lng: 103.866176702113 }, {city: 'Singapore'} ],
  [ { lat: 59.9391303838662, lng: 30.3078119833031 }, {city: 'St Petersburg'} ],
  [ { lat: 59.3285802067025, lng: 18.0731026451657 }, {city: 'Stockholm'} ],
  [ { lat: -33.8492753190865, lng: 151.214939608557 }, {city: 'Sydney'} ],
  [ { lat: 35.7538849759323, lng: 51.3648535073173 }, {city: 'Tehran'} ],
  [ { lat: 32.0508724687411, lng: 34.7524789347853 }, {city: 'Tel Aviv'} ],
  [ { lat: 35.6599185794165, lng: 139.700715289957 }, {city: 'Tokyo'} ],
  [ { lat: 43.6436291759446, lng: -79.3904969075891 }, {city: 'Toronto'} ],
  [ { lat: 52.234387973622, lng: 21.0088901516599 }, {city: 'Warsaw'} ],
  [ { lat: -37.84299905, lng: 144.945566611862 }, {city: 'Melbourne'} ],
  [ { lat: 50.43399301, lng: 30.5160031250385 }, {city: 'Kiev'} ],
  [ { lat: 38.72006692, lng: -9.12977649551388 }, {city: 'Lisbon'} ],
  [ { lat: 55.67856447, lng: 12.5693381084451 }, {city: 'Copenhagen'} ],
  [ { lat: 33.5715235806756, lng: -7.5898 }, {city: 'Casablanca'} ],
  [ { lat: 29.9836486892204, lng: 31.1326 }, {city: 'Giza'} ],
  [ { lat: 19.076, lng: 72.8777 }, {city: 'Mumbai'} ],
  [ { lat: 28.6603163031155, lng: 77.209 }, {city: 'Delhi'} ],
  [ { lat: 49.2799708413901, lng: -123.1207 }, {city: 'Vancouver'} ],
  [ { lat: 45.5131001070885, lng: -122.675 }, {city: 'Portland'} ],
  [ { lat: 32.7773584795779, lng: -96.797 }, {city: 'Dallas'} ],
  [ { lat: 55.8637778207958, lng: -4.2518 }, {city: 'Glasgow'} ],
  [ { lat: 53.3490743368064, lng: -6.2603 }, {city: 'Dublin'} ],
  [ { lat: 50.8250415298181, lng: -0.1372 }, {city: 'Brighton'} ],
  [ { lat: 51.4810006387188, lng: -3.1791 }, {city: 'Cardiff'} ],
  [ { lat: 41.3787152314437, lng: 2.1926 }, {city: 'Barcelona'} ],
  [ { lat: 40.413532528894, lng: -3.7038 }, {city: 'Madrid'} ],
  [ { lat: 40.6773696564593, lng: -73.9442 }, {city: 'Brooklyn'} ],
  [ { lat: 34.0109218762776, lng: -118.2437 }, {city: 'Los Angeles'} ],
  [ { lat: 51.5077484059932, lng: -0.1278 }, {city: 'London'} ],
  [ { lat: 35.6761964934361, lng: 139.6503 }, {city: 'Tokyo'} ],
  [ { lat: 48.8569670375102, lng: 2.3522 }, {city: 'Paris'} ],
  [ { lat: 31.2327905617698, lng: 121.4737 }, {city: 'Shanghai'} ],
  [ { lat: -33.8690676297313, lng: 151.2093 }, {city: 'Sydney'} ],
  [ { lat: 55.7569530886318, lng: 37.6173 }, {city: 'Moscow'} ],
  [ { lat: 19.076, lng: 72.8777 }, {city: 'Mumbai'} ],
  [ { lat: 52.52, lng: 13.405 }, {city: 'Berlin'} ],
  [ { lat: -23.5525161818337, lng: -46.6333 }, {city: 'Sao Paulo'} ],
  [ { lat: 19.430099441725, lng: -99.1332 }, {city: 'Mexico City'} ],
  [ { lat: 30.0415936599529, lng: 31.2357 }, {city: 'Cairo'} ],
  [ { lat: 41.9016026673217, lng: 12.4964 }, {city: 'Rome'} ],
  [ { lat: 41.0080157847585, lng: 28.9784 }, {city: 'Istanbul'} ],
  [ { lat: 13.7547523568274, lng: 100.5018 }, {city: 'Bangkok'} ],
  [ { lat: 22.5743474815092, lng: 88.3639 }, {city: 'Kolkata'} ],
  [ { lat: -34.6037305844086, lng: -58.3816 }, {city: 'Buenos Aires'} ],
  [ { lat: 24.8607, lng: 67.0011 }, {city: 'Karachi'} ],
  [ { lat: 6.52423556899813, lng: 3.3792 }, {city: 'Lagos'} ],
  [ { lat: 37.5666368439719, lng: 126.978 }, {city: 'Seoul'} ],
  [ { lat: -6.2088, lng: 106.8456 }, {city: 'Jakarta'} ],
  [ { lat: 23.8103, lng: 90.4125 }, {city: 'Dhaka'} ],
  [ { lat: 3.13861433813893, lng: 101.6869 }, {city: 'Kuala Lumpur'} ],
  [ { lat: -12.0464, lng: -77.0428 }, {city: 'Lima'} ],
  [ { lat: 31.5497, lng: 74.3436 }, {city: 'Lahore'} ],
  [ { lat: 22.3194647599951, lng: 114.1694 }, {city: 'Hong Kong'} ],
  [ { lat: -6.1965768328641, lng: 106.8456 }, {city: 'Jakarta'} ],
  [ { lat: 12.9711830308819, lng: 77.5946 }, {city: 'Bangalore'} ],
  [ { lat: -22.9068, lng: -43.1729 }, {city: 'Rio de Janeiro'} ],
  [ { lat: 13.0827, lng: 80.2707 }, {city: 'Chennai'} ],
  [ { lat: 35.6878883645755, lng: 51.389 }, {city: 'Tehran'} ],
  [ { lat: -22.9068, lng: -43.1729 }, {city: 'Rio de Janeiro'} ],
  [ { lat: 37.7751042770923, lng: -122.4194 }, {city: 'San Francisco'} ],
  [ { lat: -33.9260420792614, lng: 18.4241 }, {city: 'Cape Town'} ],
  [ { lat: 43.664314468284, lng: -79.347015 }, {city: 'Toronto'} ],
  [ { lat: 25.2759561453341, lng: 55.296249 }, {city: 'Dubai'} ],
  [ { lat: -6.2088, lng: 106.8456 }, {city: 'Jakarta'} ],
  [ { lat: 40.4166113352473, lng: -3.7038 }, {city: 'Madrid'} ],
  [ { lat: 41.878154453613, lng: -87.6298 }, {city: 'Chicago'} ],
  [ { lat: 52.52, lng: 13.405 }, {city: 'Berlin'} ],
  [ { lat: 41.3784555017645, lng: 2.1926 }, {city: 'Barcelona'} ],
  [ { lat: 1.30339773681428, lng: 103.8198 }, {city: 'Singapore'} ],
  [ { lat: 48.2075795259687, lng: 16.3738 }, {city: 'Vienna'} ],
  [ { lat: 40.4148265983344, lng: -3.7038 }, {city: 'Madrid'} ],
  [ { lat: -6.2088, lng: 106.8456 }, {city: 'Jakarta'} ],
  [ { lat: 30.0423541486286, lng: 31.2357 }, {city: 'Cairo'} ],
  [ { lat: 28.6122232641569, lng: 77.209 }, {city: 'New Delhi'} ],
  [ { lat: -37.8148902174556, lng: 144.9631 }, {city: 'Melbourne'} ],
  [ { lat: -33.4484077623257, lng: -70.6693 }, {city: 'Santiago'} ]
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