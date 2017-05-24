<template>
  <div id="toolbar">
    <i class="glyphicon logo"><img src="../../assets/logo.png" width="30" height="30"></i>
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {

    computed: {
        activeNote() {
          return this.$store.getters.getActive;
        }
    },
    methods: {
        addNote() {
            console.log('in addNote 1');
            this.$store.dispatch('addNote');
        },
      toggleFavorite() {
            console.log(this.activeNote);
            if (this.activeNote.title === '') return;
            return this.$store.dispatch('toggleFavorite');
      },
      deleteNote() {
            return this.$store.dispatch('deleteNote');
      }
    }

  }
</script>

<style>

</style>
