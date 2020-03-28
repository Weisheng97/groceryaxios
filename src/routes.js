//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import Home from './components/Home.vue'
import Axios_BC from './components/Axios_BC.vue'
import Class_10 from './components/Class_10.vue'

export default[
    { path: '/', component: Home},
    { path: '/add', component: AddItem},
    { path: '/list', component: PageContent},
    { path: '/axios', component: Axios_BC},
    { path: '/week10', component: Class_10}
]