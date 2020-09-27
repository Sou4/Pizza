export enum PizzaStatus {
    RECEIVED = 'Order received',
    PREPARING = 'Preparing',
    READY = 'Ready to serve',
    DELIVERED = 'Pizza delivered'
};

export const status = ['Order received', 'Preparing', 'Ready to serve', 'Pizza delivered'];

export interface Orders {
    orderNumber: number;
    customerName: string;
    numberOfItems: number;
    items: Items[];
    totalAmount: number;
    orderStatus: string;
    deliveryAddress: Address
}

export interface Items {
    name: string;
    quantity: number;
    price: number;
}

export interface Address {
    street1: string;
    street2: string;
    city: string;
    pincode: number;
    mobile: number;
    landMark: string;
}