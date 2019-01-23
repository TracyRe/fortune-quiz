$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var total = 0;
    $("input:checkbox[name=lucky]:checked").each(function(){
        var fortuneCount = parseInt($(this).val());
        total += fortuneCount;
      });
      $("input:checkbox[name=unlucky]:checked").each(function(){
            var fortuneCount2 = parseInt($(this).val());
            total += fortuneCount2;
      });
          $("input:checkbox[name=random]:checked").each(function(){
              var fortuneCount3 = parseInt($(this).val());
              total += fortuneCount3;
      });
  console.log(total);



  $(.output).show(total);
  });

});
