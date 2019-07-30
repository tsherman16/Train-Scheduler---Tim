var firebaseConfig = {
    apiKey: "AIzaSyBpgn1RCuzh3R7uxFnZ_8x-g72Ckx26GNY",
    authDomain: "train-app-5df2c.firebaseapp.com",
    databaseURL: "https://train-app-5df2c.firebaseio.com",
    projectId: "train-app-5df2c",
    storageBucket: "",
    messagingSenderId: "57730229378",
    appId: "1:57730229378:web:761d64a85f2bf893"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#input-name").val().trim();
    var trainDestination = $("#input-destination").val().trim();
    var trainFrequency = $("#input-frequency").val().trim();
    var trainTime = $("#input-trainTime").val().trim();

    var newRow = {
        name: trainName,
        destination: trainDestination,
        frequency: trainFrequency,
        time: trainTime
    };
    database.ref().push(newRow);

    alert("Train successfully added");

    $("#input-name").val("");
    $("#input-destination").val("");
    $("#input-frequency").val("");
    $("#input-trainTime").val("");
});

database.ref().on("child_added", function(Snapshot) {


});