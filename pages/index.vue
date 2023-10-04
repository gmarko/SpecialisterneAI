<template>
  <div class="flex flex-col items-center justify-end min-h-screen bg-gray-900">
     <!-- Logo en la parte superior -->
     <div class="flex items-center justify-end mt-10 mr-10 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" class="h-64 w-64">
          <circle cx="100" cy="25" r="20" fill="#FF0000" />
          <text x="50" y="35" font-family="Arial" font-size="32" font-weight="bold" fill="#FFFFFF">Special AI</text>
        </svg>
      </div>


    <div class="chat-container bg-gray-700 p-4 rounded-lg fixed bottom-0 left-0 right-0">

      <!-- Resto de la interfaz del chat -->
      <div class="chat-messages">
        <!-- Mensajes del chat -->
      </div>
      <div class="chat-input flex items-center justify-center">
        <input type="text" class="bg-white rounded-l px-4 py-2 w-full">
        <button class="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l-none rounded-r">
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
