input.onButtonPressed(Button.A, function () {
    io.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.AB, function () {
    invia_palla()
})
input.onButtonPressed(Button.B, function () {
    io.change(LedSpriteProperty.X, 1)
})
function invia_palla () {
    palla = game.createSprite(io.get(LedSpriteProperty.X), 3)
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        palla.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    palla.delete()
    radio.sendValue("palla", palla.get(LedSpriteProperty.X))
}
radio.onReceivedValue(function (name, value) {
    if (name == "palla") {
        ricevi_palla(value)
    }
})
function ricevi_palla (num: number) {
    palla = game.createSprite(num, 0)
    for (let index = 0; index < 4; index++) {
        palla.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        if (palla.isTouching(io)) {
            game.addScore(1)
            basic.showNumber(game.score())
        }
        if (palla.isTouchingEdge()) {
            palla.delete()
        }
    }
}
let palla: game.LedSprite = null
let io: game.LedSprite = null
game.setScore(0)
io = game.createSprite(2, 4)
radio.setGroup(11)
basic.forever(function () {
	
})
