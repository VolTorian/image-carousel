import ImageCarousel from './ImageCarousel.js';

import barberry from './images/barberry.png';
import chilli from './images/chilli.png';
import pepper from './images/pepper.png';
import saffron from './images/saffron.png';

const test = new ImageCarousel("test-carousel", [barberry, chilli, pepper]);
const test2 = new ImageCarousel("test-2", [barberry, chilli, pepper, saffron], {auto: false});
const test3 = new ImageCarousel("test-3", [barberry, chilli, pepper, saffron, chilli], {interval: 2000, timeout: 3000});