import { Component, inject } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
terminarPedido() {
  this.pedidoService.delivery.push(this.pedidoEnCoccion[0])
  this.pedidoEnCoccion.splice(0, 1)
}
cocinarPedido(i: number) {
  if(this.pedidoEnCoccion.length === 0){
    this.pedidoEnCoccion.push(this.pedidoService.getPedidosIngresados()[i])
    this.pedidoService.removeByBro(this.pedidoEnCoccion[0].number)
  }
}
  public pedidoService = inject(PedidosService);
  pedidoEnCoccion: Pedido[] = [];
}
