function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
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