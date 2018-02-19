import Phaser from 'phaser-ce'
import * as utils from '../utils/RenderUtils'
import * as config from '../config/config'
//main game state (including the actual game)
export default class GameState extends Phaser.State{
    

    constructor(){
        super()
      
    }
    init(){
        //center the screen

        console.log('GameState Called!');
        
    }




    render(){
        //render debug lines
        utils.drawDebugWorldLines(config.WORLD_SIZE_X,config.WORLD_SIZE_Y,config.UNIT_X,config.UNIT_Y,this.game);
        utils.drawDebugCameraLines(config.CAMERA_WIDTH,config.CAMERA_HEIGHT,config.UNITS_X,config.UNIT_Y,this.game,this.camera);

    }
}



