import * as PIXI from 'pixi.js';

const init = function init() {
  const stage = new PIXI.Container();
  const renderer = PIXI.autoDetectRenderer(256, 256);

  // Tutorial Aliases.
  const Sprite = PIXI.Sprite;
  const TextureCache = PIXI.utils.TextureCache;
  // const resources = PIXI.loader.resources;

  document.body.appendChild(renderer.view);

  // Cat sprite.
  const cat = new PIXI.Sprite(PIXI.loader.resources.cat.texture);

  // Tileset.
  const texture = TextureCache.tileset;
  const rectangle = new PIXI.Rectangle(192, 128, 64, 64);
  texture.frame = rectangle;
  const rocket = new Sprite(texture);
  rocket.x = 32;
  rocket.y = 32;

  stage.addChild(cat);
  stage.addChild(rocket);

  cat.position.set(96, 96);
  cat.anchor.set(0.5, 0.5);
  cat.rotation = 0.5;

  renderer.render(stage);
};

export default {
  init,
};
