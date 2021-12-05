app.service("cartService",function(){
    this.cart = [];
    this.total = 0;
    this.cartTotal = function(){
        this.total = 0;
        for(let item of this.cart){
            this.total  += item.product.price * item.quantity;
        }
        
    }
    this.updateCart = function(index){
        if(this.cart[index].quantity == 0){
            this.removeItem(index)
        }else{
            this.cartTotal();
            
        }
    }

    this.removeItem = function(index){
        if(this.cart.length < 0){
            return ;
        }
        console.log("This is the cart length", this.cart.length)
        this.cart.splice(index, 1);
        this.cartTotal();          

    }
    this.addToCart = function (product){
        if(this.cart.length > 0){
            for(let i = 0 ; i < this.cart.length; i++){
                if(angular.equals(this.cart[i].product, product)){
                    this.cart[i].quantity++;
                    this.cartTotal();
                    return
                }
            }
            this.cart.push({product: product, quantity: 1});
        }else{
            this.cart.push({product: product, quantity: 1});

        }
        this.cartTotal();
    }
})