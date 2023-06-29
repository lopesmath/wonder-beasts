import ScrollSmooth from './Modules/scrollSmooth.js'
import initTabNav from './Modules/tabNav.js'
import initAccordion from './Modules/accordion.js'
import initScrollSection from './Modules/scrollSection.js'
import initModal from './Modules/modal.js'
import initTooltip from './Modules/tooltip.js'
import initDropdown from './Modules/dropdown.js'
import initFuncionamento from './Modules/funcionamento.js'
import initFetchAnimais from './Modules/fetch-animais.js'

const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]')
scrollSmooth.init()

initTabNav()
initTooltip()
initAccordion()
initScrollSection()
initModal()
initDropdown()
initFuncionamento()
initFetchAnimais()
