import { Component, OnInit } from '@angular/core';
import { Orders, PizzaStatus } from 'src/app/featured/orders/models/order.model';
import { OrdersService } from 'src/app/featured/orders/services/orders.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pendingOrders = 0;
  completedOrder = 0;
  constructor(private _orderService: OrdersService) { }

  ngOnInit(): void {
    this._orderService.getOrders().subscribe((res: Orders[]) => {
      this.completedOrder = 0;
      this.pendingOrders = 0;
      res.forEach(item => {
        if (item.orderStatus === PizzaStatus.DELIVERED) {
          this.completedOrder += 1;
        } else {
          this.pendingOrders += 1;
        }
      });
    });
  }

}
