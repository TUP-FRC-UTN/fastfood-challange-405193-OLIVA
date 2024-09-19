import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { Estados } from './estados';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  ordenes:Pedido[] = [];
  delivery: Pedido[] = [];

  getPedidosByStatus(estado: Estados){
    let pedidos: Pedido[] = [];
    this.ordenes.forEach(orden => {
      if(orden.estado === estado){
        pedidos.push(orden);
      }
    }
    );
    return pedidos;
  }

  getPedidosIngresados(){
    let pedidos: Pedido[] = [];
    this.ordenes.forEach(orden => {
      if(orden.estado === Estados.INGRESADO){
        pedidos.push(orden);
      }
    }
    );
    return pedidos;
  }

  addPedido(orden: Pedido){
    this.ordenes.push(orden);
  }

  removeByBro(nro: number){
    let i = this.ordenes.findIndex(o => o.number === nro);
    if(i !== -1){
      this.ordenes.splice(i, 1);
    }
  }
}
