input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (icon > 0) {
        icon = icon - 1
    }
    
    basic.showIcon(icons[icon])
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (icon < icons.length - 1) {
        icon = icon + 1
    }
    
    basic.showIcon(icons[icon])
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    radio.sendValue("icon", icon)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "icon") {
        basic.showIcon(icons[value])
        icon = value
    }
    
})
let icon = 0
let icons = [IconNames.Happy, IconNames.Heart, IconNames.Angry, IconNames.Butterfly, IconNames.Yes, IconNames.No]
icon = 0
