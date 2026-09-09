interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: "Ed Sheeran",
        anio: 2015
    }
};

console.log("EL VOLUMEN ACTUAL ES: ", reproductor.volumen);
console.log("EL SEGUNDO ACTUAL ES: ", reproductor.segundo);
console.log("LA CANCION ACTUAL ES: ", reproductor.cancion);
console.log("EL AUTOR ES: ", reproductor.detalles.autor);
console.log("EL ANIO ES: ", reproductor.detalles.anio);

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log("EL VOLUMEN ACTUAL ES: ", volumen);
console.log("EL SEGUNDO ACTUAL ES: ", segundo);
console.log("LA CANCION ACTUAL ES: ", cancion);
console.log("EL AUTOR ES: ", autor);
console.log("EL ANIO ES: ", anio);

const dhz: string[] = ["GOKU", "VEGETA", "TRUNKS"];
const [p1, p2, p3] = dhz;

console.log("PERSONAJE 1: ", p1);
console.log("PERSONAJE 2: ", p2);
console.log("PERSONAJE 3: ", p3);