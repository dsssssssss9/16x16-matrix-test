let matrix = SmartMatrix.create(
DigitalPin.P2,
16,
16,
NeoPixelMode.RGB
)
matrix.Brightness(32)
matrix.clear()
matrix.show()
basic.showIcon(IconNames.House)
basic.forever(function () {
    matrix.scrollText(
    "Hello Frank",
    100,
    0,
    neopixel.colors(NeoPixelColors.Blue)
    )
    matrix.scrollText(
    "16*16 LED Display",
    100,
    8,
    neopixel.colors(NeoPixelColors.Green)
    )
})
