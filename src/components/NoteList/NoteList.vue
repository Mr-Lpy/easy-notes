<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>易笔记 | LPY</h2>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'all'" :class="{active: show==='all'}">
            全部笔记
          </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show='favorites'" :class="{active:show==='favorites'}">我的收藏</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes" class="list-group-item" href="#" :class="{active:activeNote === note}" @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">{{note.title.trim().substring(0,30)}}</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data(){
          return {
              show: 'all'
          };
      },
    computed: {
      activeNote() {
        return this.$store.getters.getActive;
      },
      filteredNotes() {
          if (this.show === 'all') {
              console.log(this.$store.getters.notes);
              return this.$store.getters.notes;
          }
          return this.$store.getters.notes.filter(note => note.favorite);
      }
    },
    methods: {
      updateActiveNote(note) {
          return this.$store.dispatch('updateActiveNote',note);
      }
    }
  }
</script>

<style>

</style>
