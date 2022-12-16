module.exports = class Order {
 #total;
 #items;
 #user;

    constructor(items, user) {
        items.forEach(({product, quantity}) => {
            if(quantity > product.inStock) {
                throw new Error('Insufficient stock');
            } 
        });
        
        
        
        
        this.#items = items;
        this.#user = user;
        this.#total = items.reduce((total, {product, quantity}) => {
            return total + (product.price * quantity);
        }, 0);



        
    } 

    

    get ()  {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total

        }
    }

}