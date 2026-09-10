class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) { // Corregido: parámetro 'nombre' en lugar de 'num'
        this.nombre = nombre; // Corregido: 'nombre' en lugar de 'nom'
        this.edad = edad;
    }

    imprimir() {
        // Corregido: se usan comillas invertidas (backticks) `` y ${} para interpolar variables
        console.log(`HOLA ME LLAMO ${this.nombre} y tengo${this.edad} años`);
    }
}

let persona: Persona;
persona = new Persona("JUAN", 23);
persona.imprimir();