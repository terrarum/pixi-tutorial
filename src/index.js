import * as PIXI from 'pixi.js';

import './index.scss'; // eslint-disable-line
import start from './modules/start';

const init = function init() {
  PIXI.loader
    .add('tileset', 'assets/images/tileset.png')
    .add('cat', 'assets/images/cat.png')
    .on('progress', (loader, resource) => {
      console.log(`${loader.progress.toFixed(0)}% - ${resource.url} loaded.`);
    })
    .load(start.init);
};

init();
