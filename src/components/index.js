import LayoutHeader from './header/LayoutHeader.vue'
import SearchForm from './searchform/SearchForm.vue'
import LayoutNavigation from './navigation/LayoutNavigation.vue'

const components = [
  { name: 'layout-header', template: LayoutHeader },
  { name: 'layout-navigation', template: LayoutNavigation },
  { name: 'search-form', template: SearchForm }
]

export default components
