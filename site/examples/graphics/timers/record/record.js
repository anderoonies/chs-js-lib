// import {capture} from 'https://andy.codehs.me/cdn/capture.js';
import 'https://unpkg.com/gif.js@0.2.0/dist/gif.js';
const capture = async (frameRate = 20, timeLimit = 4) => {
    const gifWorkerCode = await fetch('https://unpkg.com/gif.js@0.2.0/dist/gif.worker.js').then(
        resp => resp.text()
    );
    const gifWorkerURL = URL.createObjectURL(
        new Blob([gifWorkerCode], { type: 'text/javascript' })
    );
    const stepInterval = 1000 / frameRate;
    const start = Date.now();
    const gif = new GIF({
        workers: 4,
        workerScript: gifWorkerURL,
        width: __graphics__.getCanvas().width,
        height: __graphics__.getCanvas().height,
        debug: true,
    });

    gif.on('finished', blob => {
        window.open(URL.createObjectURL(blob));
    });

    const oldRedraw = __graphics__.redraw.bind(__graphics__);
    const oldRAF = window.requestAnimationFrame;
    const oldDateNow = Date.now();
    let rafCallbacks = [];

    const init = () => {
        window.requestAnimationFrame = cb => {
            console.log(`registering: ${cb.name}`);
            rafCallbacks.push(cb);
        };
        Date.now = () => {
            return start + stepInterval * frame;
        };
    };

    const destroy = () => {
        __graphics__.redraw = oldRedraw;
        Date.now = oldDateNow;
        window.requestAnimationFrame = oldRAF;
    };

    init();
    let frame = 0;
    let done = false;
    const step = () => {
        frame += 1;
        if (stepInterval * frame >= timeLimit * 1000) {
            done = true;
            destroy();
            gif.render();
        } else {
            rafCallbacks.forEach(cb => {
                setTimeout(() => {
                    cb(stepInterval);
                }, 0);
            });
        }
        rafCallbacks = [];
        if (!done) {
            setTimeout(step, 0);
        }
    };
    step();
    __graphics__.redraw = function () {
        oldRedraw();
        console.log('capturing');
        gif.addFrame(__graphics__.getContext(), { copy: true, delay: stepInterval });
    }.bind(__graphics__);
};

const time = 2000;
const dt = 5;
const dx = getWidth() / (time / dt);

const b = new Circle(20);
b.setPosition(0, getHeight() / 2);
b.setColor('blue');
add(b);

const start = Date.now();
let now = Date.now();
const lbl = new Text((now - start) / 1000);
lbl.setPosition(50, 50);
add(lbl);
debugger;
setTimer(
    () => {
        console.log('mov');
        b.move(dx, 0);
        lbl.setText((Date.now() - start) / 1000);
        if (b.x >= getWidth()) {
            stopTimer('x');
        }
    },
    dt,
    {},
    'x'
);

capture(60, 2);

// move the circle by dx every dt milliseconds
// so that is time / dt updates
// so dx = x / (time / dt)
