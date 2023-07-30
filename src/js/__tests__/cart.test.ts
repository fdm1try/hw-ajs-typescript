import Cart from "../cart";
import Movie from "../movie";

test('Add items to cart', () => {
    const cart = new Cart();
    const movieItem = new Movie(1, 1000, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
    const bookItem = { id: 2, name: 'Война и мир', price: 5000};
    cart.add(movieItem);
    cart.add(bookItem);
    expect(cart.items).toEqual([movieItem, bookItem]);
});

test('Remove item from cart', () => {
    const cart = new Cart();
    const movieItem = new Movie(1, 1000, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
    const bookItem = { id: 2, name: 'Война и мир', price: 5000};
    cart.add(movieItem);
    cart.add(bookItem);
    cart.remove(1);
    expect(cart.items).toEqual([bookItem]);
});

test('Calculating the total amount of the cart without a discount', () => {
    const cart = new Cart();
    const movieItem = new Movie(1, 1000, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
    const bookItem = { id: 2, name: 'Война и мир', price: 5000};
    cart.add(movieItem);
    cart.add(bookItem);
    expect(cart.totalPrice).toBe(6000);
});

test('Calculating the total amount of the cart with a discount', () => {
    const cart = new Cart();
    const movieItem = new Movie(1, 1000, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
    const bookItem = { id: 2, name: 'Война и мир', price: 5000};
    cart.add(movieItem);
    cart.add(bookItem);
    const totalPrice = cart.getTotalPriceWithDiscount(50);
    expect(totalPrice).toBe(3000);
});

test('If the discount is more than or equal to 100%, the total amount of the basket is 0', () => {
    const cart = new Cart();
    const movieItem = new Movie(1, 1000, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
    const bookItem = { id: 2, name: 'Война и мир', price: 5000};
    cart.add(movieItem);
    cart.add(bookItem);
    const totalPrice = cart.getTotalPriceWithDiscount(100);
    expect(totalPrice).toBe(0);
});
