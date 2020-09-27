import { Orders, PizzaStatus } from '../models/order.model';

export const mockData: Orders[] = [
    {
        orderNumber: 1,
        customerName: 'Sourabh',
        numberOfItems: 1,
        orderStatus: PizzaStatus.RECEIVED,
        totalAmount: 300,
        items: [
            {
                name: 'Farm House Pizza',
                quantity: 1,
                price: 300
            }
        ],
        deliveryAddress: {
            street1: 'Nagarbhavi Main road',
            street2: 'Govindaraja Nagar Ward',
            city: 'Bengaluru',
            pincode: 560079,
            mobile: 1234567890,
            landMark: 'Metro Station'
        }
    },
    {
        orderNumber: 2,
        customerName: 'Samanth',
        numberOfItems: 2,
        orderStatus: PizzaStatus.RECEIVED,
        totalAmount: 480,
        items: [
            {
                name: 'Five Pepper Pizza',
                quantity: 1,
                price: 450
            },
            {
                name: 'Coke',
                quantity: 1,
                price: 30
            }
        ],
        deliveryAddress: {
            street1: 'Bommanahalli Seenappa Layout',
            street2: 'Hongasandra',
            city: 'Bengaluru',
            pincode: 560066,
            mobile: 1234567890,
            landMark: 'Bus Station'
        }
    },
    {
        orderNumber: 3,
        customerName: 'John',
        numberOfItems: 4,
        orderStatus: PizzaStatus.RECEIVED,
        totalAmount: 1200,
        items: [
            {
                name: 'Five Pepper Pizza',
                quantity: 2,
                price: 900
            },
            {
                name: 'Coke',
                quantity: 2,
                price: 60
            },
            {
                name: 'Garlic Bread',
                quantity: 1,
                price: 150
            },
            {
                name: 'Lava Cake',
                quantity: 1,
                price: 90
            }
        ],
        deliveryAddress: {
            street1: 'College road',
            street2: 'BTM 2nd Stage',
            city: 'Bengaluru',
            pincode: 560058,
            mobile: 1234567890,
            landMark: 'A2B'
        }
    },
    {
        orderNumber: 4,
        customerName: 'Sara',
        numberOfItems: 3,
        orderStatus: PizzaStatus.RECEIVED,
        totalAmount: 370,
        items: [
            {
                name: 'Corn Pizza',
                quantity: 1,
                price: 250
            },
            {
                name: 'Coke',
                quantity: 1,
                price: 30
            },
            {
                name: 'Lava Cake',
                quantity: 1,
                price: 90
            }
        ],
        deliveryAddress: {
            street1: 'Richmond Rd.',
            street2: 'Banasvadi 3rd stage',
            city: 'Bengaluru',
            pincode: 560032,
            mobile: 1234567890,
            landMark: 'Fotise hospital'
        }
    }
];