var sword = 400;
var Larmor = 200;
var Marmor = 300;
var Parmor = 400;
var $sword = $('#sword');
var $armor1 = $('#armor1');
var $armor2 = $('#armor2');
var $armor3 = $('#armor3');
var $adventure = $('#adventure');
var $home = $('#home');
var $playerHealth = $('#playerHealth');
var $playerGold = $('#playerGold');
var $playerArmor = $('#playerArmor');

function updateDisplay() {
  var health = getPlayerHealth();
  var maxHealth = getPlayerMaxHealth();
  var armor = getPlayerArmor();
  var gold = getPlayerGold();
  $playerHealth.text(health + ' HP');
  $playerGold.text(gold + ' Gold');
  $playerArmor.text(armor + ' Armor');
  $sword.attr('disabled', gold < sword);
  $armor1.attr('disabled', gold < Larmor || armor >= Larmor);
  $armor2.attr('disabled', gold < Marmor || armor >= Marmor);
  $armor3.attr('disabled', gold < Parmor || armor >= Parmor);
}

updateDisplay();

$adventure.click(function() {
  window.location.href='../html/adventure.html';
});

$home.click(function() {
  window.location.href='../html/home.html';
});

$armor1.click(function() {
  var gold = getPlayerGold();
  var armor = getPlayerArmor();
  setPlayerArmor(Larmor);
  var newAmount = gold - Larmor;
  setPlayerGold(newAmount);
  updateDisplay();
});

$armor2.click(function() {
  var gold = getPlayerGold();
  var armor = getPlayerArmor();
  setPlayerArmor(Marmor);
  var newAmount = gold - Marmor;
  setPlayerGold(newAmount);
  updateDisplay();
});

$armor3.click(function() {
  var gold = getPlayerGold();
  var armor = getPlayerArmor();
  setPlayerArmor(Parmor);
  var newAmount = gold - Parmor;
  setPlayerGold(newAmount);
  updateDisplay();
});
