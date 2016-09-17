var config = {
   apiKey: "AIzaSyBfnyqE8RL6yU1kKv0S2g_IAjBCwl68eF8",
   authDomain: "employeesaturday.firebaseapp.com",
   databaseURL: "https://employeesaturday.firebaseio.com",
   storageBucket: "employeesaturday.appspot.com",
   messagingSenderId: "1059478718374"
 };
 firebase.initializeApp(config);

// Variable to reference the database
var database = firebase.database();


// Submit Button Click
$("#submitbtn").on("click", function() {

	// Code in the logic for storing and retrieving the most recent employee.
	var name = $("#employee-name").val().trim();
	var startDate = $("#start-date").val().trim();
	var role = $("#employee-role").val().trim();
	var rate = $("#monthly-rate").val().trim();

	var employee = {
		name: name,
		startDate: startDate,
		role: role,
		rate: rate
	}

	console.log(JSON.stringify(employee));
	
    // Save new value to Firebase
	database.ref().push(employee);

	// Don't refresh the page!
	return false;
});
