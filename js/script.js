//
// // This is called with the results from from FB.getLoginStatus().
//   function statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//     // The response object is returned with a status field that lets the
//     // app know the current login status of the person.
//     // Full docs on the response object can be found in the documentation
//     // for FB.getLoginStatus().
//     if (response.status === 'connected') {
//       // Logged into your app and Facebook.
//       testAPI();
//     } else if (response.status === 'not_authorized') {
//       // The person is logged into Facebook, but not your app.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into this app.';
//     } else {
//       // The person is not logged into Facebook, so we're not sure if
//       // they are logged into this app or not.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into Facebook.';
//     }
//   }
//
//   // This function is called when someone finishes with the Login
//   // Button.  See the onlogin handler attached to it in the sample
//   // code below.
//   function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//   }
//
//   window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '{your-app-id}',
//     cookie     : true,  // enable cookies to allow the server to access
//                         // the session
//     xfbml      : true,  // parse social plugins on this page
//     version    : 'v2.2' // use version 2.2
//   });
//
//   // Now that we've initialized the JavaScript SDK, we call
//   // FB.getLoginStatus().  This function gets the state of the
//   // person visiting this page and can return one of three states to
//   // the callback you provide.  They can be:
//   //
//   // 1. Logged into your app ('connected')
//   // 2. Logged into Facebook, but not your app ('not_authorized')
//   // 3. Not logged into Facebook and can't tell if they are logged into
//   //    your app or not.
//   //
//   // These three cases are handled in the callback function.
//
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
//
//   };
//
//   // Load the SDK asynchronously
//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));
//
//   // Here we run a very simple test of the Graph API after login is
//   // successful.  See statusChangeCallback() for when this call is made.
//   function testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//       document.getElementById('status').innerHTML =
//         'Thanks for logging in, ' + response.name + '!';
//     });
//   }

  // manual control to select an item
  $(".item").click(function(){

    // Hide the currently shown image
    $(".video:not(.hide)").addClass("hide");

    // Remove the item selected
    $(".selected").removeClass("selected");

    var prevItemNumber = $(this).prevAll(".item").length;
    $(".video:eq("+prevItemNumber+")").removeClass("hide");

    $(this).addClass("selected");

  });

  // function in charge to launch the automatic image slider
  // it returns the interval variable we need to stop the automatic slider
  function launchCarousel(){
    var interval = setInterval(function(){
      // this function is executed every N seconds

      // figure what's the current item shown
      var currentItem = $(".selected").prevAll(".item").length;
      var nextItem    = currentItem + 1;

      // hide the currently not hidden image
      $(".video:not(.hide)").addClass("hide");
      // unselect the currently "selected" bullet point
      $(".selected").removeClass("selected");

      // manage the case we reach the extremity (the 3rd item in this version)
      if(nextItem===$(".item").length){
        nextItem = 0;


      }

      // show the next item via removing the "hide" class
      $(".video:eq("+nextItem+")").removeClass("hide");
      // add the "selected" onto the right bullet point
      $(".item:eq("+nextItem+")").addClass("selected");

    }, 3000); //delay is 3sec (3000 milliseconds)

    return interval;
  }

  var carouselInterval = launchCarousel();
  $("#carousel-play").hide();

  $("#carousel-pause").click(function(){
    // check carouselInterval is defined (might not be when carousel already paused)
    if( carouselInterval ){
      clearInterval(carouselInterval);
      carouselInterval = undefined;
      $(this).hide();
      $("#carousel-play").show();
    }
  });

  $("#carousel-play").click(function(){
    carouselInterval = launchCarousel();
    $(this).hide();
    $("#carousel-pause").show();
  });


//   var video1 = document.getElementById'1');
//
// video.addEventListener('click',function(){
//     video.play();
// },false);

//   $(document).ready(function(){
//   $('.contents').slick({
//     setting-name: setting-value
//   });
// });
