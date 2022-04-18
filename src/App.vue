<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <test />
    <todo />
</template>

<script>
import test from "./components/App.vue";
import todo from "./components/todo.vue";

export default {
    name: "App",
    components: {
        test,
        todo,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
