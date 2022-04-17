
// Load the navbar.html file anytime there is a div mounted to the DOM with the id navbar
$('#navbar').load('navbar.html');

// Load the footer.html file anytime there is a div mounted to the DOM with the id footer
$('#footer').load('footer.html');

// MQTT URI
const MQTT_URL = 'http://localhost:5001/send-command';

// API URI
const API_URL = 'http://localhost:5002/api';

// Gets the item devices from URI and iterate over the array devices and create a new row in the table for each object
$.get(`${API_URL}/sacks`)
  .then(response => {
    response.forEach(sack => {
      $('#sacks tbody').append(`
    <tr>
      <td>${sack.uid}</td>
      <td>${sack.entry_date}</td>
      <td>${sack.expiration_date}</td>
      <td>${sack.location}</td>
      <td>${sack.weight}</td>
      <td>${sack.moisture}</td>
      <td>${sack.cost}</td>
      <td>${sack.floor_location}</td>
    </tr>`
      );
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

// Add a new sack to the list of sacks on button click
$('#add-sack').on('click', () => {
  const uid = $('#uid').val();
  const entry_date = $('#entry_date').val();
  const expiration_date = $('#expiration_date').val();
  const location = $('#location').val();
  const weight = $('#weight').val();
  const moisture = $('#moisture').val();
  const cost = $('#cost').val();
  const floor_location = $('#floor_location').val();
  const sensorData = [];

  const body = {
    uid,
    entry_date,
    expiration_date,
    location,
    weight,
    moisture,
    cost,
    floor_location,
    sensorData
  };

  $.post(`${API_URL}/sacks`, body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

// Add a new command on click and send it to mqtt broker
$('#send-command').on('click', function () {
  const uid = $('#UID').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { uid, command })
    .then(response => {
      location.href = '/';
    })
});


