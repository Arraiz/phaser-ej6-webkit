import Phaser from 'phaser-ce'
import * as utils from '../utils/RenderUtils'
import * as config from '../config/config'
//main game state (including the actual game)
export default class GameState extends Phaser.State {





    constructor() {
        super()
        this.cursors;
        this.centerKey;
        this.zoomInKey;

    }
    init() {
        this.cursors = this.game.input.keyboard.createCursorKeys();
        console.log(this.cursors);

        console.log('GameState Called!');

    }
    preload() {
        //para los FPS
        this.game.time.advancedTiming = true;
        //para centrar la camara del juego
        this.centerKey = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
        //para temas de zoom
        this.zoomInKey = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);

        this.zoomOutKey = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
        console.log(this.game.scale.height);
        
    }
    create() {

        this.game.scale.setGameSize(config.WORLD_SIZE_X/2, config.WORLD_SIZE_Y/2);
      
    }
    update() {

    }
    render() {
        //render debug lines
        utils.drawDebugWorldLines(config.UNITS_X, config.UNITS_Y, config.UNIT_X, config.UNIT_Y, this.game);
        utils.drawDebugCameraLines(config.CAMERA_WIDTH, config.CAMERA_HEIGHT, config.UNITS_X, config.UNIT_Y, this.game, this.camera);
        utils.moveDebug(this.cursors, this.camera,this.game, this.centerKey, this.zoomInKey,this.zoomOutKey);
        
        //FPS 
        this.game.debug.text('FPS: ' + this.game.time.fps || 'FPS: --', 40, 40, "#00ff00");
    }
}