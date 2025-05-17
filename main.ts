radio.setGroup(23)

let trim = 0

basic.forever(function () {
    let x = input.acceleration(Dimension.X); //left,right
    let y = input.acceleration(Dimension.Y); //forward,backwards
    radio.sendValue("x", x); radio.sendValue("y", y); basic.pause(50);
})

input.onButtonPressed(Button.AB, function() {
    radio.sendValue("drive", 0)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    radio.sendValue("drive", 1)
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


