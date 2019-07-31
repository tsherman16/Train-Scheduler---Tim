var firebaseConfig = {
    apiKey: "AIzaSyBpgn1RCuzh3R7uxFnZ_8x-g72Ckx26GNY",
    authDomain: "train-app-5df2c.firebaseapp.com",
    databaseURL: "https://train-app-5df2c.firebaseio.com",
    projectId: "train-app-5df2c",
    storageBucket: "",
    messagingSenderId: "57730229378",
    appId: "1:57730229378:web:761d64a85f2bf893"
  };
  
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#input-name").val().trim();
    var trainDestination = $("#input-destination").val().trim();
    var trainFrequency = $("#input-frequency").val().trim();
    var trainTime = $("#input-trainTime").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        frequency: trainFrequency,
        time: trainTime
    };
    database.ref().push(newTrain);

    alert("Train successfully added");

    $("#input-name").val("");
    $("#input-destination").val("");
    $("#input-frequency").val("");
    $("#input-trainTime").val("");
});

database.ref().on("child_added", function (snapshot) {
    var trainName = snapshot.val().name;
    var trainDestination = snapshot.val().destination;
    var trainFrequency = snapshot.val().frequency;
    var trainTime = snapshot.val().trainTime;

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFrequency),
        $("<td>").text(trainTime)
    );

    $("#train-table > tbody").append(newRow);
});