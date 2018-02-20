import Phaser from 'phaser-ce'
import GameState from './GameState'
import * as config from '../config/config'
//main game state (including the actual game)
export default class GameState extends Phaser.State {


    constructor() {
        super()

    }
    preload() {

    }
    init() {
        //center the canvas
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;
        this.game.world.setBounds(0,0,config.WORLD_SIZE_X,config.WORLD_SIZE_Y);
        console.log('BootState Called!');
        this.game.state.start('GameState');
    }


}