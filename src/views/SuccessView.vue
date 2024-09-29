<script setup lang="ts"></script>

<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-lg p-8 text-center">
            <h1 class="text-3xl font-semibold text-green-600 mb-4">
                Order Successful!
            </h1>
            <p class="text-gray-700 mb-4">
                We have received your order. Thank you for shopping with us!
            </p>
            <div>
                <router-link
                    to="/home"
                    class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                    Go back to Home
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
