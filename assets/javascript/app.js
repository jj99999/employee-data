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

var employee = {
	name: "",
	startDate: "",
	role: "",
	rate: "",
	dateAdded: firebase.database.ServerValue.TIMESTAMP
}

// Submit Button Click
$("#submitbtn").on("click", function() {

	// Code in the logic for storing and retrieving the most recent employee.
	employee.name = $("#employee-name").val().trim();
	employee.role = $("#employee-role").val().trim();
	employee.startDate = $("#start-date").val().trim();
	employee.rate = $("#monthly-rate").val().trim();

	console.log("employee: " + JSON.stringify(employee));
	
    // Save new value to Firebase
	database.ref().push(employee);

	// Don't refresh the page!
	return false;
});

database.ref().on("child_added", function(childSnapshot) {
	var employees = [];

	employees = childSnapshot.val();
	console.log(employees);
    console.log("len: " + employees.length);

	for (var i=0; i < employees.length; i++) {
		var row = $("<tr>");
		var colName = $("<td>").html(employees[i].name);
		console.log(employees[i].name);
		var colRole = $("<td>").html(employees[i].role);
		var colstartDate = $("<td>").html(employees[i].startDate);
		var colRate = $("<td>").html(employees[i].rate);
		row.append(colName).append(colRole).append(colstartDate).append(colRate);

		$("#employee-table").append(row);

	}
});



// databae.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
// $("namedisplay").html(snapshot.val().name;
// });



