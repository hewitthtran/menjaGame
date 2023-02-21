// Set a Timing multiplier for our game engine.
let menjaGameSpeed = 1;

// Set colour values
const BLUE = {r:0x67,g:0xd7,b:0xf0};
// Hex values -> RGB: 103,215,240
const GREEN = {r:0xa6, g:0xe0, b:0x2c};
const PINK = {r:0xfa, g:0x24, b:0x73};
const ORANGE = {r:0xfe, g:0x95, b:0x22};
const allCOlORS = [BLUE, GREEN, PINK, ORANGE];

// User Gameplay
const GET_SPAWN_DELAY = () => {
    const SPAWN_DELAY_MAX = 1400;
    const SPAWN_DELAY_MIN = 550;
    const SPAWN_DELAY = SPAWN_DELAY_MAX - state.game.cubeCount*3.1;
    return Math.max(SPAWN_DELAY, SPAWN_DELAY_MIN);
};

const DOUBLE_STRONG_ENABLE_SCORE = 2000;
// For the number of cubes that must be smashed before activating a feature.
const SLOWMO_THRESHOLD = 10;
const STRONG_THRESHOLD = 25;
const SPINNER_THRESHOLD = 25;

// Interaction State
let pointIsDown = false;
// For the last known position of the primary pointer in screen coordinates
let pointerScreen = {x:0, y:0};
// Same as pointerScreen, but converted to scene coordinates in rAF
// rAF = requestAnimationFrame
let pointerScene = {x:0, y:0};
// For the minimum speed of pointer before the user's "hits" are counted
const MIN_POINTER_SPEED = 60;
// The hit speed affects the direction of the target after being hit. This number will dampen that force
const HIT_DAMPENING = 0.1;
// The backboard should receive shadows and is the farthest negative Z position of entities
const BACKBOARD_Z = -400;
const SHADOW_COLOR = "#262e36";
// Constant values for air drag applied to the standard objects
const AIR_DRAG = 0.022;
const GRAVITY = 0.3;
// Spark configuration
const SPARK_COLOR = "rgba(170,221,255,.9)";
const SPARK_THICKNESS = 2.2;
const AIR_DRAG_SPARK = 0.1;
// To track the pointer positions to show a trail on screen
const TOUCH_TRAIL_COLOR = "rgba(170,221,255,.62)";
const TOUCH_TRAIL_THICKNESS = 7;
const TOUCH_POINT_LIFE = 120;
const TOUCH_POINTS = [];
// Size of in-game targets. This should affect the rendered size + hit area.
const TARGET_RADIUS = 40;
const TARGET_HIT_RADIUS = 50;
const MAKE_TARGET_GLUE_COLOR = (target) => {
    return "rgb(170,221,255)";
};
// Size of target fragments
const FRAGMENT_RADIUS = TARGET_RADIUS/3;

// Linking game canvas element is needed in the script.js file and the styles.css file.
const CANVAS = document.querySelector("canvas");
// document.querySelector () method returns first element that matches as CSS selector

// 3D camera configurations
// Constant values affecting the perspective
const CAMERA_DISTANCE = 900;
// Constant values not affecting perspective
const SCENE_SCALE = 1;
// Objects that get too close to the camera will be faded out to transparent over this range.
const CAMERA_FADE_START_Z = 0.45*CAMERA_DISTANCE;
const CAMERA_FADE_END_Z = 0.65*CAMERA_DISTANCE;
const CAMERA_FADE_RANGE = CAMERA_FADE_END_Z - CAMERA_FADE_START_Z;

// Global variables used to accumulate all the verticies and polygons for each frame
const ALL_VERTICES = [];
const ALL_POLYGONS = [];
const ALL_SHADOW_VERTICES = [];
const ALL_SHADOW_POLYGONS = [];

// Constants for the game modes that are available
const GAME_MODE_RANKED = Symbol("GAME_MODE_RANKED");
const GAME_MODE_CASUAL = Symbol("GAME_MODE_CASUAL");
// Symbol function ~ Primitive type for unique identifiers that are immutable (cannot be changed)

// The menus that are available
const MAIN_MENU = Symbol("MAIN_MENU");
const PAUSE_MENU = Symbol("PAUSE_MENU");
const SCORE_MENU = Symbol("SCORE_MENU");

// Global State of the game
const STATE = {
    game: {
        mode: GAME_MODE_RANKED,
        // Runtime of the current game
        time:0,
        // The player's score
        score:0,
        // Total number of cubes smashed in the game
        cubeCount:0,
    },
    menus: {
        // Setting 'null' to hide all the menus
        active: MAIN_MENU,
    },
};

// GLobal State Selectors



