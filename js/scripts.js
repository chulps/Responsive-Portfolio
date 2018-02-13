// JavaScript Document
$(document).ready(function() {
  
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
  });
});