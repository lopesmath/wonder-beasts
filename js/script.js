import ScrollSmooth from './Modules/scrollSmooth.js'
import Accordion from './Modules/accordion.js'
import TabNav from './Modules/tabNav.js'
import initScrollSection from './Modules/scrollSection.js'
import initModal from './Modules/modal.js'
import initTooltip from './Modules/tooltip.js'
import initDropdown from './Modules/dropdown.js'
import initFuncionamento from './Modules/funcionamento.js'
import initFetchAnimais from './Modules/fetch-animais.js'

const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]')
scrollSmooth.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

initTooltip()
initScrollSection()
initModal()
initDropdown()
initFuncionamento()
initFetchAnimais()
