class Client {
    constructor(private _name: string) {}

    public get name() {
        return this._name;
    }
}

class Product {
    constructor(private _product: string, private _price: number) {}
}

class Order {
    private _discount?: number = 0.0;


    constructor(private _client: Client, 
    private _products: Product[],
    private _payment: string,
    private _hasDiscount: boolean
    ) {}

    public set discount(discount: number) {
        if (discount < 0) throw new Error('Must be a positive number');
        this._discount = discount;
    }
}