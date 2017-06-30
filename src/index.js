import * as PIXI from 'pixi.js';

import './index.scss'; // eslint-disable-line

const load = function load() {
  const stage = new PIXI.Container();
  const renderer = PIXI.autoDetectRenderer(256, 256);

  document.body.appendChild(renderer.view);

  const sprite = new PIXI.Sprite(PIXI.loader.resources['assets/images/cat.png'].texture);
  stage.addChild(sprite);

  renderer.render(stage);
};

const init = function init() {
  PIXI.loader
    .add('assets/images/cat.png')
    .load(load);
};

init();
