import Phaser from 'phaser-ce'
import GameState from './states/GameState'
import BootState from './states/BootState'
import * as config from './config/config'

class Game extends Phaser.Game{
   constructor(){
       super(config.CAMERA_WIDTH,config.CAMERA_HEIGHT,Phaser.AUTO,null);
       
       this.state.add('BootState',BootState);       
       this.state.add('GameState',GameState);
       this.state.start('BootState');
       
   }

}




const game = new Game();

