export default class cartItem{
    constructor(product, quantity,id){
        this.cartItemId = id;
        this.quantity = quantity;
        this.productId = product.productId;
        this.desc = product.desc;
        this.price = product.price;
        this.available = product.available;
        this.rating = product.rating;
        this.img = product.img;
        this.comments = product.comments
    }
}