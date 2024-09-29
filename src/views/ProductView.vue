<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import { products } from '@/data/products'
import { useRoute,useRouter } from 'vue-router'
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()
const productId = route.params.id
const product = products.find((product) => product.id === Number(productId))
const quantity = ref(1);

const minusQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--  
    }
}

const plusQuantity = () => {
    if (product && quantity.value < product.inStock) {
        quantity.value++
    }
}


const addToCart = (product: any, quantity: number) => {
    cartStore.addToCart(product, quantity)
    router.push({ name: 'cart' })
}

const buyNow = (product: any, quantity: number) => {
    router.push({ name: 'checkout', query: { product: product.id, quantity } })
    console.log('Buying now:', product, quantity)
}
</script>

<template>
    <div>
        <UserLayout />
        <div class="container mx-auto mt-8">
            <div class="flex flex-col lg:flex-row gap-10">
                <!-- Product Image -->
                <div class="w-full lg:w-1/2">
                    <img
                        class="rounded-lg shadow-lg w-full h-auto object-cover"
                        :src="product?.image"
                        :alt="product?.name"
                    />
                </div>

                <!-- Product Details -->
                <div class="w-full lg:w-1/2">
                    <h1 class="text-4xl font-bold mb-4">{{ product?.name }}</h1>
                    <p class="text-lg text-gray-600 mb-4">
                        {{ product?.description }}
                    </p>
                    <p class="text-2xl font-semibold text-green-600 mb-4">
                        Price: ${{ product?.price }}
                    </p>

                    <!-- Quantity controls -->
                    <div class="flex items-center mb-4">
                        <button
                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                            @click="minusQuantity"
                            >
                            -
                        </button>
                        <div class="mx-4 text-lg">{{ quantity }}</div>
                        <button
                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                            @click="plusQuantity"
                            >
                            +
                        </button>
                    </div>

                    <!-- Stock information -->
                    <div class="text-lg text-gray-500 mb-6">
                        In stock: {{ product?.inStock }}
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-4">
                        <button
                            class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                            @click="addToCart(product, quantity)"
                            >
                            Add to Cart
                        </button>
                        <button
                            class="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                            @click="buyNow(product, quantity)"
                            >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
