import Vue from 'vue';
import Router from 'vue-router';
import industries from '@/components/industries.vue';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/industries',
        name: 'Industries',
        component: industries
    }]
});
