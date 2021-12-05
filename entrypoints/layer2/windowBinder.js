import { default as Console } from '../../src/console/index.js';
import { default as Queue } from '../../src/datastructures/queue.js';
import { default as Stack } from '../../src/datastructures/stack.js';
import { default as Arc } from '../../src/graphics/arc.js';
import { default as Circle } from '../../src/graphics/circle.js';
import { default as Color } from '../../src/graphics/color.js';
import { default as GraphicsManager } from '../../src/graphics/index.js';
import { default as Keyboard } from '../../src/graphics/keyboard.js';
import { default as Line } from '../../src/graphics/line.js';
import { default as Oval } from '../../src/graphics/oval.js';
import { default as Polygon } from '../../src/graphics/polygon.js';
import { default as Rectangle } from '../../src/graphics/rectangle.js';
import { default as Text } from '../../src/graphics/text.js';
import { default as WebImage } from '../../src/graphics/webimage.js';
import { default as WebVideo } from '../../src/graphics/webvideo.js';
import * as Randomizer from '../../src/randomizer.js';
import { default as Audio } from '../../src/sound/audio.js';
import { default as AudioManager } from '../../src/sound/index.js';
import { default as Sound } from '../../src/sound/sound.js';
import { default as Group } from '../../src/graphics/group.js';
import { map } from '../../src/graphics/graphics-utils.js';

const GraphicsInstance = new GraphicsManager();
window.__graphics__ = GraphicsInstance;
window.add = GraphicsInstance.add.bind(GraphicsInstance);
window.screenWidth = GraphicsInstance.getWidth.bind(GraphicsInstance);
window.screenHeight = GraphicsInstance.getHeight.bind(GraphicsInstance);
window.mouseClickMethod = GraphicsInstance.mouseClickMethod.bind(GraphicsInstance);
window.mouseDownMethod = GraphicsInstance.mouseDownMethod.bind(GraphicsInstance);
window.mouseDragMethod = GraphicsInstance.mouseDragMethod.bind(GraphicsInstance);
window.mouseUpMethod = GraphicsInstance.mouseUpMethod.bind(GraphicsInstance);
window.mouseMoveMethod = GraphicsInstance.mouseMoveMethod.bind(GraphicsInstance);
window.stopAllTimers = GraphicsInstance.stopAllTimers.bind(GraphicsInstance);
window.setMainTimer = GraphicsInstance.setMainTimer.bind(GraphicsInstance);
window.stopTimer = GraphicsInstance.stopTimer.bind(GraphicsInstance);
window.setTimer = GraphicsInstance.setTimer.bind(GraphicsInstance);
window.keyDownMethod = GraphicsInstance.keyDownMethod.bind(GraphicsInstance);
window.removeAll = GraphicsInstance.removeAll.bind(GraphicsInstance);
window.remove = GraphicsInstance.remove.bind(GraphicsInstance);
window.setBackgroundColor = GraphicsInstance.setBackgroundColor.bind(GraphicsInstance);
window.getElementAt = GraphicsInstance.getElementAt.bind(GraphicsInstance);
window.getElementsAt = GraphicsInstance.getElementsAt.bind(GraphicsInstance);
window.setFullscreen = GraphicsInstance.setFullscreen.bind(GraphicsInstance);
window.setSize = GraphicsInstance.setSize.bind(GraphicsInstance);

const ConsoleInstance = new Console();
window.readLine = ConsoleInstance.readLine.bind(ConsoleInstance);
window.readInt = ConsoleInstance.readInt.bind(ConsoleInstance);

const AudioInstance = new AudioManager();
window.audioChangeMethod = AudioInstance.audioChangeMethod.bind(AudioInstance);

window.map = map;

const level2 = {
    circle: (radius, x, y) => {
        radius = radius ?? 25;
        x = x ?? screenWidth() / 2;
        y = y ?? screenHeight() / 2;
        const c = new Circle(radius);
        c.setPosition(x, y);
        return c;
    },
    rectangle: (width, height, x, y) => {
        width = width ?? 50;
        height = height ?? 50;
        x = x ?? screenWidth() / 2;
        y = y ?? screenHeight() / 2;
        const r = new Rectangle(width, height);
        r.setPosition(x, y);
        return r;
    },
    text: (label, x, y) => {
        x = x ?? screenWidth() / 2;
        y = y ?? screenHeight() / 2;
        const t = new Text(label);
        t.setPosition(x, y);
        return t;
    },
    position: (thing, x, y) => {
        return thing.setPosition(x, y);
    },
    move: (thing, x, y) => {
        return thing.move(x, y);
    },
    getX: thing => thing.getX(),
    getY: thing => thing.getY(),
    getRadius: thing => thing.radius,
    getWidth: thing => thing.width,
    getHeight: thing => thing.height,
    setWidth: (thing, width) => (thing.width = width),
    setHeight: (thing, height) => (thing.height = height),
    setText: (thing, text) => (thing.label = text),
};

Object.entries(level2).forEach(([name, method]) => {
    Object.defineProperty(window, name, {
        get() {
            return method;
        },
        set() {
            throw Error(
                `${name} is a built-in function of the CodeHS JavaScript library. Cant do that!`
            );
        },
    });
});
