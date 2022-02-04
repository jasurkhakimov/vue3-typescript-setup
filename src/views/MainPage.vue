<template>
    <div>
        hello ts
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: "MainPage",
    mounted() {
        console.log(this.$http.defaults);
    }
});

</script>

<style scoped>

</style>