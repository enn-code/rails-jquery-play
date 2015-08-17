$(document).ready(function(){
  

  $('p').append('<p class = "list">This is an extra comment</p>' +
   '<p class = "list">Click to remove comments!</p>'+
   '<p class = "list">Hello Darshan</p>' +
   '<p class = "list">Hello Izabela, how are you today? I like trains!</p>');
  

  $('p.list').click(function(){
    $(this).remove();
  });


  //$('.menu-link').bigSlide();


});