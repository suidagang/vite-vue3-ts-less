import { createApp } from 'vue';
import './baseStyle';
import './test';
import App from './App';
import router from './routes/index';

const app = createApp(App);

// routes
app.use(router);
app.mount('#app');
