import { Component, inject } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { CommonModule } from '@angular/common';
import { PosComponent } from "../pos/pos.component";
import { DeliveryComponent } from "../delivery/delivery.component";
import { KitchenComponent } from "../kitchen/kitchen.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, PosComponent, DeliveryComponent, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  public pedidoService = inject(PedidosService);
}
