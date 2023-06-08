<template>
    <div id="background-blurs">
        <div class="green"></div>
        <div class="blue"></div>
    </div>
    <nav>
        <router-link :to="{name: 'home' }">Home</router-link>
        |
        <router-link :to="{name: 'about'}">About</router-link>
    </nav>
    <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
    <router-view/>
</template>

<style lang="scss">


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
