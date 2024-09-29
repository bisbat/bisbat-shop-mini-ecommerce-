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
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button class="btn btn-primary" @click="goToHome">Get Started</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
