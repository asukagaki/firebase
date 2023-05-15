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
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    
     // Set database variable
     var database = firebase.database()
     
     function save() {
       var firstname = document.getElementById('firstname').value
       var lastname = document.getElementById('lastname').value
       var username = document.getElementById('username').value
       var password = document.getElementById('password').value
       var favourite_subject = document.getElementById('favourite_subject').value
     
       database.ref('users/' + username).set({
         firstname : firstname,
         lastname : lastname,
         username : username,
         password : password,
         favourite_subject : favourite_subject
       })
     
       alert('Your Account was Successfully Saved')
     }
     
     function get() {
       var username = document.getElementById('username').value
     
       var user_ref = database.ref('users/' + username)
       user_ref.on('value', function(snapshot) {
         var data = snapshot.val()
     
         alert(data.email)
     
       })
     
     }
     
     function update() {
       var firstname = document.getElementById('firstname').value;
       var lastname = document.getElementById('lastname').value;
       var username = document.getElementById('username').value;
       var password = document.getElementById('password').value;
       var favourite_subject = document.getElementById('favourite_subject').value;
     
       if (username === '') {
         // Show an error message to the user if the username field is null
         alert('Please enter a username.');
         return;
       }
     
       // Get a reference to the user data in Firebase
       var userRef = database.ref('users/' + username);
     
       // Check if the user exists in Firebase
       userRef.once('value', function(snapshot) {
         if (snapshot.exists()) {
           // The user exists, so update the user's data in Firebase
           var updates = {
             firstname: firstname,
             lastname: lastname,
             username: username,
             password: password,
             favourite_subject: favourite_subject
           };
           userRef.update(updates);
     
           // Show a success message to the user
           alert('Your account was successfully updated.');
         } else {
           // The user does not exist, so show an error message to the user
           alert('The account with the specified username does not exist.');
         }
       });
     }
     
     function remove() {
       var username = document.getElementById('username').value;
       var password = document.getElementById('password').value;
     
       // Get a reference to the user data in Firebase
       var userRef = database.ref('users/' + username);
     
       // Retrieve the user's password from Firebase
       userRef.child('password').once('value', function(snapshot) {
         var actualPassword = snapshot.val();
     
         // Check if the user exists in Firebase and if the password is correct
         if (actualPassword && actualPassword === password) {
           // The user exists and the password is correct, so delete the user's data from Firebase
           userRef.remove();
     
           // Show a success message to the user
           alert('Your account was successfully deleted.');
         } else {
           // The user does not exist or the password is incorrect, so show an error message to the user
           alert('The account with the specified username and password does not exist.');
         }
       });
     }
     
     function displayTable() {
       window.location.href = "./app.html";
     }