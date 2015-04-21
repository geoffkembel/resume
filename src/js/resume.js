// Resume.js

$(document).ready(function(){

// for each image link
$('main a[href$=gif], main a[href$=jpg], main a[href$=png]').each(function() {

  // remove target=new
  $(this).removeAttr('target');

  // on click, load in aside
  $(this).click(function() {

    // remove image from aside if exists
    $('aside').empty();

    // add new image to aside
    var img = $(document.createElement('img'));
    img.attr('src', $(this).attr('href'));
    img.attr('title', 'Click to close');
    $('aside').append(img);

    // add click event to close/remove img
    img.click(function() {
      $(this).remove();
    });

    // cancel normal link behavior
    return false;
  });
});

});
