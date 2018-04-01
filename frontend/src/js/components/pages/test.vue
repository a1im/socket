<style lang="scss" type="text/scss">
    .test {

    }
</style>
<template>
    <div class="test">
        <h1>Тестовая страница</h1>
        <input v-model="user.props.name" type="text">
        <button type="button" @click="submit">Отправить</button>
        {{ user }}
    </div>
</template>
<script>


    export default {
        components: {},

        data() {
            return {
                user: this.$model.create('user'),
            }
        },

        watch: {

        },

        methods: {
            submit() {
                this.$io.emitDictSave(this.user);
            }
        },

        created() {
            this.$io.emitDictFetchAll('user');
        },

        beforeDestroy() {

        },

    }
</script>
