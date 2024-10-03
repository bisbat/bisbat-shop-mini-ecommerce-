<script setup>
import { useRouter } from 'vue-router'
import Userlayout from '@/layouts/UserLayout.vue'
import { ref } from 'vue'

const router = useRouter()
const address = ref('')
</script>

<template>
    <Userlayout />
    <div class="container mx-auto p-4">
        <!-- Address and Payment Section -->
        <div class="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 class="text-2xl font-semibold mb-4">Checkout</h2>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="address"
                    >Shipping Address</label
                >
                <input
                    type="text"
                    id="address"
                    required
                    v-model="address"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    :class="{ 'border-red-500': !address }"
                    placeholder="Enter your address"
                />
                <p
                    v-if="!address"
                    class="text-red-500 text-xs italic"
                >
                    Please enter your address.
                </p>
            </div>
            <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="payment-method"
                    >Payment Method</label
                >
                <select
                    id="payment-method"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="credit-card">Bank Transfer</option>
                    <option value="paypal">Credit Card</option>
                    <option value="bank-transfer">True money</option>
                </select>
            </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end mt-6">
            <button
                class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                @click="router.push('/success')"
                :class="{ 'cursor-not-allowed disabled': !address }"
                :disabled="!address"
            >
                Confirm Payment
            </button>
        </div>
    </div>
</template>

<style scoped></style>
