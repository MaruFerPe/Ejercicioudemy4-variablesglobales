equipoLocal = "Chicago Bulls";
equipoVisitante = "Angel Lakers";
puntosLocal = 0;
puntosVisitante =0;

function comentarJugada (equipo, puntos){
    if (puntos == 3)
        alert ("Triiiple triple de" + equipo);
    if (puntos == 2)
        alert (equipo + "anota dos");
    if (puntos== 1)
     alert (equipo + "no falla desde la linea de tiros libres");
}

function actualizarMarcador (equipo, puntos){
    if( equipo == equipoLocal)
        puntosLocal += puntos;
    if (equipo == equipoVisitante)
        puntosVisitante += puntos;
    alert (equipoLocal + " " + puntosLocal + "-" + puntosVisitante + " " + equipoVisitante);
}

function anotarPuntos (equipo, puntos){
    comentarJugada (equipo, puntos);
    actualizarMarcador (equipo, puntos);
} 

anotarPuntos ("Chicago Bulls", 2);
anotarPuntos ("Lakers", 3);
anotarPuntos ("Lakers", 1);
anotarPuntos ("Chicago Bulls", 3);