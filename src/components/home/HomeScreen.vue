<script setup>

import DownloadButton from "./DownloadButton.vue";
import GitHubButton from "./GitHubButton.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import ProfileCard from "./ProfileCard.vue";
import {getProfiles} from "./profile.js";

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const currentHeroImage = ref(0)
setInterval(() => {
    currentHeroImage.value++
}, 5000)

const isMobile = ref(innerWidth <= 1200)
const resize = () => {
    isMobile.value = innerWidth <= 1200
}

onBeforeUnmount(() => {
        window.removeEventListener('resize', resize)
    }
)

const heroImageIntersecting = ref(false)

const searchContentIntersect = ref(0)

const profiles = shuffle(getProfiles())

onMounted(() => {
    window.addEventListener('resize', resize)
    const observer = new IntersectionObserver((entries) => {
        if (heroImageIntersecting.value === false) heroImageIntersecting.value = entries[0].isIntersecting
    }, {
        threshold: 0.5
    })
    observer.observe(document.querySelector('#hero_image_description'))

    const observer2 = new IntersectionObserver((entries) => {
        let done = false;
        entries.forEach(entry => {
            if (entry.isIntersecting && !done) {
                if (entry.target.id === "search_promotion_content_2_content") {
                    searchContentIntersect.value = 2
                    done = true
                }
                else if (entry.target.id === "search_promotion_content_2_header") searchContentIntersect.value = 1
                else if (entry.target.id === "search_promotion_content_1_header") searchContentIntersect.value = 0
            }
        })
    }, {
        threshold: 0.5
    })

    observer2.observe(document.querySelector('#search_promotion_content_1_header'))
    observer2.observe(document.querySelector('#search_promotion_content_2_header'))
    observer2.observe(document.querySelector('#search_promotion_content_2_content'))
})
</script>

