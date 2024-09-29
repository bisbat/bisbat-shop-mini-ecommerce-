<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

const router = useRouter();
const searchInput = ref('');
const emit = defineEmits(['update-search']);

// Watch for changes in search input and emit the event
const handleInput = () => {
  emit('update-search', searchInput.value); // Emit the event with the input value
};

const goToHome = () => {
    router.push({ name: 'home' });
};
</script>

<template>
    <div>
        <div class="navbar bg-neutral">
            <div class="flex-1" @click="goToHome">
                <a class="btn btn-ghost text-xl text-white">Bisbat Shop</a>
            </div>
            <div class="flex-none">
                <div class="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        v-model="searchInput"
                        @input="handleInput"
                        class="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div class="dropdown dropdown-end">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost btn-circle"
                    >
                        <div class="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-white"
                                @click="router.push({ name: 'cart' })"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span class="badge badge-sm indicator-item">{{ cartStore.items.length }}</span>
                        </div>
                    </div>
                </div>
                <div class="dropdown dropdown-end">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost btn-circle avatar"
                    >
                        <div class="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
