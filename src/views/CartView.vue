<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import UserLayout from '@/layouts/UserLayout.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const cartStore = useCartStore()

onMounted(() => {
    cartStore.loadCart()
})

const goCheckout = () => {
    router.push({ name: 'checkout' })
}
</script>

<template>
    <div>
        <UserLayout />
        <div class="container mx-auto p-6">
            <h1 class="text-3xl font-semibold mb-6">Shopping Cart</h1>

            <!-- Cart Items -->
            <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <div v-if="cartStore.items.length > 0">
                    <div
                        v-for="product in cartStore.items"
                        :key="product.id"
                        class="flex justify-between items-center border-b pb-4 mb-4"
                    >
                        <div class="flex items-center">
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="w-24 h-24 object-cover rounded-md mr-4"
                            />
                            <div>
                                <h2 class="text-lg font-semibold">
                                    {{ product.name }}
                                </h2>
                                <p class="text-gray-600">
                                    Price: ${{ product.price }}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <button
                                class="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2"
                                @click="cartStore.deleteToCart(product,1)"
                            >
                                -
                            </button>
                            <span>{{ product.quantity }}</span>
                            <button
                                class="bg-gray-200 text-gray-600 rounded px-2 py-1 ml-2"
                                @click="cartStore.addToCart(product, 1)"
                            >
                                +
                            </button>
                            <!-- X Button to Remove Entire Product -->
                            <button
                                class="ml-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                                @click="cartStore.removeFromCart(product)"
                                aria-label="Remove Product"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p class="text-gray-500">Your cart is empty.</p>
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-semibold mb-4">Cart Summary</h2>
                <div class="flex justify-between mb-4">
                    <span class="text-lg">Total Items:</span>
                    <span class="text-lg">{{ cartStore.items.length }}</span>
                </div>
                <div class="flex justify-between mb-4">
                    <span class="text-lg font-semibold">Total Price:</span>
                    <span class="text-lg font-semibold"
                        >${{ cartStore.totalPrice }}</span
                    >
                </div>
                <button
                    class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    @click="goCheckout"
                    >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
