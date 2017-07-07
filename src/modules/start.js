import * as PIXI from 'pixi.js';

const randomInt = function randomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

const init = function init() {
  const stage = new PIXI.Container();
  const renderer = PIXI.autoDetectRenderer(512, 512);

  // Tutorial Aliases.
  const Sprite = PIXI.Sprite;
  const id = PIXI.loader.resources['assets/images/pixi1.json'].textures;
  // const TextureCache = PIXI.utils.TextureCache;
  // const resources = PIXI.loader.resources;

  document.body.appendChild(renderer.view);

  const blobCount = 6;
  const blobSprites = [];

  // Set up sprites.
  const explorer = new Sprite(id['explorer.png']);
  const treasure = new Sprite(id['treasure.png']);
  const dungeon = new Sprite(id['dungeon.png']);
  const door = new Sprite(id['door.png']);
  for (let i = 0; i < blobCount; i += 1) {
    blobSprites.push(new Sprite(id['blob.png']));
  }

  // Add sprites to stage.
  stage.addChild(dungeon);
  stage.addChild(door);
  stage.addChild(explorer);
  stage.addChild(treasure);
  for (let i = 0; i < blobCount; i += 1) {
    stage.addChild(blobSprites[i]);
  }

  // Position sprites.
  door.x = door.width;

  explorer.x = 68;
  explorer.y = (stage.height / 2) - (explorer.height / 2);

  treasure.x = stage.width - treasure.width - 48;
  treasure.y = (stage.height / 2) - (treasure.height / 2);

  for (let i = 0; i < blobCount; i += 1) {
    blobSprites[i].x = randomInt(door.width, stage.width - blobSprites[i].width);
    blobSprites[i].y = randomInt(door.width, stage.height - blobSprites[i].height);
  }

  renderer.render(stage);
};

export default {
  init,
};
