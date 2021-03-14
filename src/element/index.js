import Vue from 'vue'
import { 
  Button, 
  Form,
  FormItem,
  Input,
  Message,
  Alert,
  Container,
  Header,
  Aside,
  Main,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  scrollbar,
  Submenu
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Menu)
Vue.use(scrollbar)
Vue.use(Submenu)

Vue.prototype.$message = Message
Vue.prototype.$alert = Alert