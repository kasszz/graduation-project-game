import Utils from '../../classes/utils.js';
import Canvas from '../../classes/canvas.js';
import GameController from '../../classes/game-controller.js';
import Player from '../../classes/player.js';
import Coin from '../../classes/coin.js';

(() => {
  window.utils = new Utils();
  const socket = io.connect('http://localhost:8000');
  const canvas = new Canvas(document.getElementById('game'));
  let gc;
  let player;
  let lastFrameTime;
  const html = {
    score: document.querySelector('.score'),
    scoreMultiplier: document.querySelector('.multiplier')
  }

  function startGame() {
    lastFrameTime = new Date().getTime();

    gc = new GameController(canvas);
    player = gc.spawnGO(new Player({
      canvas,
      gc,
      GOIndex: gc.gameObjects.length,
      tag: 'player'
    }));

    window.addEventListener('keydown', onKeyDown, false);
    window.addEventListener('keyup', onKeyUp, false);

    spawnNewCoin();

    requestAnimationFrame(gameLoop);
  }

  function gameLoop() {
    timeLoop();
    updateLoop();
    drawLoop();

    checkSpawnTimer();

    lastFrameTime = new Date().getTime();

    requestAnimationFrame(gameLoop);
  }

  function timeLoop() {
    const currentFrameTime = new Date().getTime();
    const delta = (currentFrameTime - lastFrameTime);
    canvas.delta = delta * 0.001;
    gc.spawnTimer += delta;
  }

  function updateLoop() {
    gc.gameObjects.forEach(go => {
      if(go.update) {
        go.update();
      }
    });
  }

  function drawLoop() {
    canvas.ctx.clearRect(0, 0, canvas.dimentions.width, canvas.dimentions.height);

    gc.gameObjects.forEach(go => {
      if(go.draw) {
        go.draw();
      }
    });

    drawUI();
  }

  function checkSpawnTimer() {
    if(gc.spawnTimer >= gc.spawnInterval && gc.spawnForcast.rounds.length > gc.spawnRound) {
      gc.spawnTimer = 0;
      gc.spawnInterval = gc.spawnForcast.rounds[gc.spawnRound];
      gc.spawnRound ++;
      spawnNewCoin();
    }
  }

  function spawnNewCoin() {
    const line = calculateLine();

    if(line === gc.coinLastSpawned.line) {
      gc.coinLastSpawned.amount ++
    } else {
      gc.coinLastSpawned.line = line;
      gc.coinLastSpawned.amount = 1;
    }

    gc.spawnGO(new Coin({
      canvas,
      gc,
      GOIndex: gc.gameObjects.length,
      lineIndex: line,
      tag: 'coin'
    }));

    gc.spawnCoins ++;
  }

  function calculateLine() {
    const randomArray = [];
    const percentage = Math.round(100 / gc.lineAmount);
    const penalty = (gc.coinLastSpawned.penalty * gc.coinLastSpawned.amount);
    const activeLineDebuff = Math.round(percentage / penalty);
    const remainingLines = [];
    let remainingSpaces = 100;
    let spacePerRemainingLine = 100;

    for(let i = 0; i < activeLineDebuff; i ++) {
      randomArray.push(gc.coinLastSpawned.line);
    }

    for(let i = 1; i <= gc.lineAmount; i ++) {
      if(i !== gc.coinLastSpawned.line) {
        remainingLines.push(i);
      }
    }

    remainingSpaces -= randomArray.length;

    spacePerRemainingLine = remainingSpaces / (gc.lineAmount - 1);

    remainingLines.forEach(line => {
      for(let i = 0; i < spacePerRemainingLine; i ++) {
        randomArray.push(line);
      }
    });

    return randomArray[utils.getRandomInt(0, randomArray.length)];
  }

  function drawUI() {
    html.score.innerHTML = Math.round(gc.score);
    html.scoreMultiplier.innerHTML = Math.round(gc.comboAmount * 100) / 100;
  }

  function onKeyDown(event) {
    if(event.keyCode === 65 && !gc.keysPressed.a) {
      gc.keysPressed.a = true;
    }

    if(event.keyCode === 83 && !gc.keysPressed.s) {
      gc.keysPressed.s = true;
    }

    if(event.keyCode === 68 && !gc.keysPressed.d) {
      gc.keysPressed.d = true;
    }
  }

  function onKeyUp(event) {
    if(event.keyCode === 65) {
      gc.keysPressed.a = false;
    }

    if(event.keyCode === 83) {
      gc.keysPressed.s = false;
    }

    if(event.keyCode === 68) {
      gc.keysPressed.d = false;
    }
  }

  startGame();

})();