<template>
    <div id="content">
        <div id="heading">
            <h1>VPlanPlus für <span id="header_android">Android</span></h1>
            <h2>Client für Stundenplan24.de</h2>
        </div>
        <div style="flex-flow: row; display: flex">
            <DownloadButton></DownloadButton>
            <span
                style="margin-left: 20px; font-size: 30px; font-family: sans-serif; line-height: 50px; font-weight: lighter; user-select: none">|</span>
            <GitHubButton></GitHubButton>
        </div>
        <div style="display: flex; flex-flow: column">
            <div id="hero_image">
                <div style="position: relative">
                    <img src="../../assets/start/sc1.png" alt="" :class="{visible: currentHeroImage % 3 === 0}">
                    <img src="../../assets/start/sc2.png" alt="" :class="{visible: currentHeroImage % 3 === 1}">
                    <img src="../../assets/start/sc3.png" alt="" :class="{visible: currentHeroImage % 3 === 2}">
                </div>
            </div>
        </div>
        <div style="display: flex; flex-flow: row" id="hero_image_description" :class="{hero_image_description_up: heroImageIntersecting}">
            <div>
                <h3 v-if="currentHeroImage % 3 !== 2">Pläne für alle.</h3>
                <h3 v-else>Pläne für alles.</h3>
                <div :class="{big: currentHeroImage % 3 === 0, hero_image_description: true}">
                    <span>Klassenpläne</span>
                    <div class="hero_image_description_box">
                        Wähle deine Fächer aus und erhalte deinen persönlichen Stundenplan ohne unnötige
                        Benachrichtigungen
                        über dich nicht betreffende Stunden.
                    </div>
                </div>
                <div :class="{big: currentHeroImage % 3 === 1, hero_image_description: true}">
                    <span>Lehrerpläne</span>
                    <div class="hero_image_description_box">
                        Bist du Lehrer? Dann schau, wen du wo als nächstes unterrichten wirst.
                    </div>
                </div>
                <div :class="{big: currentHeroImage % 3 === 2, hero_image_description: true}">
                    <span>Raumpläne</span>
                    <div class="hero_image_description_box">
                        Hängst du besonders an einem Raum? Dann kannst du dir auch nur die Pläne für diesen Raum
                        anzeigen
                        lassen.
                    </div>
                </div>
            </div>
        </div>
        <div id="search_promotion">
            <div id="search_promotion_content">
                <div style="height: 100dvh; position: relative;">
                    <div id="search_promotion_content_main_image">
                        <img src="../../assets/start/sc4a.png" alt="" :class="{ visible: true }">
                        <img src="../../assets/start/sc4b.png" alt="" :class="{ visible: searchContentIntersect === 1 }">
                        <img src="../../assets/start/sc4c.png" alt="" :class="{ visible: searchContentIntersect === 2 }">
                    </div>
                </div>
                <div style="z-index: 5; text-align: center; position: absolute">
                    <div style="min-height: 100dvh">
                        <h2 style="margin-top: 50px;text-align: center; width: 100dvw" id="search_promotion_content_1_header">Die Suche für alles.</h2>
                        <div>
                            Finde schnell einen Lehrer oder einen Raum, indem du einfach den Namen eingibst.
                        </div>
                    </div>
                    <h2 style="margin-top: 50px;text-align: center; width: 100dvw" id="search_promotion_content_2_header">Finde einen Raum in deiner Freistunde.</h2>
                    <div id="search_promotion_content_2_content" style="margin-top: 50px;">
                        Ganz ohne eine Klasse zu stören.
                    </div>
                </div>
            </div>
        </div>
        <div id="profile_promotion">
            <div id="profile_promotion_scroller_wrapper">
                <div id="profile_promotion_scroller">
                    <div class="scroll_row_to_left">
                        <div>
                            <ProfileCard v-for="n in 40" :key="n" :name="profiles[n%20].name" :type="profiles[n%20].type" style="flex: 1 0 auto;" />
                        </div>
                    </div>
                    <div class="scroll_row_to_right" v-show="!isMobile">
                        <div>
                            <ProfileCard v-for="n in 40" :key="n" :name="profiles[n%20+20].name" :type="profiles[n%20+20].type" style="flex: 1 0 auto;" />
                        </div>
                    </div>
                    <div class="scroll_row_to_left" v-show="!isMobile">
                        <div>
                            <ProfileCard v-for="n in 40" :key="n" :name="profiles[n%20+40].name" :type="profiles[n%20+40].type" style="flex: 1 0 auto;" />
                        </div>
                    </div>
                </div>
            </div>
            <div style="padding: 20px; display: flex; width: calc(100dvw - 40px); justify-content: center; flex-flow: column; align-items: center; text-align: center">
                <h2>So viele Profile wie du möchtest</h2>
                <p style="text-align: justify">
                    Profile können für verschiedene Schulen angelegt werden.
                </p>
                <h3>Kalendersynchronisierung</h3>
                <p>
                    Synchronisiere deinen Stundenplan mit deinem Kalender.<br>
                    <u>Tipp</u>: Verwende einen Cloud Kalender um deinen Plan auch auf anderen Geräten zu sehen.
                </p>
                <h3>Benachrichtigungen</h3>
                <p style="width: 80%">
                    Erhalte Benachrichtigungen über Änderungen in deinem Plan. Ändern sich Stunden, welche dich nicht betreffen, erhältst du keine Benachrichtigung. Schalte Benachrichtigungen zu Profilen über Android Benachrichtigungskanäle ein oder aus.
                </p>
                <img src="../../assets/start/sc5.png" alt="" style="max-height: 300px; margin: 20px">
            </div>
        </div>
    </div>
</template>

<style scoped>
#content {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

#heading {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100dvw;
    text-align: center;
}

#hero_image {
    filter: opacity(0);
    box-shadow: 5px 5px 20px #c9c9c9,
    -5px -5px 20px #c9c9c9;
    animation: hoverIn 2s ease-out forwards;
}

