import { Pipe, PipeTransform } from '@angular/core';
import { Orders } from 'src/app/featured/orders/models/order.model';

@Pipe({
    name: 'orderSort'
})
export class OrderSort implements PipeTransform {

    transform(value: Orders[], sortKey: string) {
        if (sortKey === 'all')
            return value;
        return value.filter(i => i.orderStatus === sortKey);
    }

}