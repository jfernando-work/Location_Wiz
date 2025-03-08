
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
  [ { lat: -22.5677739959857, lng: 17.0867795953587 }, {city: 'Windhoek'} ],
  [ { lat: 47.49586619, lng: 19.0724897902086 }, {city: 'Budapest'} ],
  [ { lat: -22.91215851, lng: -43.2218758316063 }, {city: 'Rio de Janeiro'} ],
  [ { lat: 33.5775635980324, lng: 130.370264305013 }, {city: 'Fukuoka'} ],
  [ { lat: 34.99335591, lng: 135.756697847235 }, {city: 'Kyoto'} ],
  [ { lat: -7.257559862, lng: 112.760566717809 }, {city: 'Surabaya'} ],
  [ { lat: 32.7157, lng: -117.1611 }, {city: 'San Diego'} ],
  [ { lat: 40.4406, lng: -79.9959 }, {city: 'Pittsburgh'} ],
  [ { lat: -4.3080282697533, lng: 15.2663 }, {city: 'Kinshasa'} ],
  [ { lat: 12.9663042310792, lng: 77.5946 }, {city: 'Bangalore'} ],
  [ { lat: 35.6872777000348, lng: -105.9378 }, {city: 'Santa Fe'} ],
  [ { lat: 29.4241355828251, lng: -98.4936 }, {city: 'San Antonio'} ],
  [ { lat: 39.2895520230699, lng: -76.6122 }, {city: 'Baltimore'} ],
  [ { lat: 43.7102, lng: 7.262 }, {city: 'Nice'} ],
  [ { lat: 51.4527031335265, lng: -2.5879 }, {city: 'Bristol'} ],
  [ { lat: 51.2175422372107, lng: 4.4025 }, {city: 'Antwerp'} ],
  [ { lat: 60.391473978853, lng: 5.32415 }, {city: 'Bergen'} ],
  [ { lat: 51.2215559558799, lng: 6.7762 }, {city: 'Dusseldorf'} ],
  [ { lat: 60.1695, lng: 24.9354 }, {city: 'Helsinki'} ],
  [ { lat: 50.6302888698504, lng: 3.0573 }, {city: 'Lille'} ],
  [ { lat: 57.7024754010915, lng: 11.9746 }, {city: 'Gothenburg'} ],
  [ { lat: 43.2992785741524, lng: 5.3698 }, {city: 'Marseille'} ],
  [ { lat: 50.8198, lng: -1.0871 }, {city: 'Portsmouth'} ],
  [ { lat: 51.8988353659586, lng: -8.4756 }, {city: 'Cork'} ],
  [ { lat: 41.6488, lng: -0.8891 }, {city: 'Zaragoza'} ],
  [ { lat: 59.9141144106099, lng: 10.7522 }, {city: 'Oslo'} ],
  [ { lat: 55.8650849843139, lng: -4.2518 }, {city: 'Glasgow'} ],
  [ { lat: 45.7600075646986, lng: 4.8422 }, {city: 'Lyon'} ],
  [ { lat: 51.9222286837894, lng: 4.4792 }, {city: 'Rotterdam'} ],
  [ { lat: 44.83845424481, lng: -0.5792 }, {city: 'Bordeaux'} ],
  [ { lat: 49.2831338895321, lng: -123.1207 }, {city: 'Vancouver'} ],
  [ { lat: 41.1494480053135, lng: -8.611 }, {city: 'Porto'} ],
  [ { lat: 51.4526614157796, lng: -2.5879 }, {city: 'Bristol'} ],
  [ { lat: 56.4621896551267, lng: -2.9707 }, {city: 'Dundee'} ],
  [ { lat: 48.2091795080279, lng: 16.3738 }, {city: 'Vienna'} ],
  [ { lat: 50.0755, lng: 14.4378 }, {city: 'Prague'} ],
  [ { lat: 43.7706071753533, lng: 11.2558 }, {city: 'Florence'} ],
  [ { lat: 49.1963401607209, lng: 16.6068 }, {city: 'Brno'} ],
  [ { lat: 59.329086534137, lng: 18.0686 }, {city: 'Stockholm'} ],
  [ { lat: 59.9343, lng: 30.3351 }, {city: 'St Petersburg'} ],
  [ { lat: 54.3517702798367, lng: 18.6466 }, {city: 'Gdansk'} ],
  [ { lat: 43.6049636796021, lng: 1.4442 }, {city: 'Toulouse'} ],
  [ { lat: 53.4808575750877, lng: -2.2426 }, {city: 'Manchester'} ],
  [ { lat: 44.4941974251298, lng: 11.3387 }, {city: 'Bologna'} ],
  [ { lat: 56.0460625350217, lng: 12.6947 }, {city: 'Helsingborg'} ],
  [ { lat: 47.2685447578695, lng: 11.4041 }, {city: 'Innsbruck'} ],
  [ { lat: 53.8008, lng: -1.5491 }, {city: 'Leeds'} ],
  [ { lat: 36.8841, lng: 30.7056 }, {city: 'Antalya'} ],
  [ { lat: 51.1079, lng: 17.0385 }, {city: 'Wroclaw'} ],
  [ { lat: 44.1194, lng: 15.2313 }, {city: 'Zadar'} ],
  [ { lat: -36.8485121998848, lng: 174.7633 }, {city: 'Auckland'} ],
  [ { lat: 54.6871534622663, lng: 25.2798 }, {city: 'Vilnius'} ],
  [ { lat: 45.0703, lng: 7.6869 }, {city: 'Turin'} ],
  [ { lat: 43.8401958869765, lng: 18.3564 }, {city: 'Sarajevo'} ],
  [ { lat: 50.8508854799613, lng: 4.3517 }, {city: 'Brussels'} ],
  [ { lat: 39.2238, lng: 9.1217 }, {city: 'Cagliari'} ],
  [ { lat: 57.6997349475862, lng: 11.9746 }, {city: 'Gothenburg'} ],
  [ { lat: 42.6977, lng: 23.3219 }, {city: 'Sofia'} ],
  [ { lat: 44.8176774614933, lng: 20.4633 }, {city: 'Belgrade'} ],
  [ { lat: 60.3930482811791, lng: 5.32415 }, {city: 'Bergen'} ],
  [ { lat: 51.2465, lng: 22.5687 }, {city: 'Lublin'} ],
  [ { lat: 46.7709, lng: 23.5897 }, {city: 'Cluj-Napoca'} ],
  [ { lat: 36.835673665953, lng: -2.4637 }, {city: 'Almeria'} ],
  [ { lat: 42.4599760243118, lng: 14.2105 }, {city: 'Pescara'} ],
  [ { lat: 49.8405781471512, lng: 24.0297 }, {city: 'Lviv'} ],
  [ { lat: 42.8776845009934, lng: -8.5448 }, {city: 'Santiago de Compostela'} ],
  [ { lat: 39.2327806985865, lng: 9.1217 }, {city: 'Cagliari'} ],
  [ { lat: 39.4703758789394, lng: -0.3763 }, {city: 'Valencia'} ],
  [ { lat: 40.8522, lng: 14.2681 }, {city: 'Naples'} ],
  [ { lat: 50.3854344277151, lng: -4.1427 }, {city: 'Plymouth'} ],
  [ { lat: 56.9479557452423, lng: 24.1059 }, {city: 'Riga'} ],
  [ { lat: 51.2215521410262, lng: 6.7762 }, {city: 'Dusseldorf'} ],
  [ { lat: 50.0823235461959, lng: 8.2493 }, {city: 'Wiesbaden'} ],
  [ { lat: 41.3289904602864, lng: 19.8189 }, {city: 'Tirana'} ],
  [ { lat: 36.1406353506978, lng: -5.4593 }, {city: 'Algeciras'} ],
  [ { lat: 49.6100042837698, lng: 6.13 }, {city: 'Luxembourg City'} ],
  [ { lat: 43.7381216991166, lng: 7.4167 }, {city: 'Monaco'} ],
  [ { lat: 44.405952547307, lng: 8.9463 }, {city: 'Genoa'} ],
  [ { lat: 51.9240350340038, lng: 4.4792 }, {city: 'Rotterdam'} ],
  [ { lat: 43.5146904387565, lng: 16.4402 }, {city: 'Split'} ],
  [ { lat: 49.8388834835421, lng: 24.0297 }, {city: 'Lviv'} ],
  [ { lat: 55.6761, lng: 12.5683 }, {city: 'Copenhagen'} ],
  [ { lat: 22.5795151589641, lng: 114.0579 }, {city: 'Shenzhen'} ],
  [ { lat: 47.8089667641623, lng: 13.055 }, {city: 'Salzburg'} ],
  [ { lat: 51.1039968168915, lng: 17.0385 }, {city: 'Wroclaw'} ],
  [ { lat: 36.8368392044918, lng: -2.4637 }, {city: 'Almería'} ],
  [ { lat: 57.7824465323541, lng: 14.1562 }, {city: 'Jonkoping'} ],
  [ { lat: 50.775445401521, lng: 6.0839 }, {city: 'Aachen'} ],
  [ { lat: 51.0545157781403, lng: 3.7174 }, {city: 'Ghent'} ],
  [ { lat: 46.5543037476326, lng: 15.6459 }, {city: 'Maribor'} ],
  [ { lat: 47.2179481697913, lng: -1.5536 }, {city: 'Nantes'} ],
  [ { lat: 44.1170738817133, lng: 15.2313 }, {city: 'Zadar'} ],
  [ { lat: 42.4235899065775, lng: 18.7715 }, {city: 'Kotor'} ],
  [ { lat: 45.0707343132228, lng: 11.7925 }, {city: 'Rovigo'} ],
  [ { lat: 50.2307214884916, lng: 12.876 }, {city: 'Karlovy Vary'} ],
  [ { lat: 51.9003052035847, lng: -8.4756 }, {city: 'Cork'} ],
  [ { lat: 58.3762818127068, lng: 26.7285 }, {city: 'Tartu'} ],
  [ { lat: 51.7167404505111, lng: 8.7544 }, {city: 'Paderborn'} ],
  [ { lat: 55.6046567262471, lng: 13.0038 }, {city: 'Malmo'} ],
  [ { lat: 48.7587733332089, lng: 8.24 }, {city: 'Baden-Baden'} ],
  [ { lat: 54.6881576606137, lng: 25.2798 }, {city: 'Vilnius'} ],
  [ { lat: 45.2645099242961, lng: 19.8335 }, {city: 'Novi Sad'} ],
  [ { lat: 43.8556458230024, lng: 18.3564 }, {city: 'Sarajevo'} ],
  [ { lat: 50.057094851923, lng: 19.9447 }, {city: 'Krakow'} ],
  [ { lat: 41.6474290609832, lng: -0.8891 }, {city: 'Zaragoza'} ],
  [ { lat: 41.7045013254607, lng: 44.8271 }, {city: 'Tbilisi'} ],
  [ { lat: 49.8222275194478, lng: 19.0445 }, {city: 'Bielsko-Biała'} ],
  [ { lat: 44.4266697176928, lng: 26.1025 }, {city: 'Bucharest'} ],
  [ { lat: 47.3742771821819, lng: 8.5417 }, {city: 'Zurich'} ],
  [ { lat: 53.8719657495794, lng: 27.5667 }, {city: 'Minsk'} ],
  [ { lat: 51.9595134362969, lng: 7.6261 }, {city: 'Munster'} ],
  [ { lat: 46.7691216373669, lng: 23.5897 }, {city: 'Cluj-Napoca'} ],
  [ { lat: 46.0712824911288, lng: 18.2297 }, {city: 'Pecs'} ],
  [ { lat: 50.0624905023031, lng: 19.9447 }, {city: 'Krakow'} ],
  [ { lat: 46.0697788657797, lng: 18.2297 }, {city: 'Pecs'} ]
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
