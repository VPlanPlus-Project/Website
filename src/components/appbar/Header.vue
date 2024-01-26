<script setup>
import {onBeforeUnmount, onMounted, ref, watchEffect} from "vue";
import MenuItem from "./MenuItem.vue";


import imgMenu from "../../assets/menu.svg";
import imgClose from "../../assets/close.svg";
import Banner from "./Banner.vue";

const logo = ref()
watchEffect(async () => {
    logo.value = (await import(`../../assets/app.svg`)).default
})

function download() {
    document.getElementById('download_dialog').showModal()
}

function github() {
    window.location.href = 'https://github.com/VPlanPlus-Project/VPlanPlus'
}

function home() {
    window.location.href = 'https://vplanplus.jvbabi.es/'
}

const resize = () => {
    isMobile.value = innerWidth <= 600
}

onMounted(() => {
        window.addEventListener('resize', resize)
    }
)

onBeforeUnmount(() => {
        window.removeEventListener('resize', resize)
    }
)

const menuOpened = ref(false)
const isMobile = ref(innerWidth <= 600)
const toggleMenu = () => {
    menuOpened.value = !menuOpened.value
}
</script>

<template>
    <Banner text="Hey 👋 Ich suche gerade Tester für diese App. Registriere dich, um in die closed Beta aufgenommen zu werden. Du erhältst eine Mail, wenn die App zum Testen bereitsteht." cta="Registrieren per Mail" link=" mailto:julvin.babies@gmail.com?subject=Registrierung%20f%C3%BCr%20Closed%20Beta%20VPlanPlus&body=Hiermit%20registriere%20ich%20mich%20zur%20closed%20Beta%20der%20App%20VPlanPlus.%0D%0AMeine%20E-Mail-Adresse%20f%C3%BCr%20mein%20Google-Konto%20ist%3A%20%3CHier%20Mail%20eintragen%3E%0D%0A%0D%0AIch%20akzeptiere%2C%20dass%20meine%20Mailadresse%20f%C3%BCr%20die%20Beta%20gespeichert%20wird. " background="#2F80ED" color="whitesmoke" />
    <div id="header">
        <img :src="logo" alt="VPlanPlus" height="60px" id="header_logo">
        <div id="header_menu">
            <div id="header_menu_content" :class="{ showMenu: menuOpened || !isMobile}">
                <div id="closeMenu" @click="toggleMenu" v-show="isMobile">
                    <img :src="imgClose" alt="Close" width="30px" style="padding: 20px">
                </div>
                <MenuItem name="Home" link="/" :is-mobile="isMobile" @click="home()" />
                <MenuItem name="Download" :is-mobile="isMobile" @click="download()" />
                <MenuItem name="Quellcode" link="/source" :is-mobile="isMobile" @click="github()" />
            </div>
            <div @click="toggleMenu" v-show="isMobile" style="cursor: pointer">
                <img :src="imgMenu" alt="Menu">
            </div>
        </div>
    </div>
</template>

<style scoped>
#header {
    height: 80px;
    width: 100dvw;
    display: flex;
    color: #262f40;
    align-items: center;
    overflow: hidden;
}

#header_logo {
    margin: 20px;
    height: 40px;
    transition: .5s;
    transform: rotateY(1deg);
}

#header_logo:hover {
    transform: rotateY(-30deg);
}

#header_menu {
    margin-left: auto;
    margin-right: 20px;
    display: flex;
    align-items: center;
}

@media screen and (min-width: 600px) {
}

@media screen and (max-width: 600px) {
    #header_menu_content {
        position: absolute;
        top: 0;
        background: white;
        z-index: 1;
        width: 0;
        height: 100dvh;
        right: -80dvw;
        overflow: hidden;
        align-items: start;

        transition: 0.5s ease-in-out;

        box-shadow: black 0 0 0 0;

        display: flex;
        flex-direction: column;
    }

    .showMenu {
        width: 80dvw !important;
        right: 0 !important;
        box-shadow: black 0 0 10dvw 0 !important;
    }

    #closeMenu {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 30px;
        color: #262f40;
    }

    .mobile_hide {
        display: none;
    }

}
</style>