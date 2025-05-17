radio.setGroup(23)

let trim = 0
let canDrive = true

basic.forever(function () {
    let x = input.acceleration(Dimension.X); //left,right
    let y = input.acceleration(Dimension.Y); //forward,backwards
    radio.sendValue("x", x); radio.sendValue("y", y); basic.pause(50);
})

input.onButtonPressed(Button.AB, function () {
    canDrive = !canDrive
    radio.sendValue("drive", canDrive ? 1 : 0)
})


input.onButtonPressed(Button.A, function(){
    trim -= 5
    radio.sendValue("trim", trim)
    basic.showNumber(trim)
})

input.onButtonPressed(Button.B, function () {
    trim += 5
    radio.sendValue("trim", trim)
    basic.showNumber(trim)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    trim = 0
    radio.sendValue("trim", trim)
    basic.showNumber(trim)
})
