$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();


    var question1Answer =parseInt($("input:radio[name=group1]:checked").val());
    var question2Answer =parseInt($("input:radio[name=group2]:checked").val());
    var question3Answer =parseInt($("input:radio[name=group3]:checked").val());
    var question4Answer =parseInt($("input:radio[name=group4]:checked").val());
    var question5Answer =parseInt($("input:radio[name=group5]:checked").val());

    var trackTotal = question1Answer+ question2Answer + question3Answer + question4Answer + question5Answer;
    
    if(trackTotal>=5 && trackTotal <= 8){
      $(".html").show();
    }
    else if (trackTotal>=8 && trackTotal <= 10) {
      $(".java").show();
    }
    else if (trackTotal>=11 && trackTotal <= 13) {
      $(".php").show();
    }
    else if (trackTotal>=14 && trackTotal <= 16) {
      $(".csharp").show();
    }

  }
)
});
