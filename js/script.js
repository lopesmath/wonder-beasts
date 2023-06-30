import ScrollSmooth from './Modules/scrollSmooth.js'
import Accordion from './Modules/accordion.js'
import TabNav from './Modules/tabNav.js'
import Modal from './Modules/modal.js'
import Tooltip from './Modules/tooltip.js'
import fetchBitcoin from './Modules/fetch-bitcoin.js'
import fetchAnimais from './Modules/fetch-animais.js'
import dropdownFunction from './Modules/dropdown.js'
import Functionamento from './modules/funcionamento.js'
import ScrollAnima from './Modules/scrollAnima.js'
import SlideNav from './Modules/slide.js'

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

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

const funcionamento = new Functionamento('[data-semana]', 'aberto')
funcionamento.init()

dropdownFunction()
fetchAnimais('../../animaisapi.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()
slide.addControl('.custom-controls')
