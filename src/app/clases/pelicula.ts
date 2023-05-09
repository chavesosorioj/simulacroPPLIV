export class Pelicula {	

    id: string;
    nombre: string;
    tipo: string;
    fecha_estreno: string;
    cantidad_publico: number;
    foto: string;

    //ver si lo dejo asi o un constructor sin parametros
    constructor(id:string, nombre:string, tipo:string, 
                fecha_estreno:string, cantidad_publico:number, foto:string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha_estreno = fecha_estreno;
        this. cantidad_publico = cantidad_publico;
        this.foto = foto;


    }

    
}
