<script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBw_nMxHxVysJbB4fzRzbiKjqlCwYXaCtU",
    authDomain: "saturdayactivity-7e6e1.firebaseapp.com",
    databaseURL: "https://saturdayactivity-7e6e1.firebaseio.com",
    projectId: "saturdayactivity-7e6e1",
    storageBucket: "saturdayactivity-7e6e1.appspot.com",
    messagingSenderId: "360890242926"
  };
  firebase.initializeApp(config);
</script>

$("#submit").on("click", function() {
  $("#employeeTable").last().append("<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
});
