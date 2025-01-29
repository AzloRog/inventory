<script setup lang="ts">
defineProps<{
    imageSource: string,
    title: string,
    bodyText: string
}>()
</script>

<template>
    <aside class="sidebar">
        <div class="sidebar-image">
            <img :src="imageSource" alt="#" />
        </div>
        <div class="sidebar-body">
            <h2 class="sidebar-body_title">{{ title }}</h2>
            <p class="sidebar-body_text">{{ bodyText }}</p>
        </div>

    </aside>

</template>

<style scoped lang="scss">
.sidebar {
    padding: 14px 18px;
    background: var(--inventory);
    border: 1px solid var(--inventory-border);
    border-radius: 8px;

    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--inventory-border) var(--surface);

}

.sidebar-image {
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.sidebar-body {
    padding-top: 24px;
    text-align: center;



    &_text {
        padding-top: 16px;
        line-height: 1.6em;
    }
}
</style>