/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Modules/accordion.js":
/*!*********************************!*\
  !*** ./js/Modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list)\r\n    this.activeClass = 'ativo'\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass)\r\n    item.nextElementSibling.classList.toggle(this.activeClass)\r\n  }\r\n  // adiciona os eventos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener('click', () => this.toggleAccordion(item))\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      // ativa o primeiro item\r\n      this.toggleAccordion(this.accordionList[0])\r\n      this.addAccordionEvent()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/accordion.js?");

/***/ }),

/***/ "./js/Modules/debounce.js":
/*!********************************!*\
  !*** ./js/Modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer)\r\n    timer = setTimeout(() => {\r\n      callback(...args)\r\n      timer = null\r\n    }, delay)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/debounce.js?");

/***/ }),

/***/ "./js/Modules/dropdown.js":
/*!********************************!*\
  !*** ./js/Modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\nfunction initDropdown() {\n  const dropdown = document.querySelector('[data-dropdown]')\n\n  function closeDropdown(e) {\n    if (!dropdown.contains(e.target)) {\n      dropdown.classList.remove('ativo')\n      document.removeEventListener('click', closeDropdown)\n    }\n  }\n  function toggleDropdown(e) {\n    e.preventDefault()\n    this.classList.toggle('ativo')\n    document.addEventListener('click', closeDropdown)\n  }\n\n  dropdown.addEventListener('click', toggleDropdown)\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/dropdown.js?");

/***/ }),

/***/ "./js/Modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/Modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ \"./js/Modules/number.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  // Cria a div contendo informações\r\n  // com o total de animais\r\n  function createAnimal(animal) {\r\n    const div = document.createElement('div')\r\n    div.classList.add('numero-animal')\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`\r\n    return div\r\n  }\r\n\r\n  // Preenche cada animal no DOM\r\n  const numerosGrid = document.querySelector(target)\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createAnimal(animal)\r\n    numerosGrid.appendChild(divAnimal)\r\n  }\r\n\r\n  // Anima os números de cada animal\r\n  function animaAnimaisNumeros() {\r\n    const number = new _number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo')\r\n    number.init()\r\n  }\r\n\r\n  // Puxa os animais através de um arquivo json\r\n  // e cria cada animal utilizando createAnimal\r\n  async function criarAnimais() {\r\n    try {\r\n      // Fetch, espera a resposta e transforma em json\r\n      const animaisResponse = await fetch(url)\r\n      const animaisJSON = await animaisResponse.json()\r\n\r\n      // Após a transformação de json, ativa as funções\r\n      // para preencher e animar os números\r\n      animaisJSON.forEach((animal) => preencherAnimais(animal))\r\n      animaAnimaisNumeros()\r\n    } catch (erro) {\r\n      console.log(erro)\r\n    }\r\n  }\r\n\r\n  return criarAnimais()\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/fetch-animais.js?");

/***/ }),

/***/ "./js/Modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/Modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n  fetch(url)\r\n    .then(response => response.json())\r\n    .then((bitcoin) => {\r\n      const btcPreco = document.querySelector(target);\r\n      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\r\n    }).catch(erro => console.log(Error(erro)));\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/Modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/Modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]')\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\n\n  const dataAgora = new Date()\n  const diaAgora = dataAgora.getDay()\n  const horarioAgora = dataAgora.getHours()\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1\n  const horarioAberto =\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto')\n  }\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/funcionamento.js?");

/***/ }),

/***/ "./js/Modules/modal.js":
/*!*****************************!*\
  !*** ./js/Modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(abrir, fechar, container) {\r\n    this.botaoAbrir = document.querySelector(abrir)\r\n    this.botaoFechar = document.querySelector(fechar)\r\n    this.containerModal = document.querySelector(container)\r\n\r\n    //bind this ao callback para fazer referência ao objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this)\r\n    this.foraDoModal = this.foraDoModal.bind(this)\r\n  }\r\n\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle('ativo')\r\n  }\r\n\r\n  eventToggleModal(e) {\r\n    e.preventDefault()\r\n    this.toggleModal()\r\n  }\r\n\r\n  foraDoModal(e) {\r\n    if (e.target === this.containerModal) this.toggleModal()\r\n  }\r\n\r\n  addModalEvents() {\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal)\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal)\r\n    this.containerModal.addEventListener('click', this.foraDoModal)\r\n  }\r\n\r\n  init() {\r\n    this.addModalEvents()\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/modal.js?");

/***/ }),

