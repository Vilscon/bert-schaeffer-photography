// Google analytics code
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-46306881-2', 'auto');
ga('send', 'pageview');

// Tooltips above Social media
$('.social a').tipper({
  direction: "top"
});

// Disable right click on images
$('img').mousedown(function(e) {
  if (e.button == 2) { // right click
    return false; // do nothing!
  }
});

$(document).ready(function() {
  $('#intro .bertschaeffer').css('left', '50%').css('opacity', '1');
  setTimeout(function() {
    $('#intro .bertschaeffer').css('left', 'calc(100% + 300px)').css('opacity', '0');
  }, 1250);
});

$(document).ready(function() {

  $('#intro .photography').css('left', '50%').css('opacity', '1');
  setTimeout(function() {
    $('#intro .photography').css('left', 'calc(0% - 310px)').css('opacity', '0');
  }, 1250);
});

$(document).ready(function() {
  setTimeout(function() {
    $('#intro').css('opacity', '0');
  }, 1350);
});

$(document).ready(function() {
  setTimeout(function() {
    $('#intro').hide();
  }, 1550);
});

// Replace default menu with Photography menu
$(function() {
  $('.portfolioMenu').fadeOut();
  $('.navPhotographyItem').click(function(event) {
    event.preventDefault();
    $('.defMenu').fadeOut();
    $('.portfolioMenu').fadeIn();
  });
  $('#navDefault').click(function(event) {
    event.preventDefault();
    $('.defMenu').fadeIn();
    $('.portfolioMenu').fadeOut();
  });
});


// show or hide mobile navigation on menuButton click
$('#mobileNavButton').click(function(event) {
  event.preventDefault();
  if ($('.navItems').hasClass('show')) {
    $('.canvas .bgOverlay').css('opacity', '0');
    $('.navItems a').css('opacity', '0');
    setTimeout(function() {
      $('.navItems').removeClass('show').addClass('hidden');
      $('.canvas .bgOverlay').css('z-index', '-1');
    }, 550)

  } else if ($('.navItems').hasClass('hidden')) {
    $('.navItems').removeClass('hidden').addClass('show');
    $('.navItems a').css('opacity', '1');
    $('.canvas .bgOverlay').css('opacity', '0.7');
    $('.canvas .bgOverlay').css('z-index', '1');
  } else {
    alert('There is a problem');
  }
});

// Click BG to kill menu
$('.canvas .bgOverlay').click(function(event) {
  if ($('.navItems').hasClass('show')) {
    $('#mobileNavButton').trigger('click');
  } else {}
});

// Hide menu on background click when menu is open
$('.homepageImage').click(function(event) {
  if ($('.navItems').hasClass('show')) {
    event.preventDefault();
    $('#mobileNavButton').trigger('click');
  };
});

// Change, Add, Expand <a> on portfolio pages with neccesary tags
$(function() {
  $('.container a').each(function() {
    var $link = $(this),
      title = $link.attr('alt'),
      thumb = 'images/portfolio/thumbs/' + title + '.jpg';
    retinaThumb = 'images/portfolio/thumbs-retina/' + title + '.jpg';

    // regular tags
    $link.attr('data-target', 'flare');
    $link.attr('data-flare-scale', 'fitmax');
    $link.attr('data-flare-gallery', 'main');
    $link.addClass('item');
    $link.attr('href', 'images/portfolio/full/' + title + '.jpg');

    // Retina tags
    if (window.devicePixelRatio > 1) { // If the device has retina graphics
      $link.attr('data-flare-thumb', retinaThumb);
      $link.attr('href', 'images/portfolio/full-retina/' + title + '.jpg');
      $link.append($('<img>', {
        src: 'images/portfolio/thumbs-retina/' + title + '.jpg'
      }));
    } else { // If the device does not has retina graphics
      $link.attr('data-flare-thumb', thumb);
      $link.attr('href', 'images/portfolio/full/' + title + '.jpg');
      $link.append($('<img>', {
        src: 'images/portfolio/thumbs/' + title + '.jpg'
      }));
    }

  });
});

// Fadein Items
$(function() {
  $('.container a').each(function(index) {
    $(this).css('display', 'none');
    $(this).delay(100 * index).fadeTo(100, 1);
  });
});

// Fadein Items (Project pagina's)
$(function() {
  $('.projectContainer a').each(function(index) {
    $(this).css('display', 'none');
    $(this).delay(100 * index).fadeTo(100, 1);
  });
});


// Initiate Flare Plugin
jQuery(function($) {
  $('a[data-target="flare"]').peFlareLightbox();
});


$(function() {
  var $container = $('.container').packery({
    itemSelector: ".item",
    gutter: ".gutter-sizer",
    percentPosition: true
  });
  $container.imagesLoaded(function() {
    $container.packery();
  });
});


// JQUERY FOR MOBILE EDITS