(function() {

  var countDownDate = new Date("Mar 11, 2018 00:00:00").getTime();

  var dayElement = document.getElementById('days');
  var hourElement = document.getElementById('hours');
  var minuteElement = document.getElementById('minutes');
  var secondElement = document.getElementById('seconds');

  var x = setInterval(function() {
    
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements 
    dayElement.textContent = days
    hourElement.textContent = hours
    minuteElement.textContent = minutes
    secondElement.textContent = seconds

    // If the count down is finished, write some text 
    // if (distance < 0) {
    //   clearInterval(x);
    //             element.textContent =  "EXPIRED";
    // }
  }, 1000);

})();