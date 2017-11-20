import LayoutHeader from './header/LayoutHeader.vue'
import LayoutNavigation from './navigation/LayoutNavigation.vue'
import LayoutBackground from './background/LayoutBackground.vue'
import SearchForm from './searchform/SearchForm.vue'
import SearchResultCard from './searchresult/SearchResultCard.vue'

const components = [
  { name: 'layout-header', template: LayoutHeader },
  { name: 'layout-navigation', template: LayoutNavigation },
  { name: 'layout-background', template: LayoutBackground },
  { name: 'search-form', template: SearchForm },
  { name: 'result-card', template: SearchResultCard }
]

export default components
