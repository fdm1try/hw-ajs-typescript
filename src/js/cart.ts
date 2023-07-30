import Buyable from './buyable';

export default class Cart {
    private _items: Buyable[] = [];

    get items(): Buyable[] {
        return [...this._items];
    }

    add(item: Buyable): void {
        this._items.push(item);
    }    

    remove(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }

    get totalPrice(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    getTotalPriceWithDiscount(discount: number): number {
        if (discount >= 100) {
            return 0;
        }
        return this._items.reduce((total, item) => {
            const priceWithDiscount = item.price - (item.price * (discount / 100));
            return total + priceWithDiscount;
        }, 0);
    }
}