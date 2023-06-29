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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt')\n\n  accordionList[0].classList.toggle('ativo')\n  accordionList[0].nextElementSibling.classList.toggle('ativo')\n\n  function accordionToggle() {\n    this.classList.toggle('ativo')\n    this.nextElementSibling.classList.toggle('ativo')\n  }\n\n  accordionList.forEach((item) => {\n    item.addEventListener('click', accordionToggle)\n  })\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/accordion.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]')\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]')\n  const containerModal = document.querySelector('[data-modal=\"container\"]')\n\n  function toggleModal(e) {\n    e.preventDefault()\n    containerModal.classList.toggle('ativo')\n  }\n  function foraDoModal(e) {\n    if (e.target === this) toggleModal(e)\n  }\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener('click', toggleModal)\n    botaoFechar.addEventListener('click', toggleModal)\n    containerModal.addEventListener('click', foraDoModal)\n  }\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li')\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section')\n\n  function activeTab(event) {\n    tabContent.forEach((item) => {\n      item.classList.remove('ativo')\n    })\n    const direction = tabContent[event].dataset.anime\n    tabContent[event].classList.add('ativo', direction)\n  }\n\n  if (tabMenu.length && tabContent.length) tabContent[0].classList.add('ativo')\n  tabMenu.forEach((item, index) => {\n    item.addEventListener('click', () => {\n      activeTab(index)\n    })\n  })\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/tabNav.js?");

/***/ }),

/***/ "./js/Modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/Modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltip = document.querySelectorAll('[data-tooltip]')\n\n  const onMouseMove = {\n    handleEvent(e) {\n      this.tooltipBox.style.top = `${e.pageY}20px`\n      this.tooltipBox.style.left = `${e.pageX}20px`\n    },\n  }\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove()\n      this.element.removeEventListener('mouseleave', onMouseLeave)\n      this.element.removeEventListener('mousemove', onMouseLeave)\n    },\n  }\n  function criarTooltip(element) {\n    const tooltipBox = document.createElement('div')\n    const text = element.getAttribute('aria-label')\n    tooltipBox.classList.add('tooltip')\n    tooltipBox.innerText = text\n    document.body.appendChild(tooltipBox)\n    return tooltipBox\n  }\n\n  function onMouseOver(e) {\n    const tooltipBox = criarTooltip(this)\n    tooltipBox.style.top = `${e.pageY}px`\n    tooltipBox.style.left = `${e.pageX}px`\n\n    onMouseMove.tooltipBox = tooltipBox\n    this.addEventListener('mousemove', onMouseMove)\n\n    onMouseLeave.tooltipBox = tooltipBox\n    onMouseLeave.element = this\n    this.addEventListener('mouseleave', onMouseLeave)\n  }\n\n  tooltip.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver)\n  })\n}\n\n\n//# sourceURL=webpack://wonder-beasts/./js/Modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/scrollSmooth.js */ \"./js/Modules/scrollSmooth.js\");\n/* harmony import */ var _Modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/tabNav.js */ \"./js/Modules/tabNav.js\");\n/* harmony import */ var _Modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/accordion.js */ \"./js/Modules/accordion.js\");\n/* harmony import */ var _Modules_scrollSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/scrollSection.js */ \"./js/Modules/scrollSection.js\");\n/* harmony import */ var _Modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/modal.js */ \"./js/Modules/modal.js\");\n/* harmony import */ var _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/tooltip.js */ \"./js/Modules/tooltip.js\");\n/* harmony import */ var _Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/dropdown.js */ \"./js/Modules/dropdown.js\");\n/* harmony import */ var _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/funcionamento.js */ \"./js/Modules/funcionamento.js\");\n/* harmony import */ var _Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/fetch-animais.js */ \"./js/Modules/fetch-animais.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSmooth = new _Modules_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]')\r\nscrollSmooth.init()\r\n\r\n;(0,_Modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_Modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_Modules_scrollSection_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_Modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n\n\n//# sourceURL=webpack://wonder-beasts/./js/script.js?");

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