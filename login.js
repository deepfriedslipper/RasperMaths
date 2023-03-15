function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    console.log("Profile")
    console.log(profile)

      // get user profile as an ID Token, or JWT Token
      console.log(googleUser.getAuthResponse().id_token)
    $.ajax({
      type: 'POST',
      url: 'wherever we go next',
      data: { id_token: id_token },
      success: function(response) {
        // Handle the response from your server
        console.log(response);
      },
      error: function(xhr, status, error) {
        // Handle the error
        console.error(error);
      }
    });
  }
  var auth2 = undefined;
    function onLibraryLoaded() {
      gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          scope: 'profile'
        })

        // when page first loads, user is not signed in
        console.log('user is signed in: ', isUserSignedIn());

        // Method 2: sign in handler hooked up by the library
        console.log('click handler')
        auth2.attachClickHandler(document.getElementById('button2'), {}, function(googleUser) {
          console.log('click handler callback')
          document.querySelector('#name').innerText = JSON.stringify(googleUser)
        })

        // listen for changes in user or signIn status
        auth2.isSignedIn.listen(function(isSignedIn) {
          console.log('change in sign in status ', isSignedIn)
          if(isSignedIn) {
            document.querySelector('#signout').style.display = 'block';
          } else {
            document.querySelector('#signout').style.display = 'none';
          }
          
        })
      })

      gapi.load('signin2', function() {
        // Method 3: render a sign in button
        // using this method will show Signed In if the user is already signed in
        var opts = {
          width: 200,
          height: 50,
          onSuccess: function(googleUser) {
            console.log('signin2 success')
            document.querySelector('#name').innerText = JSON.stringify(googleUser);
          }
        }
        gapi.signin2.render('button3', opts)
      })
    }


    // Method 1: sign in handler hooked up yourself
    function onSignInClicked() {
      // using global variable
      auth2.signIn().then(function(result) {
        console.log('sign in successful')
        document.querySelector('#name').innerText = JSON.stringify(result)
      }, function(err) {
        console.log('this is an error')
      })
    }

    function isUserSignedIn() {
      // user is signed in if you click the button since the lib has been loaded already
      var isSignedIn = auth2.isSignedIn.get();
      document.querySelector('#name').innerText = isSignedIn;
      return isSignedIn
    }

    // get the current users info
    function showCurrentUserInfo() {
      var googleUser = auth2.currentUser.get()
      document.querySelector('#name').innerText = JSON.stringify(googleUser)
    }

    function signOut() {
      auth2.signOut().then(function() {
        console.log('user signed out')
        document.querySelector('#name').innerText = 'user signed out'
      })
    }
  
    
