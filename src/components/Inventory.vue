<script setup lang="ts">
import InventoryLeftSideBar from './InventoryLeftSideBar.vue';
import placeholderImage from "../images/SidebarPlaceholder.jpg"
import InventoryGrid from './InventoryGrid.vue';

</script>

<template>
    <div class="inventory">
        <InventoryLeftSideBar class="inventory-left-sidebar" :imageSource="placeholderImage" title="Sidebar"
            bodyText="lorem8" />
        <InventoryGrid class="inventory-grid" />
    </div>
</template>

<style scoped lang="scss">
.inventory {
    width: 1000px;
    height: 620px;
    padding: 20px;
    border: 2px solid var(--inventory-border);

    display: grid;
    gap: 24px;
    grid-template-columns: 35% auto;
}

.inventory-left-sidebar {}

.inventory-grid {}
</style>