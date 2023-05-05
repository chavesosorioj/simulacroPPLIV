export class Pelicula {

	// a. id		
	// b. Nombre		
	// c. tipo { terror , comedia, amor ,otros }	enum?	
	// d. fecha de estreno,		
	// e. cantidad de público		
	// f. Foto de la película		

    id: number;
    nombre: string;
    tipo: string;
    fecha_estreno: string;
    cantidad_publico: number;
    foto: string;

    //ver si lo dejo asi o un constructor sin parametros
    constructor(id:number, nombre:string, tipo:string, 
                fecha_estreno:string, cantidad_publico:number, foto:string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha_estreno = fecha_estreno;
        this. cantidad_publico = cantidad_publico;
        this.foto = foto;


    }

    
}
