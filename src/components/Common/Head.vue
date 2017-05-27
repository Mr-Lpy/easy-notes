<template>
    <div class="head">
        <div class="head-wrapper">
            <img src="../../assets/img/logo.png" v-bind:width="vwidth" v-bind:height="vheight" >
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            vwidth: {
                type: String,
                default: '30px'
            },
            vheight: {
                type: String,
                default: '30px'
            }
        }
    }
</script>

<style>
    .head-wrapper img{
        border-radius: 50%;
    }
</style>