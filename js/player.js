function getPlayerHealth(){
  return localStorage.hasOwnProperty('playerHealth') ?
    parseInt(localStorage.getItem('playerHealth')) : 100;
}

function setPlayerHealth(health){
  localStorage.setItem('playerHealth', health);
}

function getPlayerMaxHealth(){
  return localStorage.hasOwnProperty('playerMaxHealth') ?
    parseInt(localStorage.getItem('playerMaxHealth')) : 100;
}

function setPlayerMaxHealth(maxHealth){
  localStorage.setItem('playerMaxHealth', maxHealth);
}

function getPlayerGold(){
  return localStorage.hasOwnProperty('playerGold') ?
    parseInt(localStorage.getItem('playerGold')) : 20;
}

function setPlayerGold(newAmount){
  localStorage.setItem('playerGold', newAmount);
}

function getPlayerArmor(){
  return localStorage.hasOwnProperty('playerArmor') ?
    parseInt(localStorage.getItem('playerArmor')) : 0;
}

function setPlayerArmor(newAmount){
  localStorage.setItem('playerArmor', newAmount);
}
