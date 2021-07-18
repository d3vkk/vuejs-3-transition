Vue.component('the-button', {
    template: '<button @click="updateMessage">Click me</button>',
    methods: {
        updateMessage() {
            this.$emit('update');
        },
    },
});

const app = Vue.createApp({
    data() {
        return {
            message: 'This works in Vue 2!',
        };
    },
    methods: {
        changeMessage() {
            this.message = 'Will it work in Vue 3?';
        },
    },
}).mount('#app');
