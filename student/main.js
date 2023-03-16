     firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
document.getElementById("ps-2 username").innerHTML = "Welcome " + user_name + "!";
