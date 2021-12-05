export { default as Console } from '../../src/console/index.js';
export { default as Queue } from '../../src/datastructures/queue.js';
export { default as Stack } from '../../src/datastructures/stack.js';
export { default as Arc } from '../../src/graphics/arc.js';
export { default as Circle } from '../../src/graphics/circle.js';
export { default as Color } from '../../src/graphics/color.js';
export { default as Group } from '../../src/graphics/group.js';
export { default as Graphics } from '../../src/graphics/index.js';
export { default as Keyboard } from '../../src/graphics/keyboard.js';
export { default as Line } from '../../src/graphics/line.js';
export { default as Oval } from '../../src/graphics/oval.js';
export { default as Polygon } from '../../src/graphics/polygon.js';
export { default as Rectangle } from '../../src/graphics/rectangle.js';
export { default as Text } from '../../src/graphics/text.js';
export { default as WebImage } from '../../src/graphics/webimage.js';
export { default as WebVideo } from '../../src/graphics/webvideo.js';
export * as Randomizer from '../../src/randomizer.js';
export { default as AudioManager } from '../../src/sound';
export { default as Audio } from '../../src/sound/audio.js';
export { default as Sound } from '../../src/sound/sound.js';
export { map as map } from '../../src/graphics/graphics-utils.js';

const circle = (radius, x, y) => {
    radius = radius ?? 25;
    x = x ?? getWidth() / 2;
    y = y ?? getHeight() / 2;
    const c = new Circle(radius);
    c.setPosition(x, y);
    return c;
};

const rectangle = (width, height, x, y) => {
    width = width ?? 50;
    height = height ?? 50;
    x = x ?? getWidth() / 2;
    y = y ?? getHeight() / 2;
    const r = new Rectangle(width, height);
    r.setPosition(x, y);
    return r;
};

const position = (thing, x, y) => {
    return thing.setPosition(x, y);
};
const move = (thing, x, y) => {
    return thing.move(x, y);
};
const getX = thing => thing.x;
const getY = thing => thing.y;
const getRadius = thing => thing.radius;
const getWidth = thing => thing.width;
const getHeight = thing => thing.height;
