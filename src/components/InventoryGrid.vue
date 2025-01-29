<script setup lang="ts">
</script>

<template>
    <div class="inventory-grid">
        <div class="inventory-grid-place" v-for="item in 25"></div>
    </div>
</template>

<style scoped lang="scss">
.inventory-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 2px;

    background-color: var(--inventory-border);
    border: 1px solid var(--inventory-border);
    border-radius: 8px;
}

.inventory-grid-place {
    background-color: var(--inventory);

}
</style>