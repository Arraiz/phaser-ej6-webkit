import Phaser from 'phaser-ce'
import * as utils from '../utils/RenderUtils'
import * as config from '../config/config'
//main game state (including the actual game)
export default class GameState extends Phaser.State {




   
    constructor() {
        super()
        this.cursors;
        
    }
    init() {
        this.cursors = this.game.input.keyboard.createCursorKeys();
        console.log(this.cursors);
        console.log('GameState Called!');
        
    }
    preload(){
        this.game.time.advancedTiming = true;
    }
    create() {

    }
    update() {

    }




    render() {
        //render debug lines
        utils.drawDebugWorldLines(config.UNITS_X, config.UNITS_Y, config.UNIT_X, config.UNIT_Y, this.game);
        utils.drawDebugCameraLines(config.CAMERA_WIDTH, config.CAMERA_HEIGHT, config.UNITS_X, config.UNIT_Y, this.game, this.camera);
        utils.moveDebug(this.cursors, this.camera);
        this.game.debug.text('FPS: ' + this.game.time.fps || 'FPS: --', 40, 40, "#00ff00");
    }
}