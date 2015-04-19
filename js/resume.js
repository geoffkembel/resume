// Resume.js

// START

$(document).ready(function(){

/* SECTION NAV */

// hide ALL sections
$("section").hide();

// init
var sectionNav = $(document.createElement('nav')); // dynamic header nav
var sectionNavList = $(document.createElement('ul')); // unordered list
var sectionLevel = 1; // nested section level

// build nav for each top level section; recurses through nested sections as well
$('#content > section').each(function() {
  addSectionToNav.call(this, sectionNavList, sectionLevel);
});

// prepend nav list to content
sectionNav.append(sectionNavList);
$('#content').prepend(sectionNav);

/* IMAGES */

// for each image link
$('#content a[href$=gif], #content a[href$=jpg], #content a[href$=png]').each(function() {

  // remove target=new
  $(this).removeAttr('target');

  // on click, load in aside
  $(this).click(function() {

    // remove image from aside if exists
    $('aside').empty();

    // add new image to aside
    var img = $(document.createElement('img'));
    img.attr('src', $(this).attr('href'));
    $('aside').append(img);

    // cancel normal link behavior
    return false;
  });
});

/* FUNCTIONS */

// add section to nav
function addSectionToNav(navList, navLevel) {

  // save section element to be used later
  var section = $(this);

  // get the title from custom data, or default to the appropriate header text
  var titleFromData = section.attr('data-title');
  var titleFromHeader = section.find('h' + navLevel).text();
  var title = (titleFromData) ? titleFromData : titleFromHeader;

  // build a list item for the section nav
  var listItem = $(document.createElement('li'));
  listItem.text(title);

  // add click event to each list item
  listItem.click(function() {

    // hide/deactivate all relatives
    section.parents('#content').find('section').hide();
    $(this).parents('nav').find('li').removeClass('active');

    // show/activate all ancestor sections
    section.parents('section').show();
    $(this).parents('li').addClass('active');

    // show/activate self
    section.show();
    $(this).addClass('active');

    // hide/show subnav
    $(this).parents('nav').find('ul ul').hide(); // hide all nested nav
    $(this).parent('ul').show(); // show my nav level
    $(this).children('ul').show(); // show one level of sub nav if exists

    // remove image from aside if exists
    $('aside').empty();

    // prevent event propogation
    return false;
  });

  // if there are nested sections
  var nestedSections = $(this).find('section');
  if (nestedSections.length) {

    // hide current header to force them to click a sub nav item
    section.find('h' + navLevel).hide();

    // increment level
    navLevel++;

    // build a nested nav list
    var sectionNavSub = $(document.createElement('ul'));

    // for each nested section
    $(nestedSections).each(function() {
      addSectionToNav.call($(this), sectionNavSub, navLevel);
    });

    // add sub to list item
    listItem.append(sectionNavSub);
  }

  // append to list item to list
  navList.append(listItem);
}

// END
});
