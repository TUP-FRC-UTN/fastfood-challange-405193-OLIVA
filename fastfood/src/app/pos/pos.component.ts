import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pedido } from '../pedido';
import { Estados } from '../estados';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  private pedidoService = inject(PedidosService);

  orden: Pedido = new Pedido();

  crearPedido(){
    this.orden.number = Math.floor(Math.random() * 1001);
    this.orden.estado = Estados.INGRESADO;
    this.orden.date = new Date();
  }

  cargarPedido(pedido: NgForm) {
    if(pedido.valid){
      this.crearPedido();
      this.pedidoService.addPedido(this.orden);
      this.orden = new Pedido();
    }
    else{
      console.log(pedido);
    }
  }
}
