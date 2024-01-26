<script setup>
import Header from "./components/appbar/Header.vue";
import HomeContent from "./components/start/HomeContent.vue";
import HomeScreen from "./components/home/HomeScreen.vue";
</script>

<template>
    <div id="background"></div>
    <div id="root">
        <Header />
        <HomeScreen />
    </div>
</template>

<style scoped>
#background {
    filter: opacity(0);
    background-image: linear-gradient(135deg, #5671af, #ffffff);
    background-size: 500dvw 500dvh;
    background-position: 100dvw 100dvh;
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    z-index: -100;
    top: 0;
    left: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
    animation-delay: 1s;
}

@keyframes fadeIn {
    0% {
        filter: opacity(0);
    }

    100% {
        filter: opacity(1);
    }
}

#root {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    z-index: 2;
}
</style>
