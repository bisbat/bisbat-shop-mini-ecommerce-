<script setup lang="ts">
import { useRouter } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue';

const router = useRouter();

const goToHome = () => {
    router.push({ name: 'home' });
};
</script>

<template>
    <div>
        <UserLayout/>
        <div class="hero bg-gray-100 min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Welcome to Our Furniture Shop</h1>
                    <p class="py-6">
                        Discover timeless pieces for your home. From modern to classic designs, we provide high-quality furniture to elevate your living space.
                    </p>
                    <button class="btn btn-primary" @click="goToHome">Start Shopping</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
