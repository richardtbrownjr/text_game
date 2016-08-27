var $village = $('#village');
var $adventure = $('#adventure');
var $home = $('#home');
var health = 100;
var armor = 300;
var gold = 100;


$village.click(function() {
  window.location.href='../html/village.html';
});

$adventure.click(function() {
  window.location.href='../html/adventure.html';
});


$home.click(function() {
  window.location.href='../html/stay.html';
});
