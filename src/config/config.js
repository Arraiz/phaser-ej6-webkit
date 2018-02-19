//pixels
export const CAMERA_WIDTH = 640; //tamaño de la camara en pixels
export const CAMERA_HEIGHT = 360; //tamaño de la camara en pixels
export const WORLD_SIZE_X = CAMERA_WIDTH;
export const WORLD_SIZE_Y = CAMERA_HEIGHT;


//units
export const UNITS_X = 8;
export const UNITS_Y = 4;
export const UNIT_X = WORLD_SIZE_X / UNITS_X;
export const UNIT_Y = WORLD_SIZE_Y / UNITS_Y;
export const WORLD_CENTER = {
    'x': UNIT_X * UNITS_X / 2,
    'y': UNIT_Y * UNITS_Y / 2
}