import LayoutHeader from './header/LayoutHeader.vue'
import LayoutNavigation from './navigation/LayoutNavigation.vue'
import LayoutBackground from './background/LayoutBackground.vue'
import SearchForm from './searchform/SearchForm.vue'
import SearchResultCard from './searchResultCard/SearchResultCard.vue'
import SearchResultHeader from './searchResultHeader/SearchResultHeader.vue'
import Datepicker from './datepicker/Datepicker.vue'

const components = [
  { name: 'layout-header', template: LayoutHeader },
  { name: 'layout-navigation', template: LayoutNavigation },
  { name: 'layout-background', template: LayoutBackground },
  { name: 'search-form', template: SearchForm },
  { name: 'result-header', template: SearchResultHeader },
  { name: 'result-card', template: SearchResultCard },
  { name: 'datepicker', template: Datepicker }
]

export default components
