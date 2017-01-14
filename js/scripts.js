$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var question1Answer =$("input:radio[name=group1]:checked").val();
    var question2Answer =$("input:radio[name=group2]:checked").val();
    var question3Answer =$("input:radio[name=group3]:checked").val();
    var question4Answer =$("input:radio[name=group4]:checked").val();
    var question5Answer =$("input:radio[name=group5]:checked").val();



      if(question1Answer===developer || question1Answer===skill || question1Answer===startup){
        console.log($("#results.option1.option2").show());
        else if(question1Answer===fun) {
          console.log($("#results.option3").show());
        }
        if(question2Answer===game|| question2Answer===web || question2Answer===mobile){
          console.log($("#results.option1 .option2").show());
          else if (question2Answer===desktop){
            console.log($("#results.option4").show());
          }
        if(question3Answer ===userinterface){
          console.log($("#results.option3").show());
        }else{
          console.log($("#results.option1").show());
        }
        if(question4Answer === freelance || question4Answer ===startup){
          console.log($("#results.option2").show());
        }
        else if(question4Answer === enterprise){
          console.log($("#results.option3").show());
        }else {
          console.log($("#results.option4").show());
        }
        if (question5Answer===job){
          console.log($("#results.option3").show());
        }else {
          console.log($("#results.option1").show());
        }

        }


        }

    });




    $("button#quiz").click(function() {

    $("button.question2").hide();
    $("button.question3").hide();
    $("button.question4").hide();
    $("button.question5").hide();
  });

  $("button#quiz").click(function() {
    $("button.question1").hide();
    $("button.question3").hide();
    $("button.question4").hide();
    $("button.question5").hide();

  });

  $("button#quiz").click(function() {
    $("button.question1").hide();
    $("button.question2").hide();
    $("button.question4").hide();
    $("button.question5").hide();;
  });

    $("button#quiz").click(function() {
      $("button.question1").hide();
      $("button.question2").hide();
      $("button.question3").hide();
      $("button.question5").hide();
    });

      $("button#quiz").click(function() {
        $("button.question1").hide();
        $("button.question2").hide();
        $("button.question3").hide();
        $("button.question4").hide();
      });
