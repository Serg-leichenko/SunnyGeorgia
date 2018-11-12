  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1,
      max: 4000,
      values: [ 1, 3000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] );
        $( "#amount_1" ).val(ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_1" ).val($( "#slider-range" ).slider( "values", 1 ) );
  } );


$(document).ready(function(){
  $("#way").click(function () {
    if ($("#direction").is(":hidden")) {
      $("#direction").show("slow");
    } 
    else {
      $("#direction").hide("slow");
    }
 return false;
  });
});


$(document).ready(function(){
  $("#search").click(function () {
    if ($("#advanced-search").is(":hidden")) {
      $("#advanced-search").show("slow");
    } 
    else {
      $("#advanced-search").hide("slow");
    }
 return false;
  });
});