export interface Order {
    id: number;
    customerName: string;
    customerId: number;
    orderDescription?: string
    price?: number;
    status: number;
    deleteFlag: string;
}