/***/ "./js/Modules/number.js":
/*!******************************!*\
  !*** ./js/Modules/number.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observerTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros)\r\n    this.observerTarget = document.querySelector(observerTarget)\r\n    this.observerClass = observerClass\r\n\r\n    // bind o this do objeto ao callback da mutação\r\n    this.handleMutation = this.handleMutation.bind(this)\r\n  }\r\n\r\n  // Recebe um elemento do dom, com número em seu texto\r\n  // incrementa a partir de 0 até o número final\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText\r\n    const incremento = Math.floor(total / 100)\r\n    let start = 0\r\n    const timer = setInterval(() => {\r\n      start += incremento\r\n      numero.innerText = start\r\n      if (start > total) {\r\n        numero.innerText = total\r\n        clearInterval(timer)\r\n      }\r\n    }, 25 * Math.random())\r\n  }\r\n\r\n  // Ativa incrementar número para cada\r\n  // número selecionado do dom\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero))\r\n  }\r\n\r\n  // Função que ocorre quando a mutações ocorrer\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect()\r\n      this.animaNumeros()\r\n    }\r\n  }\r\n\r\n  // Adiciona o MutationObserver para verificar\r\n  // quanto a classe ativo é adiciona ao element target\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation)\r\n    this.observer.observe(this.observerTarget, { attributes: true })\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observerTarget) {\r\n      this.addMutationObserver()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/number.js?");

/***/ }),

/***/ "./js/Modules/scrollAnima.js":
/*!***********************************!*\
  !*** ./js/Modules/scrollAnima.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/Modules/debounce.js\");\n\r\n\r\nclass ScrollAnima {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections)\r\n    this.windowMetade = window.innerHeight * 0.6\r\n\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 10)\r\n  }\r\n\r\n  // Pega a distância de cada item em relação\r\n  // ao topo do site\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowMetade),\r\n      }\r\n    })\r\n  }\r\n\r\n  // Verifica a distância em cada objeto\r\n  // em relação ao scroll do site\r\n  checkDistance() {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) {\r\n        item.element.classList.add('ativo')\r\n      } else if (item.element.classList.contains('ativo')) {\r\n        item.element.classList.remove('ativo')\r\n      }\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance()\r\n      this.checkDistance()\r\n      window.addEventListener('scroll', this.checkDistance)\r\n    }\r\n    return this\r\n  }\r\n\r\n  // Remove o event de scroll\r\n  stop() {\r\n    window.removeEventListener('scroll', this.checkDistance)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/scrollAnima.js?");

/***/ }),

/***/ "./js/Modules/scrollSmooth.js":
/*!************************************!*\
  !*** ./js/Modules/scrollSmooth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSmooth)\n/* harmony export */ });\nclass ScrollSmooth {\r\n  constructor(links, options) {\r\n    this.linkInterno = document.querySelectorAll(links)\r\n    this.scrollToSection = this.scrollToSection.bind(this)\r\n\r\n    if (options === undefined)\r\n      this.options = { behavior: 'smooth', block: 'start' }\r\n    else this.options = options\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault()\r\n    const href = event.currentTarget.getAttribute('href')\r\n    const section = document.querySelector(href)\r\n    section.scrollIntoView(this.options)\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linkInterno.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection)\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.linkInterno.length) {\r\n      this.addLinkEvent()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/scrollSmooth.js?");

/***/ }),

