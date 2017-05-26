<template>
    <div class="main">
        <Toolbar></Toolbar>
        <note-list></note-list>
        <Editor></Editor>
    </div>
</template>

<script type="text/ecmascript-6">
    import Toolbar from '../Toolbar/Toolbar.vue';
    import NoteList from '../NoteList/NoteList.vue';
    import Editor from '../Editor/Editor.vue';

    export default {
        components: {
            Toolbar,
            NoteList,
            Editor
        }
    }
</script>

<style>
    .main {
        height: 100%;
    }
</style>