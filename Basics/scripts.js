import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("enemy", "images/enemy.jpg");
loadSprite("hero", "images/hero.png");
loadSprite("ground", "images/ground.jpg");

const player = add ([
    sprite("enemy"),
    pos(20, 20),
    scale(2),
    area(),
    body(),
]);

const move_speed = 200;
onKeyPress ("right", () => {
    player.move(move_speed, 0);
});
onKeyPress ("left", () => {
    player.move(-move_speed, 0);
});

addLevel ([
    "     ",
    "     ",
    "   @ ",
    "     ",
    "xxxxx",
], {
    'x': () => [
        sprite("ground"),
        solid(),
        pos(0, 200),
  
    ],
    '@': () => [
        sprite("ground"),
        scale(1.5),
        area(),
        body(),
        "dangerous"
    ]
});

player.collides ("dangerous", () => {
    destroy(player);
})