/***/ "./js/Modules/tabNav.js":
/*!******************************!*\
  !*** ./js/Modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu)\r\n    this.tabContent = document.querySelectorAll(content)\r\n    this.activeClass = 'ativo'\r\n  }\r\n\r\n  activeTab(event) {\r\n    this.tabContent.forEach((item) => {\r\n      item.classList.remove(this.activeClass)\r\n    })\r\n    const direction = this.tabContent[event].dataset.anime\r\n    this.tabContent[event].classList.add(this.activeClass, direction)\r\n  }\r\n\r\n  addTabEvent() {\r\n    this.tabMenu.forEach((item, index) => {\r\n      item.addEventListener('click', () => this.activeTab(index))\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.activeTab(0)\r\n      this.addTabEvent()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/tabNav.js?");

/***/ }),

/***/ "./js/Modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/Modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips)\r\n\r\n    // bind do objeto da classe aos callbacks\r\n    this.onMouseLeave = this.onMouseLeave.bind(this)\r\n    this.onMouseMove = this.onMouseMove.bind(this)\r\n    this.onMouseOver = this.onMouseOver.bind(this)\r\n  }\r\n\r\n  // Move a tooltip com base em seus estilos\r\n  // de acordo com a posição do mouse\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`\r\n    if (event.pageX + 240 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - 190}px`\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`\r\n    }\r\n  }\r\n\r\n  // Remove a tooltip e os eventos de mousemove e mouseleave\r\n  onMouseLeave({ currentTarget }) {\r\n    this.tooltipBox.remove()\r\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)\r\n    currentTarget.removeEventListener('mousemove', this.onMouseMove)\r\n  }\r\n\r\n  // Cria a tooltip box e coloca no body\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div')\r\n    const text = element.getAttribute('aria-label')\r\n    tooltipBox.classList.add('tooltip')\r\n    tooltipBox.innerText = text\r\n    document.body.appendChild(tooltipBox)\r\n    this.tooltipBox = tooltipBox\r\n  }\r\n\r\n  // Cria a tooltip e adiciona os eventos\r\n  // de mousemove e mouseleave ao target\r\n  onMouseOver({ currentTarget }) {\r\n    // cria a tooltipbox e coloca em uma propriedade\r\n    this.criarTooltipBox(currentTarget)\r\n    currentTarget.addEventListener('mousemove', this.onMouseMove)\r\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave)\r\n  }\r\n\r\n  // Adiciona os eventos de mouseover a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', this.onMouseOver)\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) {\r\n      this.addTooltipsEvent()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/scrollSmooth.js */ \"./js/Modules/scrollSmooth.js\");\n/* harmony import */ var _Modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/accordion.js */ \"./js/Modules/accordion.js\");\n/* harmony import */ var _Modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/tabNav.js */ \"./js/Modules/tabNav.js\");\n/* harmony import */ var _Modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/modal.js */ \"./js/Modules/modal.js\");\n/* harmony import */ var _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/tooltip.js */ \"./js/Modules/tooltip.js\");\n/* harmony import */ var _Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/fetch-bitcoin.js */ \"./js/Modules/fetch-bitcoin.js\");\n/* harmony import */ var _Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/fetch-animais.js */ \"./js/Modules/fetch-animais.js\");\n/* harmony import */ var _Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/dropdown.js */ \"./js/Modules/dropdown.js\");\n/* harmony import */ var _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/funcionamento.js */ \"./js/Modules/funcionamento.js\");\n/* harmony import */ var _Modules_scrollAnima_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/scrollAnima.js */ \"./js/Modules/scrollAnima.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSmooth = new _Modules_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]')\r\nscrollSmooth.init()\r\n\r\nconst accordion = new _Modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt')\r\naccordion.init()\r\n\r\nconst tabNav = new _Modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  '[data-tab=\"menu\"] li',\r\n  '[data-tab=\"content\"] section'\r\n)\r\ntabNav.init()\r\n\r\nconst modal = new _Modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n)\r\nmodal.init()\r\n\r\nconst tooltip = new _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]')\r\ntooltip.init()\r\n\r\nconst scrollAnima = new _Modules_scrollAnima_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-anime=\"scroll\"]')\r\nscrollAnima.init()\r\n\r\n;(0,_Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n\r\n;(0,_Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('../../animaisapi.json', '.numeros-grid')\r\n;(0,_Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('https://blockchain.info/ticker', '.btc-preco')\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;