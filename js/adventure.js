var $dragon = $('#dragon');
var $crusade = $('#crusade');
var $treasure = $('#treasure');
var $playerHealth = $('#playerHealth');
var $playerGold = $('#playerGold');
var $playerArmor = $('#playerArmor');
var maxHealth = 100;
var health = 10;
var armor = 300;
var gold = 100;

$playerHealth.text(health + 'HP');
$playerGold.text(gold + 'Gold');
$playerArmor.text(armor + 'Armor');

$dragon.click(function() {
  window.location.href='../html/dragon.html';
});

$crusade.click(function() {
  window.location.href='../html/crusade.html';
});


$treasure.click(function() {
  window.location.href='../html/treasure.html';
});
