<template>
    <div :class="{ mobile: isMobile}">
        {{ name }}
    </div>
</template>

<script setup>
defineProps({
    name: String,
    link: String,
    isMobile: Boolean
})
</script>

<style scoped>
div {
    display: inline-block;
    font-size: 15px;
    margin-left: 20px;
    cursor: pointer;
}

.mobile {
    margin: 0 0 0 10px;
    padding: 10px;
}
</style>