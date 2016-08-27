var $home = $('#home');
var $provisions = $('#pro');
var pro = 10;
var $provisionsBtn = $('#provisionsBtn');
var $playerHealth = $('#playerHealth');
var $playerGold = $('#playerGold');
var $playerArmor = $('#playerArmor');
var maxHealth = 100;
var health = getPlayerHealth();
var armor = 300;
var gold = getPlayerGold();
$playerHealth.text(health + 'HP');
$playerGold.text(gold + 'Gold');
$playerArmor.text(armor + 'Armor');

$home.click(function() {
  window.location.href='../html/home.html';
});

$provisionsBtn.click(function() {
  var health = getPlayerHealth();
  setPlayerMaxHealth(maxHealth);
  var gold = getPlayerGold();
  var newAmount = gold - pro;
  setPlayerGold(newAmount);
  $playerHealth.text(health + 'HP');
  $playerGold.text(gold + 'Gold');
  $playerArmor.text(armor + 'Armor');
  console.log('it worked');
});
