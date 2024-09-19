import { Component, inject } from '@angular/core';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
entregarPedido(i: number) {
  this.pedidoService.delivery.splice(i, 1)
}
  pedidoService = inject(PedidosService)
}
