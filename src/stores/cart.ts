import { defineStore } from 'pinia'
import type { Product } from '@/interfaces/Product'

export const useCartStore = defineStore('cart', {
    state:()=>({
        items:[],
    }),
    getters:{
        totalPrice(state: { items: Product[] }) {
            return state.items.reduce((acc, item) => acc + item.price*item.quantity, 0)
        }
    },
    actions:{
        loadCart(){
            const cart = localStorage.getItem('cart')
            if(cart){
                this.items = JSON.parse(cart)
            }
        },
        addToCart(product:Product, quantity:number){
            const item = this.items.find((item) => item.id === product.id)
            if(item){
                item.quantity += quantity
            }else{

                this.items.push({...product, quantity: quantity})
            }
            localStorage.setItem('cart', JSON.stringify(this.items))
        },
        deleteToCart(product:Product, quantity:number){
            const item = this.items.find((item) => item.id === product.id)
            if(item){
                item.quantity -= quantity
            }else{
                this.items.push({...product, quantity: quantity})
            }
            localStorage.setItem('cart', JSON.stringify(this.items))
        },
        removeFromCart(product:Product){
            this.items = this.items.filter((item) => item.id !== product.id)
            localStorage.setItem('cart', JSON.stringify(this.items))
        },
    }
})
