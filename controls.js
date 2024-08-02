const MARIO_ANIMATIONS = {
  grown: {
    idle: 'mario-grown-idle',
    walk: 'mario-grown-walk',
    jump: 'mario-grown-jump'
  },
  normal: {
    idle: 'mario-idle',
    walk: 'mario-walk',
    jump: 'mario-jump'
  }
}
export function checkControls ({ mario, keys }) {
  const isMarioTouchingFloor = mario.body.touching.down

  const isLeftKeyDown = keys.left.isDown
  const isRightKeyDown = keys.right.isDown
  const isUpKeyDown = keys.up.isDown

  if (mario.isDead) return
  if (mario.isBlocked) return

  const marioAnimations = mario.isGrown
    ? MARIO_ANIMATIONS.grown
    : MARIO_ANIMATIONS.normal

  if (isLeftKeyDown) {
    isMarioTouchingFloor && mario.anims.play(marioAnimations.walk, true)
    mario.x -= 2
    mario.flipX = true
  } else if (isRightKeyDown) {
    isMarioTouchingFloor && mario.anims.play(marioAnimations.walk, true)
    mario.x += 2
    mario.flipX = false
  } else if (isMarioTouchingFloor) {
    mario.anims.play(marioAnimations.idle, true)
  }

  if (isUpKeyDown && isMarioTouchingFloor) {
    mario.setVelocityY(-300)
    mario.anims.play(marioAnimations.jump, true)
  }
}
