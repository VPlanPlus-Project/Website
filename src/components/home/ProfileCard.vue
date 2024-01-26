<script setup>
defineProps(
    {
        name: String,
        type: String,
    }

)
</script>

<template>
<div class="profile_card">
    <div class="profile_card_name">{{ name }}</div>
    <div class="profile_card_type" v-if="type === 'c'">Klasse</div>
    <div class="profile_card_type" v-else-if="type === 't'">Lehrer</div>
    <div class="profile_card_type" v-else-if="type === 'r'">Raum</div>
</div>
</template>

<style scoped>
.profile_card {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #c9c9c9, -5px -5px 10px #c9c9c9;
    backdrop-filter: blur(10px);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

.profile_card * {
    flex-wrap: nowrap;
    text-wrap: avoid;
    overflow: hidden;
}

.profile_card_name {
    font-size: 30px;
}
</style>