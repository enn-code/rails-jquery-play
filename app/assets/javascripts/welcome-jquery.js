$(document).ready(function(){
  $('p').append('<p class = "list">This is an extra comment</p>' +
   '<p class = "list">Click to remove comments!</p>');
  $('p.list').click(function(){
    $(this).remove();
  })
})