import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockData } from '../mock/mock';
import { Orders, PizzaStatus, status } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private $orders = new BehaviorSubject<Orders[]>(mockData);

  constructor() { }

  getOrders(): Observable<Orders[]> {
    return this.$orders;
  }

  updateOrderStatus(orderNumber: number, orders: Orders[]): void {
    orders.map(obj => {
      if (obj.orderNumber === orderNumber) {
        const index = status.indexOf(obj.orderStatus);
        if (index !== -1 && (index + 1) < status.length) {
          obj.orderStatus = status[index + 1];
        }
      }
    });
    this.$orders.next(orders);
  }
}
