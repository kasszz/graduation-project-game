import Utils from '../../classes/utils.js';
import Canvas from '../../classes/canvas.js';
import GameController from '../../classes/game-controller.js';
import Player from '../../classes/player.js';
import Coin from '../../classes/coin.js';

(() => {
  window.utils = new Utils();
  const socket = io.connect('http://192.168.3.243:8000');
  const canvas = new Canvas(document.getElementById('game'));
  const decisionTimerLength = 5000;

  const voice = {
    lang: 'Dutch Female',
    pitch: 0.9,
    rate: 1
  }

  let gc;
  let player;
  let lastFrameTime;
  let messages;
  let decisionTimer;

  socket.on('messageStrings', strings => {
    messages = strings;
  });

  socket.on('start', () => {
    responsiveVoice.speak(messages.welcome, voice.lang, {pitch: voice.pitch, rate: voice.rate, onend: makeDecisionTime});
  });

  socket.on('buttonPressed', which => {
    if(player) {
      player.setMove(which - 1);
    } else if(decisionTimer) {
      responsiveVoice.speak(messages.instruction, voice.lang, {pitch: voice.pitch, rate: voice.rate, onend: () => {
        startGame();
      }});
      clearTimeout(decisionTimer);
      decisionTimer = null;
    }
  });

  socket.on('gameOver', string => {
    responsiveVoice.speak(string.gameOver, voice.lang, {pitch: voice.pitch, rate: voice.rate});
    endGame();
  });

  function makeDecisionTime() {
    decisionTimer = window.setTimeout(() => {
      dontWantToPlayGame();
    }, decisionTimerLength);
  }

  function dontWantToPlayGame() {
    responsiveVoice.speak(messages.dontWantToPlay, voice.lang, {pitch: voice.pitch, rate: voice.rate});
    socket.emit('dontWantToPlay');
    endGame();
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

    spawnNewCoin();

    requestAnimationFrame(gameLoop);
  }

  function endGame() {
    canvas.ctx.clearRect(0, 0, canvas.dimentions.width, canvas.dimentions.height);
    gc = null;
    player = null;
    lastFrameTime = null;
    messages = null;
    decisionTimer = null;
  }

  function gameLoop() {
    if(gc) {
      timeLoop();
      updateLoop();
      drawLoop();

      checkSpawnTimer();

      lastFrameTime = new Date().getTime();

      requestAnimationFrame(gameLoop);
    }
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

    if(gc.coinOutOfGame === gc.coinSpawned && gc.spawnForcast.rounds.length && !gc.gameOver) {
      socket.emit('gameOver', Math.round(gc.score));
      gc.gameOver = true;
    }
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

    gc.coinSpawned ++;
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
    canvas.ctx.font = `${gc.fontSize}px sans-serif`;
    canvas.ctx.fillStyle = gc.fontColor;
    canvas.ctx.textAlign = 'center';
    canvas.ctx.fillText(`Score: ${Math.round(gc.score)}`, canvas.width / 2, gc.fontSize + gc.fontOffset);
    canvas.ctx.font = `${gc.fontSize / 1.5}px sans-serif`;
    canvas.ctx.fillText(`Multiplier: ${(Math.round(gc.comboAmount * 100) / 100).toFixed(2)}`, canvas.width / 2, gc.fontSize * 2 + gc.fontOffset);
  }
})();
