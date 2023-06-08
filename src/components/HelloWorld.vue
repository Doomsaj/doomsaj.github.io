<template>
    <div class="hello">
        <h1>{{ t("message") }}</h1>
    </div>
</template>

<script>
import {useI18n} from "vue-i18n";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
    name: 'HelloWorld',
    components: {FontAwesomeIcon},
    setup() {
        const {t} = useI18n();
        return {t}
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
