const firebaseConfig = {
    apiKey: "AIzaSyAfUx8B6pNd1gbYXwobhW8cxAuyfJx6Tns",
    authDomain: "joshua-5a8fd.firebaseapp.com",
    databaseURL: "https://joshua-5a8fd-default-rtdb.firebaseio.com",
    projectId: "joshua-5a8fd",
    storageBucket: "joshua-5a8fd.appspot.com",
    messagingSenderId: "148593298758",
    appId: "1:148593298758:web:e8695e6535fc192b2ca947",
    measurementId: "G-BSHHXNVVF6"
  };

    firebase.initializeApp(firebaseConfig);
    
    // Get a reference to the database service
    var database = firebase.database();
    
    // Get a reference to the table
    var table = document.getElementById('table');
    
    // Function to fetch all data from Firebase and display it in the table
    function fetchData() {
      var ref = database.ref('users');
      ref.on('value', function(snapshot) {
        // Clear the table first
        table.innerHTML = '<thead><tr><th>First Name</th><th>Last Name</th><th>Username</th><th>Password</th><th>Favorite Subject</th></tr></thead><tbody>';
    
        // Loop through the data and add each row to the table
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          table.innerHTML += '<tr><td>' + childData.firstname + '</td><td>' + childData.lastname + '</td><td>' + childData.username + '</td><td>' + childData.password + '</td><td>' + childData.favourite_subject + '</td></tr>';
        });
    
        // Close the table body
        table.innerHTML += '</tbody>';
      });
    }
    
    // Call the fetchData function to display the data when the page loads
    fetchData();