@media screen and (max-width: 1200px) {
    /* small screens*/
    #hero_image {
        position: relative;
        height: 60dvh;
        aspect-ratio: 1080 / 2262;
    }

    #hero_image > div {
        position: sticky;
    }

    #hero_image > div > img {
        height: 60dvh;
        object-fit: cover;
    }

    #hero_image_description {
        position: relative;
        height: 60dvh;
        box-shadow: 5px 5px 20px #c9c9c9,
        -5px -5px 20px #c9c9c9;
        min-width: 60dvw !important;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        transition: 1s;
        padding: 20px;
    }

    .hero_image_description_up {
        transform: translateY(-200px);
    }
}

@media screen and (min-width: 1200px) {
    /* big screens */
    #hero_image > div > img {
        transform: rotateX(40deg) rotateZ(-30deg) rotateY(10deg);
    }

    #hero_image {
        position: absolute;
        top: 20dvh;
        left: 20%;
        z-index: -5;
    }

    #hero_image_description {
        margin-top: 80px;
        margin-left: 160px;
        transition: 1s;
        min-height: 50dvh;
    }
}

@keyframes hoverIn {
    0% {
        top: 15dvh;
        filter: opacity(0);
    }
    100% {
        top: 10dvh;
        filter: opacity(1);
    }
}

#hero_image > div > img {
    position: absolute;
    max-height: 80dvh;
    z-index: -5;
    border-radius: 20px;
    opacity: 0;
    transition: filter 2s, opacity 2s;
}

#hero_image > div > img.visible {
    opacity: 1;
}

h1 {
    font-size: 3.5rem;
    font-weight: bold;
    width: 80dvw;
    margin-bottom: 0;
    line-height: 3rem;
}

h2 {
    font-size: 2.55rem;
    line-height: 2.1rem;
    font-weight: normal;
    width: 80dvw;
    margin-top: 0;
}

#header_android {
    color: transparent;
    background: linear-gradient(to right, #1f8f56, #3ddc84);
    background-clip: text;
}

#hero_image_description {
    width: 300px;
}

.hero_image_description > span {
    transition: 1s;
    border-bottom: 1pt solid transparent;
}

.big > span {
    font-size: 2rem;
    border-bottom: 1pt solid #1f1f1f;
}

.big > .hero_image_description_box {
    height: 150px;
    overflow: hidden;
}

.hero_image_description_box {
    height: 0;
    transition: height 1s;
    overflow: hidden;
    display: flex;
    align-items: center;
}

#search_promotion {
    width: 100dvw;
    margin: 0;
}

#search_promotion_content {
    background: #1f8f56;
    margin: 0;
    color: whitesmoke;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-items: center;
    min-height: 200dvh;
    z-index: 5 !important;
}

#search_promotion_content_main_image {
    position: sticky;
    top: 0;
}

#search_promotion_content_main_image > img {
    max-height: 80dvh;
    filter: brightness(0.8);
    object-fit: cover;
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    border-radius: 20px;
    transform: translateX(-50%) perspective(1000px) rotateX(45deg);
    margin-top: -90px;
    opacity: 0;
    transition: opacity 1s;
}

.visible {
    opacity: 1 !important;
}

#profile_promotion {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100dvw;
}

#profile_promotion > h2 {
    text-align: center;
    margin-top: 40px;
}

#profile_promotion_scroller_wrapper {
    width: 100dvw;
    overflow: hidden;
}

#profile_promotion_scroller {
    width: 100dvw;
}

.scroll_row_to_left, .scroll_row_to_right {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    overflow-x: clip;
}

.scroll_row_to_left > div:first-of-type, .scroll_row_to_right > div:first-of-type {
    display: flex;
}

.scroll_row_to_left > div:first-of-type {
    animation: scrollRowToLeft 25s linear infinite;
}

.scroll_row_to_right > div:first-of-type {
    animation: scrollRowToRight 30s linear infinite;
}

@keyframes scrollRowToLeft {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@keyframes scrollRowToRight {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0%);
    }
}
</style>