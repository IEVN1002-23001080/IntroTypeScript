function sumar(a: number, b: number): number {
    return a + b;
}

const resultado = sumar(4, 3);
console.log(resultado);

function multiplicar(n1: number, base: number = 6): number {
    return n1 * base;
}

console.log(multiplicar(3, 4));
console.log(multiplicar(3));

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
};



interface Mascotas {
    nombre: string;
    edad: number;
    raza: string;
    sexo?: string;
    vacunado: boolean;
    mostrarEdad: () => void;
}

function mostrarMascota(mascota: Mascotas, x: number): void {
    mascota.edad += x;
    mascota.mostrarEdad();   
}

const nuevaMascota: Mascotas = {
    nombre: "FIRULAIS",
    edad: 5,
    raza: "PASTOR ALEMAN",
    vacunado: true,
    mostrarEdad() {
        console.log(`LA EDAD DE ${this.nombre} es ${this.edad}`);
    }
};

mostrarMascota(nuevaMascota, 2);