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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeros.js */ \"./js/Modules/numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement('div')\n    div.classList.add('numero-animal')\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`\n    return div\n  }\n\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url)\n      const animaisJSON = await animaisResponse.json()\n      const numerosGrid = document.querySelector('.numeros-grid')\n      animaisJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal)\n        numerosGrid.appendChild(divAnimal)\n      })\n      ;(0,_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    } catch (erro) {\n      console.log(erro)\n    }\n  }\n\n  fetchAnimais('./animaisapi.json')\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/fetch-animais.js?");

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

/***/ "./js/Modules/numeros.js":
/*!*******************************!*\
  !*** ./js/Modules/numeros.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumeros)\n/* harmony export */ });\nfunction initNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]')\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText\n      const incremento = Math.floor(total / 100)\n\n      let start = 0\n      const timer = setInterval(() => {\n        start += incremento\n        numero.innerText = start\n        if (start > total) {\n          clearInterval(timer)\n        }\n      }, 15)\n    })\n  }\n\n  let observer\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect()\n      animaNumeros()\n    }\n  }\n\n  observer = new MutationObserver(handleMutation)\n\n  const observerTarget = document.querySelector('.numeros')\n  observer.observe(observerTarget, { attributes: true })\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/numeros.js?");

/***/ }),

/***/ "./js/Modules/scrollSection.js":
/*!*************************************!*\
  !*** ./js/Modules/scrollSection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSection)\n/* harmony export */ });\nfunction initScrollSection() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]')\n  const windowMetade = window.innerHeight * 0.6\n\n  function scrollAnimate() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top\n      const isSectionVisible = sectionTop - windowMetade < 0\n      if (isSectionVisible) {\n        section.classList.add('ativo')\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo')\n      }\n    })\n  }\n\n  if (sections.length) {\n    window.addEventListener('scroll', scrollAnimate)\n\n    scrollAnimate()\n  }\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/scrollSection.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\n  constructor(tooltips) {\n    this.tooltips = document.querySelectorAll(tooltips)\n\n    // bind do objeto da classe aos callbacks\n    this.onMouseLeave = this.onMouseLeave.bind(this)\n    this.onMouseMove = this.onMouseMove.bind(this)\n    this.onMouseOver = this.onMouseOver.bind(this)\n  }\n\n  // Move a tooltip com base em seus estilos\n  // de acordo com a posição do mouse\n  onMouseMove(event) {\n    this.tooltipBox.style.top = `${event.pageY + 20}px`\n    if (event.pageX + 240 > window.innerWidth) {\n      this.tooltipBox.style.left = `${event.pageX - 190}px`\n    } else {\n      this.tooltipBox.style.left = `${event.pageX + 20}px`\n    }\n  }\n\n  // Remove a tooltip e os eventos de mousemove e mouseleave\n  onMouseLeave({ currentTarget }) {\n    this.tooltipBox.remove()\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)\n    currentTarget.removeEventListener('mousemove', this.onMouseMove)\n  }\n\n  // Cria a tooltip box e coloca no body\n  criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div')\n    const text = element.getAttribute('aria-label')\n    tooltipBox.classList.add('tooltip')\n    tooltipBox.innerText = text\n    document.body.appendChild(tooltipBox)\n    this.tooltipBox = tooltipBox\n  }\n\n  // Cria a tooltip e adiciona os eventos\n  // de mousemove e mouseleave ao target\n  onMouseOver({ currentTarget }) {\n    // cria a tooltipbox e coloca em uma propriedade\n    this.criarTooltipBox(currentTarget)\n    currentTarget.addEventListener('mousemove', this.onMouseMove)\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave)\n  }\n\n  // Adiciona os eventos de mouseover a cada tooltip\n  addTooltipsEvent() {\n    this.tooltips.forEach((item) => {\n      item.addEventListener('mouseover', this.onMouseOver)\n    })\n  }\n\n  init() {\n    if (this.tooltips.length) {\n      this.addTooltipsEvent()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/scrollSmooth.js */ \"./js/Modules/scrollSmooth.js\");\n/* harmony import */ var _Modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/accordion.js */ \"./js/Modules/accordion.js\");\n/* harmony import */ var _Modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/tabNav.js */ \"./js/Modules/tabNav.js\");\n/* harmony import */ var _Modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/modal.js */ \"./js/Modules/modal.js\");\n/* harmony import */ var _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/tooltip.js */ \"./js/Modules/tooltip.js\");\n/* harmony import */ var _Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/dropdown.js */ \"./js/Modules/dropdown.js\");\n/* harmony import */ var _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/funcionamento.js */ \"./js/Modules/funcionamento.js\");\n/* harmony import */ var _Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/fetch-animais.js */ \"./js/Modules/fetch-animais.js\");\n/* harmony import */ var _Modules_scrollSection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/scrollSection.js */ \"./js/Modules/scrollSection.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSmooth = new _Modules_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]')\r\nscrollSmooth.init()\r\n\r\nconst accordion = new _Modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt')\r\naccordion.init()\r\n\r\nconst tabNav = new _Modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  '[data-tab=\"menu\"] li',\r\n  '[data-tab=\"content\"] section'\r\n)\r\ntabNav.init()\r\n\r\nconst modal = new _Modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n)\r\nmodal.init()\r\n\r\nconst tooltip = new _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]')\r\ntooltip.init()\r\n\r\n;(0,_Modules_scrollSection_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n\r\n;(0,_Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/script.js?");

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