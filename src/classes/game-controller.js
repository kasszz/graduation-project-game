export default class GameController {
  constructor(canvas) {
    this.debug = true;
    this.gameOver = false;
    this.canvas = canvas;

    this.fontSize = 24;
    this.fontColor = '#373D3F';

    this.lineAmount = 3;
    this.lineHeight = canvas.dimentions.height / this.lineAmount;

    this.gameObjects = [];

    this.score = 0;

    this.comboAmount = 1;
    this.comboMultiplier = 0.15;

    this.keysPressed = {
      a: false,
      s: false,
      d: false
    }

    this.spawnTotalTime = 2000;
    this.spawnIntervalStart = 1200;
    this.spawnIntervalMinimum = 200;
    this.spawnIntervalMultiplier = 0.998;
    this.spawnInterval = this.spawnIntervalStart;
    this.spawnForcast = this.getForcast();
    this.spawnRound = 0;
    this.spawnTimer = 0;

    this.coinSpawned = 0;
    this.coinOutOfGame = 0;
    this.coinLastSpawned = {
      line: 2,
      amount: 1,
      penalty: 5
    };

    if(this.debug) {
      this.debugLog();
    }
  }

  getForcast() {
    const rounds = [];
    let time = 0;
    let minimumReached = 0;

    while(this.spawnTotalTime > time) {
      const interval = this.spawnIntervalStart * Math.pow(this.spawnIntervalMultiplier, rounds.length);
      if(interval > this.spawnIntervalMinimum) {
        time += interval;
        rounds.push(interval);
      } else {
        time += this.spawnIntervalMinimum;
        rounds.push(this.spawnIntervalMinimum);
        minimumReached ++;
      }
    }

    return {
      rounds,
      minimumReached,
      totalTime: Math.round(time)
    }
  }

  addToScore(amount) {
    if(this.comboAmount === 1) {
      this.score += amount;
    } else {
      this.score += amount * this.comboAmount;
    }
  }

  addToCombo() {
    this.comboAmount += this.comboMultiplier;
  }

  resetCombo() {
    this.comboAmount = 1;
  }

  spawnGO(go) {
    this.gameObjects.push(go);
    return go;
  }

  destroy(index) {
    const updateGameObjects = this.gameObjects.slice(index);

    updateGameObjects.forEach(go => {
      go.GOIndex --;
    });

    this.gameObjects.splice(index, 1);
  }

  debugLog() {
    console.log('information about the spawner:');
    console.log(this.spawnForcast);
    console.log('--------------------------------');
  }
}
