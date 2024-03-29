import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-blue/theme.css'

import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import FloatLabel from 'primevue/floatlabel';
import Dropdown from 'primevue/dropdown';
import Card from 'primevue/card';
import Panel from 'primevue/panel';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional


const app = createApp(App);
app.use(PrimeVue)
app.component('Button', Button)
app.component('Calendar', Calendar)
app.component('InputText', InputText)
app.component('Checkbox', Checkbox)
app.component('InputMask', InputMask)
app.component('FloatLabel', FloatLabel)
app.component('Dropdown', Dropdown)
app.component('Card', Card)
app.component('Panel', Panel)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.mount('#app')
