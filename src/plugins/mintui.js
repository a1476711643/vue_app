import Vue from 'vue'
import { Button, Cell, Header, Swipe, SwipeItem, Tabbar, TabItem } from 'mint-ui'
import 'mint-ui/lib/style.css'

//导入mui样式表
import '../assets/mui/css/mui.min.css';
import '../assets/mui/css/icons-extra.css';
import '../assets/mui/css/golbal.css';

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);