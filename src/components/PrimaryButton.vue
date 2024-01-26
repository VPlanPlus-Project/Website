<script setup>
defineProps(["title"])
</script>

<template>
<div class="button_primary">
    <span>{{ title }}</span>
</div>
</template>

<style scoped>
.button_primary {
    background: transparent;
    border: 1pt solid mediumseagreen;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
}
</style>