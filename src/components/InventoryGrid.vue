<script lang="ts">
import DragableObject from './DragableObject.vue';
import IconImage from "../images/ItemImage.svg"
import Placer from './Placer.vue';
import type { places } from '@/data/Items';
import { itemsData } from '@/data/Items';
import { computed, type PropType } from 'vue';

export default {
    props: {
        data: {
            type: Array as PropType<typeof places>,
            required: true
        }
    },
    components: {
        DragableObject
    },
    setup(props) {

        const startDrag = (event: DragEvent, itemId: number) => {
            event.preventDefault()
            console.log(event)
            event.dataTransfer!.effectAllowed = "move"
            event.dataTransfer!.dropEffect = "move"
            event.dataTransfer!.setData("itemId", itemId.toString())

        }

        const onDrop = (event: DragEvent, itemId: number) => {

            console.log("dropped")
            const draggableItemId = event.dataTransfer?.getData("itemId")
            props.data[itemId].containerItemId = Number(draggableItemId)
        }
        const getItemsFromPlaces = computed(() => {
            const places = props.data.map(place => {
                if (place.containerItemId != null) {
                    return itemsData.find(item => item.id == place.containerItemId)
                } else {
                    return
                }


            })
            return places.filter(item => item != undefined)
        })


        return {
            startDrag,
            onDrop,
            getItemsFromPlaces
        }
    }

}


</script>

<template>
    <div class="inventory-grid">
        <div class="inventory-grid-place" v-for="place in data" @drop="onDrop($event, place.id)" :key="place.id">
            <DragableObject v-if="place.containerItemId != null" v-bind="getItemsFromPlaces[place.containerItemId]"
                :ownerId="place.id" @dragStarted="startDrag" />



        </div>
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
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

}
</style>