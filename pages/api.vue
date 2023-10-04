// api.vue

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-900">
    <div class="chat-container bg-gray-700 p-4 rounded-lg">
      <!-- Botón para seleccionar archivos -->
      <div class="mb-4">
        <input type="file" accept=".txt,.pdf" @change="handleFileUpload" class="hidden">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Subir archivo
        </button>
      </div>

      <!-- Resto de la interfaz del chat -->
      <div class="chat-messages">
        <!-- Mensajes del chat -->
      </div>
      <div class="chat-input">
        <input type="text" class="bg-white rounded-l px-4 py-2 w-full">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l-none rounded-r">
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>


<script>

import { apiKey } from '~/config';
import axios from 'axios';

export default {
  //  async mounted() {
  //      
//
  //          const client = axios.create({
  //              headers: {
  //                  Authorization: "Bearer " + apiKey,
   //             },
   //         });

   //         const params = {
   //             prompt: "How are you?",
  //              model: "text-davinci-003",
   //             max_tokens: 10,
   //             temperature: 0,
   //         };
//

          //  client
          ////      .post("https://api.openai.com/v1/completions", params)
           //     .then((result) => {
          //          console.log(result.data.choices[0].text);
         //       })
          //      .catch((err) => {
          //          console.log(err);
          //      });

            




        }
  //  }


</script >
