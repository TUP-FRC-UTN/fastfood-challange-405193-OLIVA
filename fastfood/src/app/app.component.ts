import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./pos/pos.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
}
