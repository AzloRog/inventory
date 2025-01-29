<script setup lang="ts">
import { useFetchData } from '@/composables/useFetchData';
import CustomSkeleton from './CustomSkeleton.vue';


const { imageSource } = defineProps<{
    imageSource: string,
    title: string,
    bodyText: string
}>()

const { data, isError, isLoading } = useFetchData("https://jsonplaceholder.typicode.com/todos/1") //test api source

const toTestSkeleton = true // only for testing skeleton

</script>

<template>
    <aside class="sidebar" v-if="(!isLoading || !isError) && !toTestSkeleton">
        <div class="sidebar-image">
            <img :src="imageSource" alt="#" />
        </div>

        <div class="sidebar-body">
            <h2 class="sidebar-body_title">{{ title }}</h2>
            <p class="sidebar-body_text">{{ data }}</p>
        </div>

    </aside>
    <aside class="sidebar" v-else>
        <div class="sidebar-image">
            <img :src="imageSource" alt="#" />
        </div>

        <div class="sidebar-body sidebar-body_skeleton">
            <CustomSkeleton height="20px" width="120px" class="sidebar-body_title" />
            <div class="sidebar-body_text sidebar-body_skeleton-text">
                <CustomSkeleton height="10px" width="180px" />
                <CustomSkeleton height="10px" width="100px" />
                <CustomSkeleton height="10px" width="100px" />
                <CustomSkeleton height="10px" width="150px" />
                <CustomSkeleton height="10px" width="190px" />
                <CustomSkeleton height="10px" width="60px" />

            </div>

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
    margin-top: 24px;
    text-align: center;



    &_text {
        margin-top: 16px;
        line-height: 1.6em;
    }

    &_skeleton {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
    }
}
</style>