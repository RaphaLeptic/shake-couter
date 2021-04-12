input.onGesture(Gesture.Shake, function () {
    Number2 += 1
    Display.show(Number2)
    basic.pause(100)
})
let Number2 = 0
let Display: grove.TM1637 = null
Display = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
