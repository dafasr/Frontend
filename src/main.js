import { createApp } from 'vue'
import App from './App.vue'
import Todo from './components/Todo.vue'
import Authentication from './components/Authentication.vue'
import User from './components/User.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Authentication},
        { path: '/todo', component: Todo },
        { path: '/user', component: User }
    ]
})
createApp(App).use(router).mount('#app')
