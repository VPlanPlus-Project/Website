<script setup>
import dl from "../../assets/download.svg";
import gplay from "../../assets/start/gplay.png";

function download() {
    document.getElementById('download_dialog').showModal()
}

function apk() {
    window.location.assign('https://github.com/Julius-Babies/VPlanPlus/releases/download/v0.8-alpha/VPP_0.8-alpha.apk')
}


function playstore() {
    //window.location.assign('https://play.google.com/store/apps/details?id=es.jvbabi.vplanplus')
}

function close() {
    document.getElementById('download_dialog').close()
}
</script>

<template>
    <div id="gh" @click="download()">
        <img :src="dl">
        Download
    </div>
    <dialog id="download_dialog" class="download_dialog">
        <div id="download_dialog_header">
            <h1>Download</h1>
            <span class="material-symbols-outlined" @click="close">close</span>
        </div>
        <div>
            <h3>Google Play Store</h3>
            <div id="info">
                <span class="material-symbols-outlined" style="padding-right: 5px">info</span>
                <span>
                    Um die App aus dem Google Play Store laden zu können, musst du als Tester registriert sein. Klicke
                    dazu auf das Banner, welches auf der Startseite angezeigt wird. Du solltest dann eine E-Mail erhalten,
                    in welcher du aufgefordert wirst, Tester zu werden. Nachdem du die Einladung angenommen hast, kannst
                    du die App aus dem Google Play Store laden. Bitte beachte, dass diese E-Mail erst versandt wird, wenn
                    die App von Google überprüft wurde. Dies kann bis zu 7 Tage dauern.
                    Du musst die App im selben Google-Konto installieren, mit welchem du Tester geworden bist. Ansonsten
                    wird dir der Google Play Store die App nicht anzeigen.
                </span>
            </div>
            <div id="gh" @click="playstore()">
                <img :src="gplay">
                <span style="text-decoration: line-through black">Play Store</span>
            </div>
        </div>
        <div>
            <h3>APK</h3>
            <div id="info">
                <span class="material-symbols-outlined" style="padding-right: 5px">info</span>
                <span>
                    Diese Installationsmethode ist standardmäßig auf Android-Geräten deaktiviert. Du musst die Installation
                aus unbekannten Quellen in den Einstellungen aktivieren. Lade dir die APK-Datei herunter und versuche,
                sie zu öffnen. Android wird dann Fragen, ob du der Quelle vertraust. Aktiviere hierfür die App, aus welcher
                du die APK-Datei <b>geöffnet</b> hast. Anschließend kann die App installiert werden. Bitte beachte, dass
                die App nicht automatisch aktualisiert wird. Du musst die APK-Datei erneut herunterladen und installieren.
                    <h3 style="margin: 5px 0 0;">Achtung</h3>Falls du Family Link nutzt, muss der Familienadministrator die Installation
                aus unbekannten Quellen aktivieren. Wie das geht, erfährst du <a href="https://support.google.com/googleplay/thread/194346672?hl=de&msgid=194423212" target="_blank">hier</a>.
                </span>
            </div>
            <div id="gh" @click="apk()">
                <img :src="dl">
                Download
            </div>
        </div>
    </dialog>
</template>

<style scoped>
img {
    margin: 3px 10px 3px 3px;
    height: 25px;
}

#gh {
    display: flex;
    width: 140px;
    justify-content: center;
    align-items: center;
    user-select: none;
    padding: 10px 20px;
    box-shadow: 5px 5px 10px #c9c9c9,
    -5px -5px 10px #c9c9c9;
    backdrop-filter: blur(10px);

    height: 30px;
    font-size: 20px;
    border-radius: 10px;
    transition: .5s;
    border: 5px solid #45a976;
    cursor: pointer;
}

#gh:hover {
    box-shadow: 5px 5px 20px #1f8f56,
    -5px -5px 20px #ffffff;

    border: 5px solid #1f8f56;
}

dialog::backdrop {
    backdrop-filter: blur(1px);
}

@media screen and (max-width: 600px) {
    dialog {
        width: 90dvw !important;
        height: 90dvh;
    }
}

dialog {
    opacity: 0;
    transition: .5s;
    z-index: 50;
    position: fixed;
    width: 50%;
    border: 0;
    box-shadow: 5px 5px 10px #c9c9c9, -5px -5px 10px #c9c9c9;
    border-radius: 10px;
}

dialog[open] {
    opacity: 1;
}

#download_dialog_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#download_dialog_header h1 {
    margin: 0;
}

#download_dialog_header span {
    cursor: pointer;
    font-size: 30px;
    border-radius: 20px;
    padding: 5px;
    background: #ffffff;
    transition: background-color .2s;
}

#download_dialog_header span:hover {
    background: #e0e0e0;
}

#info {
    display: flex;
    border-radius: 5px;
    border: 2px solid coral;
    padding: 5px;
    border-left-width: 7px;
    margin-bottom: 20px;
}

a {
    color: #000000;
}
</style>