// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnYn7vvJil34MCc4H30vCG6cwFnImua-I",
    authDomain: "train-schedule-aafeb.firebaseapp.com",
    databaseURL: "https://train-schedule-aafeb.firebaseio.com",
    projectId: "train-schedule-aafeb",
    storageBucket: "train-schedule-aafeb.appspot.com",
    messagingSenderId: "117391197763"
  };
  firebase.initializeApp(config);

    // Add button train-schedule-aafeb
    $("add-train").on("click",function(event) {
      event.preventDefault();
      
      // Grabs the input
      var traName = $("train-name-input").val().trim();
      var traDestination = $("Destination-name-input").val().trim();
      var traFrequency = $("Frequency-name-input").val().trim();
      var trafirstTrain = $("FirstTrain-name-input").val().trim();
      // var traMinutes = $("Miniutes-name-input").val().trim();

       // Creates local "temporary" object for holding schedule data
       var NewSch = {
        name: traName,
        destination: traDestination,
        frequency: traFrequency,
        FirstTrain: trafirstTrain,
        // minutes: traMinutes, 
       };

      // Uploads employee data to the database
      database.push(NewSch);

      // Logs everything to console
      console.log(NewSch.name);
      console.log(NewSch.destination);
      console.log(NewSch.frequency);
      console.log(NewSch.FirstTrain);
      // console.log(NewSch.minutes);
      
      // alert
      alert("Train detail successfully added");

      // Clears all of the text-boxes
      $("#train-name-input").val("");
      $("#Destination-name-input").val("");
      $("#Frequency-name-input").val("");
      $("#FirstTrain-name-input").val("");
      // $("#Miniutes-name-input").val("");

      return false;
    };

//Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var traName = childSnapshot.val().name;
  var traDestination = childSnapshot.val().destination;
  var traFrequency = childSnapshot.val().frequency;
  var trafirstTrain = childSnapshot.val().FirstTrain;
  // var traMinutes = childSnapshot.val().minutes;
  
  // Employee Info
  console.log(traName);
  console.log(traDestination);
  console.log(traFrequency);
  console.log(trafirstTrain);    
  // console.log(traMinutes);

var firstTimeConverted = moment(FirstTrain, "HH;mm").subract(1, "years");

var currentTime = moment();

var diffTime = moment().diff(moment(firstTimeConverted),"minutes");

var tRemainder = diffTime % frequency;

var tMinutesTillTrain = frequency - tRemainder;

var nextTrain = moment().add(tMinutesTillTrain,"minutes");
var nextTrainConvert = moment(nextTrain).format("hh:mm a");

$("#trainTable > tbody").append("<tr><td>" + traName + "</td><td>" + traDestination + "</td><td" + Every + traFrequency + minutes "</td><td>" + nextTrainConverted + "</td><td>" + tMinutesTillTrain + "</td></tr>");



