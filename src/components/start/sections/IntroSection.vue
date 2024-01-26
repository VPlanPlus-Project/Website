<script setup>

import PrimaryButton from "../../PrimaryButton.vue";

const download = () => {
    window.location.href = 'https://github.com/Julius-Babies/VPlanPlus/releases';
}
</script>

<template>
    <div>
        <div style="margin-bottom: 20px">
            <PrimaryButton title="Download" @click="download"></PrimaryButton>
        </div>
        <div>
            <h3>Features</h3>
            <ul>
                <li>Material You</li>
                <li>Dark Mode</li>
                <li>Open-Source</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>