import { VanillaTilt } from './index.d';

let element: VanillaTilt = new VanillaTilt(document.createElement('a'), {
    axis: 'y',
    easing: 'cubic-besizer(0.9, 0.9, 0.9)',
    max: 2,
    perspective: 100,
    reset: true,
    reverse: true,
    scale: 2,
    speed: 200
});

VanillaTilt.init(document.createElement('a'), {
    axis: 'x'
});

element.removeEventListener();

VanillaTilt.init([document.createElement('a')], {
    axis: null
});


let values: VanillaTilt.TiltValues = element.getValues();
values.percentageX;
values.percentageY;
values.tiltX;
values.tiltY;
