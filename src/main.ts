import { createApp } from 'vue';
import './style';
import './test';
import App from './App';
import router from './routes/index';

const app = createApp(App);

// routes
app.use(router);
app.mount('#app');
