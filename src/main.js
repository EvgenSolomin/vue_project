import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import FloatLabel from 'primevue/floatlabel';
import Dropdown from 'primevue/dropdown';

const app = createApp(App);
app.use(PrimeVue)
app.component('Button', Button)
app.component('Calendar', Calendar)
app.component('InputText', InputText)
app.component('Checkbox', Checkbox)
app.component('InputMask', InputMask)
app.component('FloatLabel', FloatLabel)
app.component('Dropdown', Dropdown)
app.mount('#app')
