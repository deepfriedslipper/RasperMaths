(function () {
  emailjs.init("J8CQCB7T4S4uuM1fvhzwJ");
})();

function sendFeedback() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  emailjs.send('service_c67ak8d', 'template_gnbh9of', templateParams, "4gwABKq5tF4ak8sdh")
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });

  return false;
}