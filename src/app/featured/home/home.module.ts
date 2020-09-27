import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MaterialModule } from 'src/app/material.module';
import { OrdersModule } from '../orders/orders.module';



@NgModule({
  declarations: [HeaderComponent, OrdersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    OrdersModule
  ],
  exports: [HeaderComponent, OrdersComponent]
})
export class HomeModule { }
