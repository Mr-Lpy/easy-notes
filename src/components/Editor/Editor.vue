<template>
  <div id="note-editor">
    <div class="edit-area" v-show="isShow">
      <input type="text" name="title" :value="activeNote.title" v-model="note.title" @input="editNote"
             class="title form-control" placeholder="请输入标题">
      <div class="edit-tool-area">工具区</div>
      <textarea @input="editNote" class="form-control" :value="activeNote.text" v-model="note.text"
                placeholder="请输入内容"></textarea>
    </div>

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
  .edit-area {
    height: 100%;
  }
  
  .edit-area textarea {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .edit-area .edit-tool-area {
    height: 30px;
    background-color: #f5f5f5;
  }
</style>
