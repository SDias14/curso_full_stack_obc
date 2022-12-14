class Product{

    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
       this.inStock += quantity
    }

    calculateDiscount(percentage){


        return `O valor com desconto de 50% é : R$ ${this.price * percentage} reais`

     
        
    }
}

const product1 = new Product('Coca-Cola','Refrigerante a base de coca', 8.5)

product1.addToStock(50)

console.log(product1)

product1.calculateDiscount(0.5)

console.log(product1.calculateDiscount(0.5))

