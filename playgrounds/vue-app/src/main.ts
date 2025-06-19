import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import { Nixer } from '@nixxer/vue';

const app = createApp(App);
app.use(router).use(Nixer, {text: 'Hello world'});
app.mount('#root');
