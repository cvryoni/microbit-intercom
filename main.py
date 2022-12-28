def on_button_pressed_a():
    global icon
    if icon > 0:
        icon = icon - 1
    basic.show_icon(icons[icon])
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global icon
    if icon < len(icons) - 1:
        icon = icon + 1
    basic.show_icon(icons[icon])
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    global icon
    radio.send_value("icon", icon)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_value(name, value):
    global icon
    if name == "icon":
        basic.show_icon(icons[value])
        icon = value
radio.on_received_value(on_received_value)

icon = 0
icons = [
    IconNames.HAPPY,
    IconNames.HEART,
    IconNames.ANGRY,
    IconNames.BUTTERFLY,
    IconNames.YES,
    IconNames.NO]
icon = 0
