input.onButtonPressed(Button.A, function () {
    if (icon > 0) {
        icon = icon - 1
    }
    basic.showIcon(icons[icon])
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("icon", icon)
})
radio.onReceivedString(function (receivedString) {
    music.setVolume(212)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 3767, 255, 20, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (icon < icons.length - 1) {
        icon = icon + 1
    }
    basic.showIcon(icons[icon])
})
radio.onReceivedValue(function (name, value) {
    music.setVolume(212)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 4035, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    if (name == "icon") {
        basic.showIcon(icons[value])
icon = value
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Test")
})
let icons: number[] = []
let icon = 0
icons = [
IconNames.Happy,
IconNames.Heart,
IconNames.Angry,
IconNames.Butterfly,
IconNames.Yes,
IconNames.No
]
icon = 0
