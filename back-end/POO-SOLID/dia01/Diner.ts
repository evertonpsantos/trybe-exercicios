class Client {
    constructor(private _name: string) {}

    public get name() {
        return this._name;
    }
}

class Product {
    constructor(private _product: string, private _price: number) {}

    public get price() {
        return this._price;
    }
}

class Order {
    constructor(private _client: Client, 
    private _products: Product[],
    private _payment: string,
    private _discount?: number
    ) {}

    public set discount(discount: number) {
        if (discount < 0) throw new Error('Must be a positive number');
        this._discount = discount;
    }

    orderTotal() {
        const totalPrices = this._products.reduce((acc, curr) => acc + curr.price, 0);
        if (this._discount) {
            return totalPrices * (1 - this._discount);
        }

        return totalPrices;
    }
}