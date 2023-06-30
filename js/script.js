import ScrollSmooth from './Modules/scrollSmooth.js'
import Accordion from './Modules/accordion.js'
import TabNav from './Modules/tabNav.js'
import Modal from './Modules/modal.js'
import initTooltip from './Modules/tooltip.js'
import initDropdown from './Modules/dropdown.js'
import initFuncionamento from './Modules/funcionamento.js'
import initFetchAnimais from './Modules/fetch-animais.js'
import initScrollSection from './Modules/scrollSection.js'

const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]')
scrollSmooth.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
)
modal.init()

initTooltip()
initScrollSection()

initDropdown()
initFuncionamento()
initFetchAnimais()
