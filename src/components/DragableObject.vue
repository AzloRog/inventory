<script lang="ts">


export default {
    props: {
        id: { type: Number, required: true },
        ownerId: { type: Number, required: true },
        iconUrl: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        count: { type: Number, required: true },
        onDragStarted: { type: Function, required: true }
    },
    setup(props) {


    }
}
</script>

<template>
    <div class="dragable-object" @dragstart="onDragStarted($event, ownerId)" draggable="true">
        <img :src="iconUrl" :alt="name" height="50" width="50" />
        <span class="dragable-object-count">{{ count }}</span>

    </div>
</template>

<style scoped lang="scss">
.dragable-object-count {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>