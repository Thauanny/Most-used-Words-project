<template>
    <v-container fluid>
      <br>
        <v-form>
          <v-file-input 
          counter
          show-size
          color="#e9c0c8"
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

<script charset="utf-8">

const {ipcRenderer} = window.require('electron')
import Pill from './Pill'

export default {

    components:{Pill},

    data: function() {
        return {
          files: [],
          groupedWords: []
        }
    },
    
    methods: {
      processSubtitles(){
        const paths = this.files.map(f => f.path)
        ipcRenderer.send('process-subtitles', paths)
        ipcRenderer.on('process-subtitles', (event, resp) => {
          if(resp != ''){
            this.groupedWords = resp
          }else{
            this.groupedWords = [{name:"Not Found", amout: ':('}]
          }
          
        })
      }
    }
}
</script>

<style>

      v-file-input::before{
        color: #e9c0c8;
      }

      .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

      }
</style>