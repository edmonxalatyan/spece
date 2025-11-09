controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 5 5 5 5 2 a a a . . 
        . . 7 7 2 5 5 2 2 5 5 7 7 a . . 
        . . 7 7 2 2 2 2 2 2 2 7 7 a . . 
        . . 7 7 2 5 5 2 2 5 5 7 7 a . . 
        . . 2 2 2 2 5 5 5 5 2 a a a . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
let turkey: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . 7 7 7 . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . . 7 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 9 9 5 5 . . . . . 
    2 2 2 5 9 9 9 9 f 9 5 . . . . . 
    2 2 2 5 9 9 9 9 9 9 5 2 2 2 2 . 
    2 2 2 9 9 9 9 9 9 9 5 . . . . . 
    2 2 2 5 9 9 9 9 f 9 5 . . . . . 
    2 2 2 5 9 9 9 9 9 5 5 . . . . . 
    . . . 5 5 5 5 9 5 5 . . . . . . 
    . . . . . 7 5 5 5 . . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    turkey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 a a a a a a 2 . . . 
        . . 2 2 a a f a a a f a a 2 . . 
        . . . 2 a a a a a a a a a 2 2 . 
        . . 2 a a a f f f f f f a a 2 . 
        . . . 2 a f a a f a f a f 2 2 . 
        . . . 2 a a f f a f a f f 2 . . 
        . . . 2 2 2 2 f f f f f 2 2 . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    turkey.x = scene.screenWidth()
    turkey.vx = -20
    turkey.y = randint(0, scene.screenHeight())
})
