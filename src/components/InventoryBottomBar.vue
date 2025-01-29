<script setup lang="ts">
import CustomSkeleton from './CustomSkeleton.vue';

defineProps<{
    data: object | null,
    isLoading: boolean
}>()
</script>

<template>
    <div class="bottomBar">
        <div v-if="!isLoading">
            {{ data }}
        </div>
        <CustomSkeleton v-else height="100%" width="100%" style="border-radius: 8px;" />
    </div>
</template>

<style scoped lang="scss">
.bottomBar {
    border: 2px solid var(--inventory-border);
    background-color: var(--inventory);

    padding: 18px 24px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--inventory-border) var(--surface);
    line-height: 1.4em;

}
</style>