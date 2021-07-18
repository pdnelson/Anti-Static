<template>
    <div>{{song.name}}</div>
</template>

<script>
export default {
    props: {
        song: {
            type: Object
        }
    }
};
</script>

<style scoped>
</style>