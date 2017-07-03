import * as PIXI from 'pixi.js';

const init = function init() {
  const stage = new PIXI.Container();
  const renderer = PIXI.autoDetectRenderer(512, 512);

  // Tutorial Aliases.
  const Sprite = PIXI.Sprite;
  const id = PIXI.loader.resources['assets/images/pixi1.json'].textures;
  // const TextureCache = PIXI.utils.TextureCache;
  // const resources = PIXI.loader.resources;

  document.body.appendChild(renderer.view);

  const explorer = new Sprite(id['explorer.png']);

  stage.addChild(explorer);

  renderer.render(stage);
};

export default {
  init,
};
