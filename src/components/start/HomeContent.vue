<script setup>
import {onMounted, ref} from "vue";

import imageA0 from "../../assets/start/sc_a.png";
import imageB0 from "../../assets/start/sc_b0.png";
import imageB1 from "../../assets/start/sc_b1.png";
import imageB2 from "../../assets/start/sc_b2.png";
import imageC0 from "../../assets/start/sc_c0.png";
import imageD0 from "../../assets/start/sc_d0.png";

import IntroSection from "./sections/IntroSection.vue";
import SearchEverything from "./sections/SearchEverything.vue";
import FindUnoccupiedRoom from "./sections/FindUnoccupiedRoom.vue";
import Profiles from "./sections/Profiles.vue";

const contents = [
    {
        title: "VPlanPlus",
        content: IntroSection,
        images: [
            imageA0
        ],
        background: "#6e8bb0"
    },
    {
        title: "Finde den Plan. Für Alles, was du brauchst.",
        content: SearchEverything,
        images: [
            imageB0,
            imageB1,
            imageB2
        ],
        background: "#6e9e8b"
    },
    {
        title: "Freistunde? Kein Problem!",
        content: FindUnoccupiedRoom,
        images: [
            imageC0
        ],
        background: "#9e6e8b"
    },
    {
        title: "Profile für wirklich alles.",
        content: Profiles,
        images: [
            imageD0
        ],
        background: "#8b6e9e"
    }
]

const currentSection = ref(0);

onMounted(() => {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: .5
    }

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                currentSection.value = contents.indexOf(contents.find(content => content.title === entry.target.querySelector("h1").innerText))
                document.querySelector("#home_content").style.backgroundColor = contents[currentSection.value].background
            }
        })
    }, options)

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section)
    })
});
</script>

<template>
    <div id="home_content">
        <div id="home_content_main">
            <section v-for="content in contents" :key="content">
                <h1>{{ content.title }}</h1>
                <component :is="content.content"/>
            </section>
        </div>
        <div id="main_image_wrapper">
            <img v-for="content in contents" :key="content" :src="content.images[0]"
                 :class="{main_image: true, visible: content === contents[currentSection]}" alt="VPP Image">
        </div>
    </div>
</template>

<style scoped>
#home_content {
    display: flex;
    transition: background-color 0.5s ease-in-out;
}

#main_image_wrapper {
    position: sticky;
    display: flex;
    top: 80px;
    bottom: 80px;
    align-content: center;
    height: calc(100vh - 2 * 80px);
    margin-left: 10px;
    width: calc((100vh - 2 * 80px) / 2);
}

.main_image {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.visible {
    opacity: 1;
}

@media screen and (max-width: 480px) {
    #main_image_wrapper {
        top: 80px;
        left: 0;
        display: inline-flex;
        width: 100vw;
        align-items: center;
        justify-content: center;
    }

    .main_image {
        filter: brightness(0.3);
    }

    section {
        margin-left: 10px !important;
    }
}

section {
    min-height: calc(100dvh - 80px);
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-left: 80px;
}
</style>