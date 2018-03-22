var x = null;
var ValorCelda = $('#body').html();

$("#boton").click(function(){
  console.log("funcionando ");
  if (x === null) {
    $.ajax({
      url: "index.html",
      complete: funcion(agregarnodo)

    })
  }
})

// $(document).ready(function() {
//  $('#newslinks a').click(function() {
//  var url=$(this).attr('href');
//  $('#headlines').load(url + ' #newsItem');
//  return false;
//  }); //end click
// });
