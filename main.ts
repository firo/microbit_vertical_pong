input.onButtonPressed(Button.A, function () {
    io.change(LedSpriteProperty.X, -1)
})
function spara () {
    palla = game.createSprite(io.get(LedSpriteProperty.X), 3)
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        palla.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    palla.delete()
}
input.onButtonPressed(Button.AB, function () {
    spara()
})
input.onButtonPressed(Button.B, function () {
    io.change(LedSpriteProperty.X, 1)
})
let palla: game.LedSprite = null
let io: game.LedSprite = null
io = game.createSprite(2, 4)
radio.setGroup(11)
basic.forever(function () {
	
})
