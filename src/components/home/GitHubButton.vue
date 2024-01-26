<script setup>
import img from "../../assets/github-mark.svg";
import imgLoading from "../../assets/loading.svg";
import {ref} from "vue";

const loading = ref(false)

const github = () => {
    loading.value = true
    window.location.href = 'https://github.com/Julius-Babies/VPlanPlus'

    setTimeout(() => {
        loading.value = false
    }, 3000)
}
</script>

<template>
    <div id="gh" @click="github()">
        <div style="display: flex; justify-content: center; align-items: center" v-if="!loading">
            <img :src="img">
            Quellcode
        </div>
        <div v-else>
            <img :src="imgLoading" height="100px" id="loading">
        </div>
    </div>
</template>

<style scoped>
img {
    margin: 3px 10px 3px 3px;
    height: 25px;
}

#gh {
    width: 140px;
    backdrop-filter: blur(10px);
    justify-content: center;
    display: flex;
    align-items: center;
    user-select: none;
    padding: 10px 20px;
    box-shadow: 5px 5px 10px #c9c9c9,
    -5px -5px 10px #c9c9c9;

    height: 30px;
    font-size: 20px;
    border-radius: 10px;
    transition: .5s;
    border: 5px solid transparent;
    cursor: pointer;

    margin-left: 20px;
}

#gh:hover {
    box-shadow: 5px 5px 20px #9B9B9BFF,
    -5px -5px 20px #9b9b9b;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    24% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(90deg);
    }

    49% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    74% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    99% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }

}

#loading {
    animation: rotate .5s infinite linear;
}
</style>