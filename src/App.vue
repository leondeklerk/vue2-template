<template>
    <div id="app">
        <Screen />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Screen from "./components/Screen.vue";

@Component({
    components: {
        Screen
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0.5em;
    height: 100%;
    margin-left: 0.5em;
    margin-right: 0.5em;
}
</style>
