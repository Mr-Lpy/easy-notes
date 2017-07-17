<template>
    <div id="toolbar">
        <div class="head-wrapper">
            <easy-head></easy-head>
        </div>
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    import Head from '../Common/Head.vue';
    export default {
        components: {
            'easy-head': Head
        },
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
    .head-wrapper {
        margin-bottom: 40px;
    }
</style>
