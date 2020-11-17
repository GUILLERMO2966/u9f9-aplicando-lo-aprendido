input.onButtonPressed(Button.A, function () {
    Tasa_Interaccion += 0.5
    basic.showString("Tasa de Interacción")
    basic.showString("" + (Tasa_Interaccion))
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    Suceptibles = 90000
    Infectados = 10000
    Recuperados = 0
    Tasa_Interaccion = 2
    Probabilidad_contagio = 0.1
})
input.onButtonPressed(Button.B, function () {
    Probabilidad_contagio += 0.05
    basic.showString("Probabilidad de Contagio")
    basic.showString("" + (Probabilidad_contagio))
    basic.pause(2000)
})
let Contagios = 0
let Probabilidad_contagio = 0
let Tasa_Interaccion = 0
let Recuperados = 0
let Infectados = 0
let Suceptibles = 0
Suceptibles = 90000
Infectados = 10000
Recuperados = 0
Tasa_Interaccion = 2
Probabilidad_contagio = 0.1
basic.forever(function () {
    Contagios = Infectados * (Tasa_Interaccion * Suceptibles) / (Suceptibles + (Infectados + Recuperados)) * Probabilidad_contagio
    basic.showString("CONTAGIOS =")
    basic.showNumber(Contagios)
    basic.pause(100)
})
