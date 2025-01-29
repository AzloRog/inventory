<script setup lang="ts">
import InventoryLeftSideBar from './InventoryLeftSideBar.vue';
import placeholderImage from "../images/SidebarPlaceholder.jpg"
import InventoryGrid from './InventoryGrid.vue';
import InventoryBottomBar from './InventoryBottomBar.vue';

</script>

<template>
    <div class="inventory">
        <InventoryLeftSideBar class="inventory-left-sidebar" :imageSource="placeholderImage" title="Sidebar"
            bodyText="lorem8" />
        <InventoryGrid class="inventory-grid" />
        <InventoryBottomBar class="inventory-bottom" :data="null" :isLoading="true" />
    </div>
</template>

<style scoped lang="scss">
.inventory {
    width: 1000px;
    height: 820px;
    padding: 20px;
    border: 2px solid var(--inventory-border);

    display: grid;
    gap: 24px;
    grid-template-columns: 35% auto;
    grid-template-rows: auto 13%;
}

.inventory-left-sidebar {}

.inventory-grid {}

.inventory-bottom {
    grid-column-start: 1;
    grid-column-end: 3;
}
</style>