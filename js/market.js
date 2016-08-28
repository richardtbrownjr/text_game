var pro = 10;
var incHealth = 100;

var $home = $('#home');
var $provisions = $('#pro');
var $healthBtn = $('#healthBtn');
var $provisionsBtn = $('#provisionsBtn');
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
  $healthBtn.attr('disabled', gold < incHealth);
  $provisionsBtn.attr('disabled', health >= maxHealth || gold < pro);
}

updateDisplay();

$home.click(function() {
  window.location.href = '../html/home.html';
});

$provisionsBtn.click(function() {
  var gold = getPlayerGold();
  var maxHealth = getPlayerMaxHealth();
  setPlayerHealth(maxHealth);
  var newAmount = gold - pro;
  setPlayerGold(newAmount);
  updateDisplay();
});

$healthBtn.click(function() {
  var gold = getPlayerGold();
  var maxHealth = getPlayerMaxHealth() + 10;
  setPlayerHealth(maxHealth);
  setPlayerMaxHealth(maxHealth);
  var newAmount = gold - incHealth;
  setPlayerGold(newAmount);
  updateDisplay();
});
