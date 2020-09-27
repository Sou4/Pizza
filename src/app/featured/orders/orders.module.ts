import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MaterialModule } from 'src/app/material.module';
import { OrderSort } from 'src/app/shared/pipes/order-sort.pipe';



@NgModule({
  declarations: [OrderListComponent, OrderDetailsComponent, OrderSort],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [OrderListComponent]
})
export class OrdersModule { }
