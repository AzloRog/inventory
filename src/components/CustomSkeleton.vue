<script setup lang="ts">
defineProps<{
    height: string,
    width: string,

}>()
</script>

<template>
    <div class="skeleton" :style="{ width: width, height: height }">

    </div>

</template>

<style lang="scss">
.skeleton {
    background: #555;
}
</style>