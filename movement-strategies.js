export const movementStrategies = [
  {
    match: ({ keys }) => keys.left.isDown,
    move: ({ mario }) => {
      mario.anims.play("mario-walk", true);
      mario.x -= 2;
      mario.flipX = true;
    },
  },
  {
    match: ({ keys }) => keys.right.isDown,
    move: ({ mario }) => {
      mario.anims.play("mario-walk", true);
      mario.x += 2;
      mario.flipX = false;
    },
  },
  {
    match: ({ keys }) => !keys.left.isDown && !keys.right.isDown,
    move: ({ mario }) => {
      mario.anims.play("mario-idle", true);
    },
  },
  {
    match: ({ keys, mario }) => keys.up.isDown && mario.body.touching.down,
    move: ({ mario }) => {
        console.log("arriba")
      mario.setVelocityY(-300);
      mario.anims.play("mario-jump", true);
    },
  },
];
