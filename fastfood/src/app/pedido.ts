import { Estados } from "./estados";

export class Pedido{
    number: number = 0; // Numero de pedido random de 1 a 1000
    name: string = '';  // Nombre del cliente
    description: string = '';  // Descripción del pedido
    date: Date = new Date(); // Fecha de creación del pedido
    estado?: Estados;
}
