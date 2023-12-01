let Titulo = document.querySelector("#Titulo")
let Boton = document.querySelector("#boton")

let Cambiar = false;
Boton.onclick = function () {
    if (Cambiar == false) {
        Titulo.innerText = 'Los mejores juegos de PlayStation son: Ghost of Tsushima, Shadow of The Colossus Remake, Killzone y God of War '
        Cambiar = true
    } else {
        Titulo.innerText = 'Generación Periodo Principales consolas Séptima generación 2005-2012 Xbox 360, PlayStation 3, Wii. Octava generación 2012-2020 Wii U, PlayStation 4, Xbox One. Novena generación 2020-Actual Xbox Series X y Series S, PlayStation 5,Nintendo Switch'
        Cambiar = false 
    }
}