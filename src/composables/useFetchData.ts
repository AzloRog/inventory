import { ref } from "vue"

export function useFetchData(url: string) {
    const isLoading = ref<boolean>(false)
    const isError = ref<boolean>(false)
    const data = ref<object | null>(null)

    isLoading.value = true

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            data.value = json
            isLoading.value = false
        })
        .catch((err) => {
            isError.value = true
            isLoading.value = false
            console.log(err)
        })


    return {data, isLoading, isError}


}