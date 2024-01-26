<script setup>

import {ref} from "vue";

defineProps(
    {
        color: String,
        background: String,
        text: String,
        link: String,
        cta: String,
    }
)

let visible = ref(true)
</script>

<template>
    <div id="banner" v-show="visible">
        {{ text }}
        <div>
            <div><a :href="link">{{ cta }}</a></div>
            <div @click="visible = false">X</div>
        </div>
    </div>
</template>

<style scoped>
#banner {
    transform: translateY(-200px);
    padding: 10px;
    color: v-bind(color);
    background-color: v-bind(background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: fade-in 1s ease-in-out forwards;
}

@keyframes fade-in {
    0% {
        transform: translateY(-200px);
    }
    100% {
        transform: translateY(0px);
    }
}

#banner div {
    display: flex;
    width: fit-content;
}

#banner div div {
    display: flex;
    align-items: center;
    padding: 3px;
    border: 2px solid v-bind(color);
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    margin-left: 5px;
}

a {
    color: v-bind(color);
}
</style>