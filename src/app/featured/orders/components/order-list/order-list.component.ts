import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoggerService } from 'src/app/core/services/logger.service';
import { Orders } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Orders[];
  sortKey: string = 'all';
  constructor(private _orderService: OrdersService, public _dialog: MatDialog, private _log: LoggerService) { }

  ngOnInit(): void {
    this._orderService.getOrders().subscribe(res => {
      this.orders = res;
    });
  }


  changeStatus(orderNumber: number, event) {
    event.stopPropagation();
    this._orderService.updateOrderStatus(orderNumber, this.orders);
  }

  openDialog(order: Orders) {
    const dialogRef = this._dialog.open(OrderDetailsComponent, {
      data: order
    });

    dialogRef.afterClosed().subscribe(_result => {
      this._log.info('dialog closed');
    });
  }
}
