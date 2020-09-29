<template>
    <v-container fluid>
      <br>
        <v-form>
          <v-file-input 

          label="Selecione as Legendas" 
          prepend-icon="mdi-message-text" 
          append-outer-icon="mdi-send" 
          outlined 
          multiple 
          chips 
          v-model="files"
          @click:append-outer = "processSubtitles"
          />

        </v-form>

        <div class="pills">
          <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amout="word.amout"/>
        </div>
    </v-container>
</template>

<script>

import Pill from './Pill'

export default {

    components:{Pill},

    data: function() {
        return {
          files: [],
          groupedWords: [
            { name: 'why', amout: 1234},
            { name: 'you', amout: 900},
            { name: 'he', amout: 853},
          ]
        }
    },
    methods: {
      processSubtitles(){
        console.log(this.files)
      }
    }
}
</script>

<style>
      .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

      }
</style>