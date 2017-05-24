<template>
  <div id="note-editor">
    <input v-show="isShow" type="text" name="title" :value="activeNote.title" v-model="note.title" @input="editNote"
           class="title form-control" placeholder="请输入标题">
    <textarea v-show="isShow" @input="editNote" class="form-control" :value="activeNote.text" v-model="note.text"
              placeholder="请输入内容"></textarea>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        note: {}
      };
    },
    computed: {
      activeNote() {
        let note = this.$store.getters.getActive;
        this.note = note;
        return note;
      },
      isShow() {
        return this.$store.getters.notes.length > 0;
      }
    },
    methods: {
      editNote() {
        return this.$store.dispatch('editNote', this.note);
      }
    }
  }
</script>

<style>

</style>
