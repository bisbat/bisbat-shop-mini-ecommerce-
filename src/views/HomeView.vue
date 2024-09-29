<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { products } from '@/data/products';

const router = useRouter();

const furnitureTypes = Array.from(new Set(products.map(product => product.type)))
const selectedFurnitureType = ref<string>('')
const searchInput = ref('');

// Handle the custom event from child component
const handleSearchUpdate = (newSearchValue: string) => {
    searchInput.value = newSearchValue;
};

const filteredProducts = computed(() => {
    let filtered = products;
    
    // Filter by selected type
    if (selectedFurnitureType.value !== '') {
        filtered = filtered.filter(product => product.type === selectedFurnitureType.value);
    }
    
    // Filter by search input
    if (searchInput.value !== '') {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
    }
    
    return filtered;
});

const buyProduct = (productId:number) => {
    router.push({name: 'product',params: {id:productId}});
}

</script>

<template>
    <div>
        <UserLayout @update-search="handleSearchUpdate"/>
        <!-- Category Furnitures -->
        <div class="flex justify-between mt-5 mx-20">
            <button class="btn btn-outline" 
            @click="selectedFurnitureType = ''"
            :class="{ 'btn-active': selectedFurnitureType === '' }"
            >
                All
            </button>
            <button class="btn btn-outline" v-for="furniture in furnitureTypes" 
            @click="selectedFurnitureType = furniture"
            :class="{ 'btn-active': selectedFurnitureType === furniture }">
                {{ furniture }}
            </button>
        </div>
        <!-- Product List -->
        <div class="grid grid-cols-4 gap-4 mt-5 mx-20">
            <div class="card shadow-lg" v-for="product in filteredProducts" :key="product.id">
                <div class="card-body ">
                    <img
                        :src=product.image
                        alt="product"
                    />
                    <div class="card-title">{{ product.name }}</div>
                    <button class="btn btn-neutral" @click="buyProduct(product.id)">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</template>
