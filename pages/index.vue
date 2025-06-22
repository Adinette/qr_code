<script setup>
import { QrcodeStream } from 'vue-qrcode-reader'

const isValid = ref(undefined);
const isLoading = ref(false);
const success = "/assets/audio/success.mp3";
const error = "/assets/audio/error.mp3";
const { playSound } = useAudio();
const validationSuccess = computed(() => {
    return isValid.value === true;
});

const validationFailure = computed(() => {
    return isValid.value === false;
});

const resetValidationState = () => {
    isValid.value = undefined;
};

let invites = [
    {
        scanned: false,
        code: "8D91F8F3"
    },
    {
        scanned: false,
        code: "C2DD7663"
    },
    {
        scanned: false,
        code: "6F117D9A"
    },
    {
        scanned: false,
        code: "CF85FC8B"
    },
    {
        scanned: false,
        code: "223708CD"
    },
    {
        scanned: false,
        code: "420F11FF"
    },
    {
        scanned: false,
        code: "59E257FE"
    },
    {
        scanned: false,
        code: "A1823062"
    },
    {
        scanned: false,
        code: "2DCCE592"
    },
    {
        scanned: false,
        code: "65CF35F8"
    },
    {
        scanned: false,
        code: "09FB665E"
    },
    {
        scanned: false,
        code: "1DDA8E64"
    },
    {
        scanned: false,
        code: "B0B4B2B3"
    },
    {
        scanned: false,
        code: "787F9EED"
    },
    {
        scanned: false,
        code: "59BDA384"
    },
    {
        scanned: false,
        code: "BA5057AE"
    },
    {
        scanned: false,
        code: "1E035D95"
    },
    {
        scanned: false,
        code: "13AAC820"
    },
    {
        scanned: false,
        code: "B1BB2A33"
    },
    {
        scanned: false,
        code: "7B5DD874"
    },
    {
        scanned: false,
        code: "8EB4A0B3"
    },
    {
        scanned: false,
        code: "1F6BE658"
    },
    {
        scanned: false,
        code: "89ECB3C0"
    },
    {
        scanned: false,
        code: "F29C2421"
    },
    {
        scanned: false,
        code: "8AA3375E"
    },
    {
        scanned: false,
        code: "037F9DAC"
    },
    {
        scanned: false,
        code: "D81819E4"
    },
    {
        scanned: false,
        code: "454DA639"
    },
    {
        scanned: false,
        code: "F5724864"
    },
    {
        scanned: false,
        code: "D16397BA"
    },
    {
        scanned: false,
        code: "03132209"
    },
    {
        scanned: false,
        code: "7160BB7A"
    },
    {
        scanned: false,
        code: "7A04ABD6"
    },
    {
        scanned: false,
        code: "28741350"
    },
    {
        scanned: false,
        code: "CE077229"
    },
    {
        scanned: false,
        code: "F32AA2DA"
    },
    {
        scanned: false,
        code: "142B9BAF"
    },
    {
        scanned: false,
        code: "963EC1FD"
    },
    {
        scanned: false,
        code: "5C5AEF14"
    },
    {
        scanned: false,
        code: "53D2916D"
    },
    {
        scanned: false,
        code: "7D61497E"
    },
    {
        scanned: false,
        code: "DAEA9420"
    },
    {
        scanned: false,
        code: "D1DFFC14"
    },
    {
        scanned: false,
        code: "06F1D6F6"
    },
    {
        scanned: false,
        code: "3687F42D"
    },
    {
        scanned: false,
        code: "4E8198F1"
    },
    {
        scanned: false,
        code: "D85FC1B8"
    },
    {
        scanned: false,
        code: "C71187F6"
    },
    {
        scanned: false,
        code: "CC0B516F"
    },
    {
        scanned: false,
        code: "04824586"
    },
    {
        scanned: false,
        code: "9646A72A"
    },
    {
        scanned: false,
        code: "07BF3B3F"
    },
    {
        scanned: false,
        code: "4AB00D73"
    },
    {
        scanned: false,
        code: "E4D4EF0E"
    },
    {
        scanned: false,
        code: "79FE29FB"
    },
    {
        scanned: false,
        code: "74CBF4D7"
    },
    {
        scanned: false,
        code: "F308BDA2"
    },
    {
        scanned: false,
        code: "83DDF9AE"
    },
    {
        scanned: false,
        code: "48345A74"
    },
    {
        scanned: false,
        code: "F794D28F"
    },
    {
        scanned: false,
        code: "0132E168"
    },
    {
        scanned: false,
        code: "685CB938"
    },
    {
        scanned: false,
        code: "9C78CB84"
    },
    {
        scanned: false,
        code: "1E068112"
    },
    {
        scanned: false,
        code: "85E307CC"
    },
    {
        scanned: false,
        code: "4D906ECA"
    },
    {
        scanned: false,
        code: "8F28CA2A"
    },
    {
        scanned: false,
        code: "5A301B72"
    },
    {
        scanned: false,
        code: "A15B8A5C"
    },
    {
        scanned: false,
        code: "759E36B2"
    },
    {
        scanned: false,
        code: "6681E599"
    },
    {
        scanned: false,
        code: "A512523B"
    },
    {
        scanned: false,
        code: "3C0A3BF8"
    },
    {
        scanned: false,
        code: "D6835B24"
    },
    {
        scanned: false,
        code: "035055B4"
    },
    {
        scanned: false,
        code: "DE51682B"
    },
    {
        scanned: false,
        code: "596B31B3"
    },
    {
        scanned: false,
        code: "366353D7"
    },
    {
        scanned: false,
        code: "D7B97CE7"
    },
    {
        scanned: false,
        code: "77A6B5B0"
    },
    {
        scanned: false,
        code: "4C50565C"
    },
    {
        scanned: false,
        code: "A74908C0"
    },
    {
        scanned: false,
        code: "9EFC79E4"
    },
    {
        scanned: false,
        code: "A9207B6F"
    },
    {
        scanned: false,
        code: "6EB5C1CD"
    },
    {
        scanned: false,
        code: "AE8D8645"
    },
    {
        scanned: false,
        code: "07193F59"
    },
    {
        scanned: false,
        code: "39EAFA3A"
    },
    {
        scanned: false,
        code: "542F6EB6"
    },
    {
        scanned: false,
        code: "A2937984"
    },
    {
        scanned: false,
        code: "8DAD5711"
    },
    {
        scanned: false,
        code: "4A86FBCD"
    },
    {
        scanned: false,
        code: "833D946E"
    },
    {
        scanned: false,
        code: "3571A12E"
    },
    {
        scanned: false,
        code: "E5B2236B"
    },
    {
        scanned: false,
        code: "077564D5"
    },
    {
        scanned: false,
        code: "B943A0D5"
    },
    {
        scanned: false,
        code: "0D379755"
    },
    {
        scanned: false,
        code: "32995A88"
    },
    {
        scanned: false,
        code: "13B82748"
    },
    {
        scanned: false,
        code: "877445A5"
    },
    {
        scanned: false,
        code: "3F1C4ECF"
    },
    {
        scanned: false,
        code: "31EC954D"
    },
    {
        scanned: false,
        code: "FF1E8431"
    },
    {
        scanned: false,
        code: "9DAE6E25"
    },
    {
        scanned: false,
        code: "47358920"
    },
    {
        scanned: false,
        code: "00373AFE"
    },
    {
        scanned: false,
        code: "F982D931"
    },
    {
        scanned: false,
        code: "B26A7882"
    },
    {
        scanned: false,
        code: "D93FAA1F"
    },
    {
        scanned: false,
        code: "E25B64D7"
    },
    {
        scanned: false,
        code: "F7D171F1"
    },
    {
        scanned: false,
        code: "E0B6A892"
    },
    {
        scanned: false,
        code: "6EBFA617"
    },
    {
        scanned: false,
        code: "840CEE8E"
    },
    {
        scanned: false,
        code: "45FC01AA"
    },
    {
        scanned: false,
        code: "0DAAF6FB"
    },
    {
        scanned: false,
        code: "276C2D0F"
    },
    {
        scanned: false,
        code: "112A0F35"
    },
    {
        scanned: false,
        code: "6F072795"
    },
    {
        scanned: false,
        code: "926E57C4"
    },
    {
        scanned: false,
        code: "2C8BA327"
    },
    {
        scanned: false,
        code: "83877C1C"
    },
    {
        scanned: false,
        code: "3A1E860E"
    },
    {
        scanned: false,
        code: "53697434"
    },
    {
        scanned: false,
        code: "8CD39F95"
    },
    {
        scanned: false,
        code: "E7F20550"
    },
    {
        scanned: false,
        code: "7C36CCFB"
    },
    {
        scanned: false,
        code: "EA2F4BD4"
    },
    {
        scanned: false,
        code: "317677DA"
    },
    {
        scanned: false,
        code: "13172384"
    },
    {
        scanned: false,
        code: "BF784939"
    },
    {
        scanned: false,
        code: "F1CCF002"
    },
    {
        scanned: false,
        code: "58F2A18D"
    },
    {
        scanned: false,
        code: "7C7985B5"
    },
    {
        scanned: false,
        code: "66323F4F"
    },
    {
        scanned: false,
        code: "72E5401D"
    },
    {
        scanned: false,
        code: "94589150"
    },
    {
        scanned: false,
        code: "590F9B16"
    },
    {
        scanned: false,
        code: "9C04D76D"
    },
    {
        scanned: false,
        code: "8958A0A5"
    },
    {
        scanned: false,
        code: "E7DCE3E3"
    },
    {
        scanned: false,
        code: "49F4112A"
    },
    {
        scanned: false,
        code: "FBE80B8B"
    },
    {
        scanned: false,
        code: "5CCDC389"
    },
    {
        scanned: false,
        code: "BFCA54FA"
    },
    {
        scanned: false,
        code: "5718A3EB"
    },
    {
        scanned: false,
        code: "05CDEAA5"
    },
    {
        scanned: false,
        code: "669C8FA4"
    },
    {
        scanned: false,
        code: "51EDEC3B"
    }
]

