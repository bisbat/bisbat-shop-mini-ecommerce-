<script setup lang="ts">
import { useRouter } from 'vue-router'
import {useCartStore} from '@/stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const goToHome = () => {
    cartStore.clearCart();
    router.push({ name: 'home' })
}
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-lg p-8 text-center">
            <h1 class="text-3xl font-semibold text-green-600 mb-4">
                Order Successful!
            </h1>
            <p class="text-gray-700 mb-4">
                We have received your order. Thank you for shopping with us!
            </p>
            <div class="bg-neutral text-white font-bold py-2 px-4 rounded hover:bg-neutral-800 focus:outline-none focus:shadow-outline" @click="goToHome">Go back to Home</div>
        </div>
    </div>
</template>

<style scoped></style>
