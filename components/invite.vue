<script setup>
import {QrcodeStream} from 'vue-qrcode-reader'

const result = ref('')
const error = ref('')

function paintBoundingBox(detectedCodes, ctx) {
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height }
    } = detectedCode

    ctx.lineWidth = 2
    ctx.strokeStyle = '#007bff'
    ctx.strokeRect(x, y, width, height)
  }
}

function onError(err) {
  error.value = `[${err.name}]: `

  if (err.name === 'NotAllowedError') {
    error.value += 'you need to grant camera access permission'
  } else if (err.name === 'NotFoundError') {
    error.value += 'no camera on this device'
  } else if (err.name === 'NotSupportedError') {
    error.value += 'secure context required (HTTPS, localhost)'
  } else if (err.name === 'NotReadableError') {
    error.value += 'is the camera already in use?'
  } else if (err.name === 'OverconstrainedError') {
    error.value += 'installed cameras are not suitable'
  } else if (err.name === 'StreamApiNotSupportedError') {
    error.value += 'Stream API is not supported in this browser'
  } else if (err.name === 'InsecureContextError') {
    error.value += 'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
  } else {
    error.value += err.message
  }
}

function onDetect(detectedCodes) {
  result.value = JSON.stringify(
    detectedCodes.map(code => code.rawValue)
  )
}
</script>

<template>
  <div class="lg:max-w-5xl mx-auto p-4 lg:flex">
    <div class="lg:max-w-md mt-8 lg:my-40 mx-auto w-full">
          <h1 class="text-center text-2xl font-bold mb-4">🎉 Contrôle des Invitations</h1>
      <div class="mb-4">
        <p class="text-red-600 font-semibold" v-if="error">{{ error }}</p>
        <p class="text-green-600 font-semibold" v-else-if="result">✅ Code détecté : {{ result }}</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-2">📋 Liste des invités</h2>
        <p>Dernier code : <b>{{ result }}</b></p>
        <ul class="mt-2 space-y-1">
          <li
            v-for="invite in invites"
            :key="invite.name"
            class="flex justify-between p-2 border rounded"
          >
            <span>{{ invite.name }}</span>
            <span :class="invite.statut ? 'text-green-600' : 'text-red-600'">
              {{ invite.statut ? '✅ Scanné' : '❌ Non scanné' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
      <div class="border-2 border-black rounded-2xl p-4 my-20 w-full">
        <h3 class="text-lg font-semibold mb-2">QR Code pour valider votre présence</h3>
        <div class="relative h-96">
          <ClientOnly>
            <QrcodeStream
            :track="paintBoundingBox"
            @detect="onDetect"
            @error="onError"
            />
          </ClientOnly>
        </div>
    </div>
  </div>
</template>
