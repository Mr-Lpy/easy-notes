<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Toolbar from './components/Toolbar/Toolbar';
    import store from './vuex/store';
    import NoteList from './components/NoteList/NoteList';
    import Editor from './components/Editor/Editor';


    export default {
        name: 'app',
        components: {
//    Toolbar,
//    NoteList,
//    Editor
        },
        store
    }
</script>

<style>

</style>
