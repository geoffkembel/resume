// Resume.js

// START
$(document).ready(function(){

// hide all sections
$("section").css("display", "none");

// section nav list
var sectionNavList = $(document.createElement('ul'));

// for each section
$('section').each(function(index) {
  // save section element to be used later
  var section = $(this);
  // get the title from its h1
  var title = $(this).find('h1').text();
  // build a list item for the section nav
  var listItem = $(document.createElement('li'));
  listItem.text(title);
  // add click event to each list item
  listItem.click(function() {
    // hide all sections
    $("section").css("display", "none");
    // show only this section
    $(section).css("display", "block");
    // clear active classes
    $(this).siblings().removeClass('active');
    // add this active class
    $(this).addClass('active');
  });
  // append to list item to list
  sectionNavList.append(listItem);
});

// prepend nav list to content
$('#content').prepend(sectionNavList);

// END
});
