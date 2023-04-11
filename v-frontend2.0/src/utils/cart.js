const cartMethods = {
    getCart: function() {
        return JSON.parse(localStorage.getItem('cart')) || []
    },
    addToCart: function(product) {
        const cart = this.getCart()
        const productExist = cart.find((item) => item.id === product.id)
        if (!productExist) {
            cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
    },
    removeFromCart: function(product) {
        const cart = this.getCart()
        const updatedCart = cart.filter((item) => item.id !== product.id)
        localStorage.setItem('cart', JSON.stringify(updqatedCart))
    },
    removeFromCartById: function(id) {
        const cart = this.getCart()
        const updatedCart = cart.filter((item) => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updqatedCart))
    },
    clearCart: function() {
        localStorage.removeItem('cart')
    },
    getCartTotal: function() {
        const cart = this.getCart()
        const total = cart.reduce((acc, item) => {

        }, 0)
        return total
    }
}
export default cartMethods;