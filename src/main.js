$(document).ready(function () {
    console.log('sanity');

    $('form').on('submit', function(event) {
      event.preventDefault();

      // console.log($('#lastName').val());


      var firstName = $('#firstName').val();
      var numValidLetters = 3;

      if (firstName.length <= numValidLetters) {
        var message = 'Your name is too short!. Get a new one!'
        // set the callout text
        $('.valid-callout > h2').text(message)
        // make the whole callout visible
        $('.valid-callout').css('visibility', 'visible')
        // after 2 seconds, hide the error message
        setTimeout(hideCallout, 2000)
      }

      var email = $('#email').val()
// make sure @
      var message = '';
      if ( email.indexOf('@' < 0 ) ) { message += 'Make sure '; }
      if ( )


      if (email.indexOf('@') < 0) {
        console.log(email);
        var message = 'Make sure to include a "@"!'
        $('.valid-callout > h2').text(message)
        $('.valid-callout').css('visibility', 'visible')
        setTimeout(hideCallout, 2000)
      } else if (email.indexOf('@') + 1 === email.lastIndexOf('.')) {
        var message = 'Please Input Something before the "." and after the "@"'
        $('.valid-callout > h2').text(message);
        $('.valid-callout').css('visibility', 'visible')
        setTimeout(hideCallout, 2000)
      }

      var lastName = $('#lastName').val();
      var lastNameMin = 5
      // console.log($('#lastName').val());

      if (lastName.length <= lastNameMin || lastName[0].toUpperCase() !== lastName[0]) {
        var message = 'Make sure your last name is At least 5 characters, and it is Capitalized'
        $('.valid-callout > h2').text(message)
        $('.valid-callout').css('visibility', 'visible')
        setTimeout(hideCallout, 2000)
      }

    })
  })

  function hideCallout () {
    $('.valid-callout').css('visibility', 'hidden')
  }
