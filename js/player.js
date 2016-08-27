function getPlayerHealth(){
  return localStorage.hasOwnProperty('playerHealth') ?
    parseInt(localStorage.getItem('playerHealth')) : 100;
}

function setPLayerHealth(health){
  localStorage.setItem('playerHealth', health);
}
