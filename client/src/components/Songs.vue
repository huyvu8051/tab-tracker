<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Danh sách">
                <div v-for="(song, index) in songs" :key="index">
                    title: {{song.title}}
                    artist: {{song.artist}}
                    albumn: {{song.albumn}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    },
     data () {
         return {
             songs: null
         }
     },
     async mounted () {
         this.songs = await SongService.getAllSong()
     }
}
</script>

<style>
</style>