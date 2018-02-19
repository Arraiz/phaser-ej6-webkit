import Phaser from 'phaser-ce'
import * as config from '../config/config'
export function drawDebugWorldLines(x_units, y_units, units_x, units_y, game) {
    let circle = new Phaser.Circle(config.WORLD_CENTER.x,config.WORLD_CENTER.y,10);
    for (let i = 0; i < x_units; i++) {
        let lineV = new Phaser.Line(units_x * i, 0, units_x * i, units_y * 4);
        game.debug.geom(lineV);
        
        
    }
    for (let i = 0; i < y_units; i++) {
        let lineH = new Phaser.Line(0, units_y * i, units_x * units_x, units_y * i);
        game.debug.geom(lineH);
    }
    game.debug.geom(circle, 'rgba(0,255,0,0.5)');
}


export  function drawDebugCameraLines(cameraW, cameraH, worldW, worldH,game,camera) {

    let lineDiag1 = new Phaser.Line(camera.x,camera.y,camera.x+camera.width,camera.y+camera.height);
    let lineDiag2 = new Phaser.Line(camera.x,camera.y+camera.height,camera.x+camera.width,camera.y);
    game.debug.geom(lineDiag1,'rgba(255,0,0.5)');
    game.debug.geom(lineDiag2,'rgba(255,0,0.5)');
}