const onDetecte = async (content) => {
    const code = content[0].rawValue;
    isLoading.value = true;
    isValid.value = undefined;
    const storedInvites = localStorage.getItem('invites');
    if (storedInvites) {
        invites = JSON.parse(storedInvites);
    }
    const index = invites.findIndex(invite => invite.code === code);
    if (index === -1) {
        isValid.value = false;
        playSound(error);
    } else {
        const invite = invites[index];
        if (invite.scanned === true) {
            isValid.value = false;
            playSound(error);
        } else {
            invite.scanned = true;
            isValid.value = true;
            playSound(success);
        }
        localStorage.setItem('invites', JSON.stringify(invites));
    }
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
};
</script>

<template>
    <div class="h-dvh w-screen bg-zinc-700 flex flex-col items-center text-white">

        <div class="h-full">
            <h1 class="text-2xl px-6 font-bold font-sans text-center">QR Code</h1>
            <div class="px-6 h-[400px] pt-6 rounded-md">
                <QrcodeStream :paused="isLoading" @detect="onDetecte" @camera-on="resetValidationState">
                    <div v-if="validationSuccess"
                        class="h-full w-full absolute flex items-center justify-center bg-green-500 text-white text-center text-9xl">
                        <div class="flex flex-col tex items-center">
                            <Icon name="lucide:check" class="text-9xl" />
                            <span class="text-lg text-bouff-secondarytwo font-medium">Code valide, patienter un instant
                                !</span>
                        </div>
                    </div>

                    <div v-else-if="validationFailure"
                        class="h-full w-full absolute flex items-center justify-center text-center text-lg text-white font-medium bg-red-900">
                        <div class="flex flex-col tex items-center">
                            <Icon name="lucide:x" class="text-9xl" />
                            <span>Code utilisé ou invalide, veuillez réesayer !</span>
                        </div>
                    </div>

                    <div v-else-if="isLoading"
                        class="h-full w-full absolute flex items-center justify-center text-center text-lg text-white font-medium bg-yellow-500">
                        <div class="flex flex-col tex items-center">
                            <Icon name="lucide:loader-circle" class="text-9xl animate-spin" />
                            <span>Vérification en cours...</span>
                        </div>
                    </div>
                </QrcodeStream>

                <div class="text-center mt-4 text-primary text-lg font-bold">
                    Scanner le code pour valider le ticket !
                </div>
            </div>
            <div class="h-28 md:h-0"></div>
        </div>
    </div>
</template>
