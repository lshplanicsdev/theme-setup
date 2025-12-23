var s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var i=s((exports,module)=>{(function(e,t){if(typeof exports=="object"&&typeof module=="object")module.exports=t();else if(typeof define=="function"&&define.amd)define([],t);else{var n=t();for(var o in n)(typeof exports=="object"?exports:e)[o]=n[o]}})(self,(function(){return(function(){var __webpack_modules__={"./js/template-customizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateCustomizer: function() { return /* binding */ TemplateCustomizer; }
/* harmony export */ });
/* harmony import */ var _template_customizer_template_customizer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_template-customizer/_template-customizer.scss */ "./js/_template-customizer/_template-customizer.scss");
/* harmony import */ var _template_customizer_template_customizer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_template-customizer/_template-customizer.html */ "./js/_template-customizer/_template-customizer.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var CONTROLS = ['color', 'theme', 'skins', 'semiDark', 'contentLayout', 'headerType', 'layoutCollapsed', 'layoutNavbarOptions', 'rtl', 'layoutFooterFixed', 'showDropdownOnHover'];
var THEMES = ['light', 'dark', 'system'];
var layoutNavbarVar;
var cl = document.documentElement.classList;
if (cl.contains('layout-navbar-fixed')) layoutNavbarVar = 'sticky';else if (cl.contains('layout-navbar-hidden')) layoutNavbarVar = 'hidden';else layoutNavbarVar = 'static';
var DISPLAY_CUSTOMIZER = true;
var DEFAULT_THEME = document.documentElement.getAttribute('data-bs-theme') || 'light';
var DEFAULT_SKIN = document.getElementsByTagName('HTML')[0].getAttribute('data-skin') || 0;
var DEFAULT_CONTENT_LAYOUT = cl.contains('layout-wide') ? 'wide' : 'compact';
var headerType;
if (cl.contains('layout-menu-offcanvas')) {
  headerType = 'static-offcanvas';
} else if (cl.contains('layout-menu-fixed')) {
  headerType = 'fixed';
} else if (cl.contains('layout-menu-fixed-offcanvas')) {
  headerType = 'fixed-offcanvas';
} else {
  headerType = 'static';
}
var DEFAULT_HEADER_TYPE = headerType;
var DEFAULT_MENU_COLLAPSED = !!cl.contains('layout-menu-collapsed');
var DEFAULT_NAVBAR_FIXED = layoutNavbarVar;
var DEFAULT_TEXT_DIR = document.documentElement.getAttribute('dir') === 'rtl';
var DEFAULT_FOOTER_FIXED = !!cl.contains('layout-footer-fixed');
var DEFAULT_SHOW_DROPDOWN_ON_HOVER = true;
var primaryColorFlag;
var rootStyles = getComputedStyle(document.documentElement);
var TemplateCustomizer = /*#__PURE__*/function () {
  function TemplateCustomizer(_ref) {
    var displayCustomizer = _ref.displayCustomizer,
      lang = _ref.lang,
      defaultPrimaryColor = _ref.defaultPrimaryColor,
      defaultSkin = _ref.defaultSkin,
      defaultTheme = _ref.defaultTheme,
      defaultSemiDark = _ref.defaultSemiDark,
      defaultContentLayout = _ref.defaultContentLayout,
      defaultHeaderType = _ref.defaultHeaderType,
      defaultMenuCollapsed = _ref.defaultMenuCollapsed,
      defaultNavbarType = _ref.defaultNavbarType,
      defaultTextDir = _ref.defaultTextDir,
      defaultFooterFixed = _ref.defaultFooterFixed,
      defaultShowDropdownOnHover = _ref.defaultShowDropdownOnHover,
      controls = _ref.controls,
      themes = _ref.themes,
      availableColors = _ref.availableColors,
      availableSkins = _ref.availableSkins,
      availableThemes = _ref.availableThemes,
      availableContentLayouts = _ref.availableContentLayouts,
      availableHeaderTypes = _ref.availableHeaderTypes,
      availableMenuCollapsed = _ref.availableMenuCollapsed,
      availableNavbarOptions = _ref.availableNavbarOptions,
      availableDirections = _ref.availableDirections,
      onSettingsChange = _ref.onSettingsChange;
    _classCallCheck(this, TemplateCustomizer);
    if (this._ssr) return;
    if (!window.Helpers) throw new Error('window.Helpers required.');
    this.settings = {};
    this.settings.displayCustomizer = typeof displayCustomizer !== 'undefined' ? displayCustomizer : DISPLAY_CUSTOMIZER;
    this.settings.lang = lang || 'en';
    if (defaultPrimaryColor) {
      this.settings.defaultPrimaryColor = defaultPrimaryColor;
      primaryColorFlag = true;
    } else {
      this.settings.defaultPrimaryColor = rootStyles.getPropertyValue('--bs-primary').trim();
      primaryColorFlag = false;
    }
    this.settings.defaultTheme = defaultTheme || DEFAULT_THEME;
    this.settings.defaultSemiDark = typeof defaultSemiDark !== 'undefined' ? defaultSemiDark : false;
    this.settings.defaultContentLayout = typeof defaultContentLayout !== 'undefined' ? defaultContentLayout : DEFAULT_CONTENT_LAYOUT;
    this.settings.defaultHeaderType = defaultHeaderType || DEFAULT_HEADER_TYPE;
    this.settings.defaultMenuCollapsed = typeof defaultMenuCollapsed !== 'undefined' ? defaultMenuCollapsed : DEFAULT_MENU_COLLAPSED;
    this.settings.defaultNavbarType = typeof defaultNavbarType !== 'undefined' ? defaultNavbarType : DEFAULT_NAVBAR_FIXED;
    this.settings.defaultTextDir = defaultTextDir === 'rtl' ? true :  false || DEFAULT_TEXT_DIR;
    this.settings.defaultFooterFixed = typeof defaultFooterFixed !== 'undefined' ? defaultFooterFixed : DEFAULT_FOOTER_FIXED;
    this.settings.defaultShowDropdownOnHover = typeof defaultShowDropdownOnHover !== 'undefined' ? defaultShowDropdownOnHover : DEFAULT_SHOW_DROPDOWN_ON_HOVER;
    this.settings.controls = controls || CONTROLS;
    this.settings.availableColors = availableColors || TemplateCustomizer.COLORS;
    this.settings.availableSkins = availableSkins || TemplateCustomizer.SKINS;
    this.settings.availableThemes = availableThemes || TemplateCustomizer.THEMES;
    this.settings.availableContentLayouts = availableContentLayouts || TemplateCustomizer.CONTENT;
    this.settings.availableHeaderTypes = availableHeaderTypes || TemplateCustomizer.HEADER_TYPES;
    this.settings.availableMenuCollapsed = availableMenuCollapsed || TemplateCustomizer.LAYOUTS;
    this.settings.availableNavbarOptions = availableNavbarOptions || TemplateCustomizer.NAVBAR_OPTIONS;
    this.settings.availableDirections = availableDirections || TemplateCustomizer.DIRECTIONS;
    this.settings.defaultSkin = this._getDefaultSkin(typeof defaultSkin !== 'undefined' ? defaultSkin : DEFAULT_SKIN);
    this.settings.themes = themes || THEMES;
    if (this.settings.themes.length < 2) {
      var i = this.settings.controls.indexOf('theme');
      if (i !== -1) {
        this.settings.controls = this.settings.controls.slice(0, i).concat(this.settings.controls.slice(i + 1));
      }
    }
    this.settings.onSettingsChange = typeof onSettingsChange === 'function' ? onSettingsChange : function () {};
    this._loadSettings();
    this._listeners = [];
    this._controls = {};
    this._initDirection();
    this.setContentLayout(this.settings.contentLayout, false);
    this.setHeaderType(this.settings.headerType, false);
    this.setLayoutNavbarOption(this.settings.layoutNavbarOptions, false);
    this.setLayoutFooterFixed(this.settings.layoutFooterFixed, false);
    this.setDropdownOnHover(this.settings.showDropdownOnHover, false);
    this._setup();
  }
  return _createClass(TemplateCustomizer, [{
    key: "setColor",
    value: function setColor(color) {
      var defaultChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Use Helpers method
      window.Helpers.setColor(color, defaultChange);
    }
  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      this._setSetting('Theme', theme);
    }
  }, {
    key: "setSkin",
    value: function setSkin(skinName) {
      var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!this._hasControls('skins')) return;
      var skin = this._getSkinByName(skinName);
      if (!skin) return;
      this.settings.skin = skin;
      if (updateStorage) this._setSetting('Skin', skinName);
      if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
    }
  }, {
    key: "setLayoutNavbarOption",
    value: function setLayoutNavbarOption(navbarType) {
      var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this._hasControls('layoutNavbarOptions')) return;
      this.settings.layoutNavbarOptions = navbarType;
      if (updateStorage) this._setSetting('FixedNavbarOption', navbarType);
      window.Helpers.setNavbar(navbarType);
      if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
    }
  }, {
    key: "setContentLayout",
    value: function setContentLayout(contentLayout) {
      var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this._hasControls('contentLayout')) return;
      this.settings.contentLayout = contentLayout;
      if (updateStorage) this._setSetting('contentLayout', contentLayout);
      window.Helpers.setContentLayout(contentLayout);
      if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
    }
  }, {
    key: "setHeaderType",
    value: function setHeaderType(pos) {
      var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this._hasControls('headerType')) return;
      if (!['static', 'static-offcanvas', 'fixed', 'fixed-offcanvas'].includes(pos)) return;
      this.settings.headerType = pos;
      if (updateStorage) this._setSetting('HeaderType', pos);
      window.Helpers.setPosition(pos === 'fixed' || pos === 'fixed-offcanvas', pos === 'static-offcanvas' || pos === 'fixed-offcanvas');
      if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);

      // Perfect Scrollbar change on Layout change
      var menuScroll = window.Helpers.menuPsScroll;
      var PerfectScrollbarLib = window.PerfectScrollbar;
      if (this.settings.headerType === 'fixed' || this.settings.headerType === 'fixed-offcanvas') {
        // Set perfect scrollbar wheelPropagation false for fixed layout
        if (PerfectScrollbarLib && menuScroll) {
          window.Helpers.menuPsScroll.destroy();
          menuScroll = new PerfectScrollbarLib(document.querySelector('.menu-inner'), {
            suppressScrollX: true,
            wheelPropagation: false
          });
          window.Helpers.menuPsScroll = menuScroll;
        }
      } else if (menuScroll) {
        // Destroy perfect scrollbar for static layout
        window.Helpers.menuPsScroll.destroy();
      }
    }
  }, {
    key: "setLayoutFooterFixed",
    value: function setLayoutFooterFixed(fixed) {
      var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // if (!this._hasControls('layoutFooterFixed')) return
      this.settings.layoutFooterFixed = fixed;
      if (updateStorage) this._setSetting('FixedFooter', fixed);
      window.Helpers.setFooterFixed(fixed);
      if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
    }
  }, {
    key: "setDropdownOnHover",
    value: function setDropdownOnHover(open) {
      var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this._hasControls('showDropdownOnHover')) return;
      this.settings.showDropdownOnHover = open;
      if (updateStorage) this._setSetting('ShowDropdownOnHover', open);
      if (window.Helpers.mainMenu) {
        window.Helpers.mainMenu.destroy();
        config.showDropdownOnHover = open;
        var _window = window,
          Menu = _window.Menu;
        window.Helpers.mainMenu = new Menu(document.getElementById('layout-menu'), {
          orientation: 'horizontal',
          closeChildren: true,
          showDropdownOnHover: config.showDropdownOnHover
        });
      }
      if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
    }
  }, {
    key: "setRtl",
    value: function setRtl(rtl) {
      if (!this._hasControls('rtl')) return;
      this._setSetting('Rtl', String(rtl));
    }
  }, {
    key: "setLang",
    value: function setLang(lang) {
      var _this = this;
      var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (lang === this.settings.lang && !force) return;
      if (!TemplateCustomizer.LANGUAGES[lang]) throw new Error("Language \\"".concat(lang, "\\" not found!"));
      var t = TemplateCustomizer.LANGUAGES[lang];
      ['panel_header', 'panel_sub_header', 'theming_header', 'color_label', 'theme_label', 'style_switch_light', 'style_switch_dark', 'layout_header', 'layout_label', 'layout_header_label', 'content_label', 'layout_static', 'layout_offcanvas', 'layout_fixed', 'layout_fixed_offcanvas', 'layout_dd_open_label', 'layout_navbar_label', 'layout_footer_label', 'misc_header', 'skin_label', 'semiDark_label', 'direction_label'].forEach(function (key) {
        var el = _this.container.querySelector(".template-customizer-t-".concat(key));
        // eslint-disable-next-line no-unused-expressions
        el && (el.textContent = t[key]);
      });
      this.settings.lang = lang;
      if (updateStorage) this._setSetting('Lang', lang);
      if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
    }

    // Update theme settings control
  }, {
    key: "update",
    value: function update() {
      if (this._ssr) return;
      var hasNavbar = !!document.querySelector('.layout-navbar');
      var hasMenu = !!document.querySelector('.layout-menu');
      var hasHorizontalMenu = !!document.querySelector('.layout-menu-horizontal.menu, .layout-menu-horizontal .menu');
      var hasFooter = !!document.querySelector('.content-footer');
      if (this._controls.showDropdownOnHover) {
        if (hasMenu) {
          this._controls.showDropdownOnHover.setAttribute('disabled', 'disabled');
          this._controls.showDropdownOnHover.classList.add('disabled');
        } else {
          this._controls.showDropdownOnHover.removeAttribute('disabled');
          this._controls.showDropdownOnHover.classList.remove('disabled');
        }
      }
      if (this._controls.layoutNavbarOptions) {
        if (!hasNavbar) {
          this._controls.layoutNavbarOptions.setAttribute('disabled', 'disabled');
          this._controls.layoutNavbarOptionsW.classList.add('disabled');
        } else {
          this._controls.layoutNavbarOptions.removeAttribute('disabled');
          this._controls.layoutNavbarOptionsW.classList.remove('disabled');
        }

        //  Horizontal menu fixed layout - disabled fixed navbar switch
        if (hasHorizontalMenu && hasNavbar && this.settings.headerType === 'fixed') {
          this._controls.layoutNavbarOptions.setAttribute('disabled', 'disabled');
          this._controls.layoutNavbarOptionsW.classList.add('disabled');
        }
      }
      if (this._controls.layoutFooterFixed) {
        if (!hasFooter) {
          this._controls.layoutFooterFixed.setAttribute('disabled', 'disabled');
          this._controls.layoutFooterFixedW.classList.add('disabled');
        } else {
          this._controls.layoutFooterFixed.removeAttribute('disabled');
          this._controls.layoutFooterFixedW.classList.remove('disabled');
        }
      }
      if (this._controls.headerType) {
        // Disable menu layouts options if menu (vertical or horizontal) is not there
        if (hasMenu || hasHorizontalMenu) {
          // (Updated condition)
          this._controls.headerType.removeAttribute('disabled');
        } else {
          this._controls.headerType.setAttribute('disabled', 'disabled');
        }
      }
    }

    // Clear local storage
  }, {
    key: "clearLocalStorage",
    value: function clearLocalStorage() {
      if (this._ssr) return;
      var layoutName = this._getLayoutName();
      var keysToRemove = ['Color', 'Theme', 'Skin', 'SemiDark', 'LayoutCollapsed', 'FixedNavbarOption', 'HeaderType', 'contentLayout', 'Rtl', 'Lang'];
      keysToRemove.forEach(function (key) {
        var localStorageKey = "templateCustomizer-".concat(layoutName, "--").concat(key);
        localStorage.removeItem(localStorageKey);
      });
      this._showResetBtnNotification(false);
    }

    // Clear local storage
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._ssr) return;
      this._cleanup();
      this.settings = null;
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }, {
    key: "_loadSettings",
    value: function _loadSettings() {
      // Get settings
      var rtlOption = this._getSetting('Rtl');
      var color = this._getSetting('Color');
      var theme = this._getSetting('Theme');
      var skin = this._getSetting('Skin');
      var semiDark = this._getSetting('SemiDark'); // Default value will be set from main.js
      var contentLayout = this._getSetting('contentLayout');
      var collapsedMenu = this._getSetting('LayoutCollapsed'); // Value will be set from main.js
      var dropdownOnHover = this._getSetting('ShowDropdownOnHover'); // Value will be set from main.js
      var navbarOption = this._getSetting('FixedNavbarOption');
      var fixedFooter = this._getSetting('FixedFooter');
      var layoutType = this._getSetting('HeaderType');

      // Reset Button
      if (rtlOption || theme || skin || contentLayout || collapsedMenu || navbarOption || layoutType || color || semiDark) {
        this._showResetBtnNotification(true);
      } else {
        this._showResetBtnNotification(false);
      }

      // Header Type

      this.settings.headerType = ['static', 'static-offcanvas', 'fixed', 'fixed-offcanvas'].includes(layoutType) ? layoutType : this.settings.defaultHeaderType;

      // ! Set settings by following priority: Local Storage, Theme Config, HTML Classes
      this.settings.rtl = rtlOption !== '' ? rtlOption === 'true' : this.settings.defaultTextDir;

      // Color
      if (color) {
        primaryColorFlag = true;
      }
      this.settings.color = color || this.settings.defaultPrimaryColor;
      this.setColor(this.settings.color, primaryColorFlag);

      // Style
      this.settings.themesOpt = this.settings.themes.includes(theme) ? theme : this.settings.defaultTheme;

      // Get the systemTheme value using JS
      var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      // appliedTheme will be used to set the theme based on the settings, we keep this separate as we can't set 'system' or 'system' in data-bs-theme
      var appliedTheme;
      if (this.settings.themes.includes(theme)) {
        appliedTheme = theme === 'system' ? systemTheme : theme;
      } else if (this.settings.defaultTheme === 'system') {
        appliedTheme = systemTheme;
      } else {
        appliedTheme = this.settings.defaultTheme;
      }
      this.settings.theme = this.settings.defaultTheme;
      document.documentElement.setAttribute('data-bs-theme', appliedTheme);

      // Semi Dark
      this.settings.semiDark = semiDark ? semiDark === 'true' : this.settings.defaultSemiDark;
      //! FIX: Added data-semidark-menu attribute to avoid semi dark menu flicker effect on page load
      if (this.settings.semiDark) document.documentElement.setAttribute('data-semidark-menu', this.settings.semiDark);

      // Content Layout
      this.settings.contentLayout = contentLayout || this.settings.defaultContentLayout;

      // Layout Collapsed
      this.settings.layoutCollapsed = collapsedMenu ? collapsedMenu === 'true' : this.settings.defaultMenuCollapsed;
      // Add layout-menu-collapsed class to the body if the menu is collapsed
      if (this.settings.layoutCollapsed) document.documentElement.classList.add('layout-menu-collapsed');

      // Dropdown on Hover
      this.settings.showDropdownOnHover = dropdownOnHover ? dropdownOnHover === 'true' : this.settings.defaultShowDropdownOnHover;

      // Navbar Option
      this.settings.layoutNavbarOptions = ['static', 'sticky', 'hidden'].includes(navbarOption) ? navbarOption : this.settings.defaultNavbarType;

      // Footer Fixed
      this.settings.layoutFooterFixed = fixedFooter ? fixedFooter === 'true' : this.settings.defaultFooterFixed;
      this.settings.skin = this._getSkinByName(this._getSetting('Skin'), true);

      // Filter options depending on available controls
      if (!this._hasControls('rtl')) this.settings.rtl = document.documentElement.getAttribute('dir') === 'rtl';
      if (!this._hasControls('theme')) this.settings.theme = window.Helpers.isDarkStyle() ? 'dark' : 'light';
      if (!this._hasControls('contentLayout')) this.settings.contentLayout = null;
      if (!this._hasControls('headerType')) this.settings.headerType = null;
      if (!this._hasControls('layoutCollapsed')) this.settings.layoutCollapsed = null;
      if (!this._hasControls('layoutNavbarOptions')) this.settings.layoutNavbarOptions = null;
      if (!this._hasControls('skins')) this.settings.skin = null;
      if (!this._hasControls('semiDark')) this.settings.semiDark = null;
    }

    // Setup theme settings controls and events
  }, {
    key: "_setup",
    value: function _setup() {
      var _this2 = this;
      var _container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      // Function to create customizer elements
      var createOptionElement = function createOptionElement(nameVal, title, inputName, image) {
        var isIcon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var divElement = document.createElement('div');
        divElement.classList.add('col-4', 'px-2');

        // Determine the correct classes based on whether it's an icon or image
        var optionClass = isIcon ? 'custom-option custom-option-icon' : 'custom-option custom-option-image custom-option-image-radio';

        // Create the inner HTML structure
        divElement.innerHTML = "\\n        <div class=\\"form-check ".concat(optionClass, " mb-0\\">\\n          <label class=\\"form-check-label custom-option-content p-0\\" for=\\"").concat(inputName).concat(nameVal, "\\">\\n            <span class=\\"custom-option-body mb-0 scaleX-n1-rtl\\"></span>\\n          </label>\\n          <input\\n            name=\\"").concat(inputName, "\\"\\n            class=\\"form-check-input d-none\\"\\n            type=\\"radio\\"\\n            value=\\"").concat(nameVal, "\\"\\n            id=\\"").concat(inputName).concat(nameVal, "\\" />\\n        </div>\\n        <label class=\\"form-check-label small text-nowrap text-body\\" for=\\"").concat(inputName).concat(nameVal, "\\">").concat(title, "</label>\\n      ");
        if (isIcon) {
          // If it's an icon, insert the icon HTML directly
          divElement.querySelector('.custom-option-body').innerHTML = image;
        } else {
          // Otherwise, assume it's an SVG file name and fetch its content
          fetch("".concat(assetsPath, "img/customizer/").concat(image)).then(function (response) {
            return response.text();
          }).then(function (svgContent) {
            // Insert the SVG content into the HTML
            divElement.querySelector('.custom-option-body').innerHTML = svgContent;
          }).catch(function (error) {
            return console.error('Error loading SVG:', error);
          });
        }
        return divElement;
      };
      this._cleanup();
      this.container = this._getElementFromString(_template_customizer_template_customizer_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

      // Customizer visibility
      //
      this.container.setAttribute('style', "visibility: ".concat(this.settings.displayCustomizer ? 'visible' : 'hidden'));

      // Open btn
      var openBtn = this.container.querySelector('.template-customizer-open-btn');
      var openBtnCb = function openBtnCb() {
        _this2.container.classList.add('template-customizer-open');
        _this2.update();
        if (_this2._updateInterval) clearInterval(_this2._updateInterval);
        _this2._updateInterval = setInterval(function () {
          _this2.update();
        }, 500);
      };
      openBtn.addEventListener('click', openBtnCb);
      this._listeners.push([openBtn, 'click', openBtnCb]);

      // Reset btn
      var resetBtn = this.container.querySelector('.template-customizer-reset-btn');
      var resetBtnCb = function resetBtnCb() {
        _this2.clearLocalStorage();
        window.location.reload();
      };
      resetBtn.addEventListener('click', resetBtnCb);
      this._listeners.push([resetBtn, 'click', resetBtnCb]);

      // Close btn
      var closeBtn = this.container.querySelector('.template-customizer-close-btn');
      var closeBtnCb = function closeBtnCb() {
        _this2.container.classList.remove('template-customizer-open');
        if (_this2._updateInterval) {
          clearInterval(_this2._updateInterval);
          _this2._updateInterval = null;
        }
      };
      closeBtn.addEventListener('click', closeBtnCb);
      this._listeners.push([closeBtn, 'click', closeBtnCb]);

      // Color
      var colorW = this.container.querySelector('.template-customizer-color');
      var colorOpt = colorW.querySelector('.template-customizer-colors-options');
      if (!this._hasControls('color')) {
        colorW.parentNode.removeChild(colorW);
      } else {
        var inputName = 'colorRadioIcon';
        this.settings.availableColors.forEach(function (color) {
          var colorEl = "<div class=\\"form-check custom-option custom-option-icon mb-0\\">\\n          <label class=\\"form-check-label custom-option-content p-0\\" for=\\"".concat(inputName).concat(color.name, "\\">\\n            <span class=\\"custom-option-body mb-0 scaleX-n1-rtl\\" style=\\"background-color: ").concat(color.color, ";\\"></span>\\n          </label>\\n          <input\\n            name=\\"").concat(inputName, "\\"\\n            class=\\"form-check-input d-none\\"\\n            type=\\"radio\\"\\n            value=\\"").concat(color.color, "\\"\\n            data-color=\\"").concat(color.color, "\\"\\n            id=\\"").concat(inputName).concat(color.name, "\\" />\\n        </div>");

          // convert colorEl string to HTML element
          var colorEle = _this2._getElementFromString(colorEl);
          colorOpt.appendChild(colorEle);
        });
        colorOpt.appendChild(this._getElementFromString('<div class="form-check custom-option custom-option-icon mb-0"><label class="form-check-label custom-option-content" for="colorRadioIcon"><span class="custom-option-body customizer-nano-picker mb-50"><i class="ri ri-palette-line icon-base"></i></span></label><input name="colorRadioIcon" class="form-check-input picker d-none" type="radio" value="picker" id="colorRadioIcon" /> </div>'));
        var colorSelector = colorOpt.querySelector("input[value=\\"".concat(this.settings.color, "\\"]"));
        if (colorSelector) {
          colorSelector.setAttribute('checked', 'checked');
          colorOpt.querySelector('input[value="picker"]').removeAttribute('checked');
        } else {
          colorOpt.querySelector('input[value="picker"]').setAttribute('checked', 'checked');
        }
        var colorCb = function colorCb(e) {
          if (e.target.value === 'picker') {
            document.querySelector('.custom-option-content .pcr-button').click();
          } else {
            _this2._setSetting('Color', e.target.dataset.color);
            _this2.setColor(e.target.dataset.color, function () {
              _this2._loadingState(false);
            }, true);
          }
        };
        colorOpt.addEventListener('change', colorCb);
        this._listeners.push([colorOpt, 'change', colorCb]);
      }

      // Theme
      var themeW = this.container.querySelector('.template-customizer-theme');
      var themeOpt = themeW.querySelector('.template-customizer-themes-options');
      if (!this._hasControls('theme')) {
        themeW.parentNode.removeChild(themeW);
      } else {
        this.settings.availableThemes.forEach(function (theme) {
          var themeEl = createOptionElement(theme.name, theme.title, 'customRadioIcon', theme.image, true);
          themeOpt.appendChild(themeEl);
        });
        if (themeOpt.querySelector("input[value=\\"".concat(this.settings.themesOpt, "\\"]"))) {
          themeOpt.querySelector("input[value=\\"".concat(this.settings.themesOpt, "\\"]")).setAttribute('checked', 'checked');
        }

        // themeCb
        var themeCb = function themeCb(e) {
          document.documentElement.setAttribute('data-bs-theme', e.target.value);
          if (_this2._hasControls('semiDark')) {
            var semiDarkL = _this2.container.querySelector('.template-customizer-semiDark');
            if (e.target.value === 'dark') {
              semiDarkL.classList.add('d-none');
            } else {
              semiDarkL.classList.remove('d-none');
            }
          }

          // Update below commented code for data-bs-theme-value attribute value matches with e.target.value
          window.Helpers.syncThemeToggles(e.target.value);
          _this2.setTheme(e.target.value, true, function () {
            _this2._loadingState(false);
          });
        };
        themeOpt.addEventListener('change', themeCb);
        this._listeners.push([themeOpt, 'change', themeCb]);
      }

      // Skin
      var skinsW = this.container.querySelector('.template-customizer-skins');
      var skinsWInner = skinsW.querySelector('.template-customizer-skins-options');
      if (!this._hasControls('skins')) {
        skinsW.parentNode.removeChild(skinsW);
      } else {
        this.settings.availableSkins.forEach(function (skin) {
          var skinEl = createOptionElement(skin.name, skin.title, 'skinRadios', skin.image);
          skinsWInner.appendChild(skinEl);
        });
        skinsWInner.querySelector("input[value=\\"".concat(this.settings.skin.name, "\\"]")).setAttribute('checked', 'checked');
        document.documentElement.setAttribute('data-skin', this.settings.skin.name);
        var skinCb = function skinCb(e) {
          document.documentElement.setAttribute('data-skin', e.target.value);
          _this2.setSkin(e.target.value, true, function () {
            _this2._loadingState(false, true);
          });
        };
        skinsWInner.addEventListener('change', skinCb);
        this._listeners.push([skinsWInner, 'change', skinCb]);
      }

      // SemiDark
      // update menu's data-bs-theme attribute to dark & light on switch changes on & off respectively
      var semiDarkSwitch = this.container.querySelector('.template-customizer-semi-dark-switch');
      var semiDarkSection = this.container.querySelector('.template-customizer-semiDark');
      if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        semiDarkSection.classList.add('d-none');
      }
      if (!this._hasControls('semiDark')) {
        semiDarkSection.remove();
      } else if (this._hasControls('semiDark') && this._getSetting('Theme') === 'dark') {
        semiDarkSwitch.classList.add('d-none');
      } else {
        if (this.settings.semiDark) {
          semiDarkSwitch.setAttribute('checked', 'checked');
        }
        var semiDarkSwitchCb = function semiDarkSwitchCb(e) {
          var isDark = e.target.checked;
          var theme = isDark ? 'dark' : 'light';
          if (theme === 'dark') {
            document.getElementById('layout-menu').setAttribute('data-bs-theme', theme);
            //! FIX: Added data-semidark-menu attribute to avoid semi dark menu flicker effect on page load
            document.documentElement.setAttribute('data-semidark-menu', 'true');
          } else {
            document.getElementById('layout-menu').removeAttribute('data-bs-theme');
            document.documentElement.removeAttribute('data-semidark-menu');
          }
          _this2._setSetting('SemiDark', isDark);
        };
        semiDarkSwitch.addEventListener('change', semiDarkSwitchCb);
        this._listeners.push([semiDarkSwitch, 'change', semiDarkSwitchCb]);
      }
      var themingW = this.container.querySelector('.template-customizer-theming');
      if (!this._hasControls('color') && !this._hasControls('theme') && !this._hasControls('skins') && !this._hasControls('semiDark')) {
        themingW.parentNode.removeChild(themingW);
      }

      // Layout wrapper
      var layoutW = this.container.querySelector('.template-customizer-layout');
      if (!this._hasControls('contentLayout headerType layoutCollapsed layoutNavbarOptions rtl', true)) {
        layoutW.parentNode.removeChild(layoutW);
      } else {
        // Layouts Collapsed: Expanded, Collapsed
        var layoutCollapsedW = this.container.querySelector('.template-customizer-layouts');
        if (!this._hasControls('layoutCollapsed')) {
          layoutCollapsedW.parentNode.removeChild(layoutCollapsedW);
        } else {
          setTimeout(function () {
            if (document.querySelector('.layout-menu-horizontal')) {
              layoutCollapsedW.parentNode.removeChild(layoutCollapsedW);
            }
          }, 100);
          var layoutCollapsedOpt = layoutCollapsedW.querySelector('.template-customizer-layouts-options');
          this.settings.availableMenuCollapsed.forEach(function (layoutOpt) {
            var layoutsEl = createOptionElement(layoutOpt.name, layoutOpt.title, 'layoutsRadios', layoutOpt.image);
            layoutCollapsedOpt.appendChild(layoutsEl);
          });
          layoutCollapsedOpt.querySelector("input[value=\\"".concat(this.settings.layoutCollapsed ? 'collapsed' : 'expanded', "\\"]")).setAttribute('checked', 'checked');
          var layoutCb = function layoutCb(e) {
            window.Helpers.setCollapsed(e.target.value === 'collapsed', true);
            _this2._setSetting('LayoutCollapsed', e.target.value === 'collapsed');
          };
          layoutCollapsedOpt.addEventListener('change', layoutCb);
          this._listeners.push([layoutCollapsedOpt, 'change', layoutCb]);
        }

        // CONTENT
        var contentWrapper = this.container.querySelector('.template-customizer-content');
        // ? Hide RTL control in following 2 case
        if (!this._hasControls('contentLayout')) {
          contentWrapper.parentNode.removeChild(contentWrapper);
        } else {
          var contentOpt = contentWrapper.querySelector('.template-customizer-content-options');
          this.settings.availableContentLayouts.forEach(function (content) {
            var contentEl = createOptionElement(content.name, content.title, 'contentRadioIcon', content.image);
            contentOpt.appendChild(contentEl);
          });
          contentOpt.querySelector("input[value=\\"".concat(this.settings.contentLayout, "\\"]")).setAttribute('checked', 'checked');
          var contentCb = function contentCb(e) {
            _this2._loading = true;
            _this2._loadingState(true, true);
            _this2.setContentLayout(e.target.value, true, function () {
              _this2._loading = false;
              _this2._loadingState(false, true);
            });
          };
          contentOpt.addEventListener('change', contentCb);
          this._listeners.push([contentOpt, 'change', contentCb]);
        }

        // Header Layout Type
        var headerTypeW = this.container.querySelector('.template-customizer-headerOptions');
        var templateName = document.documentElement.getAttribute('data-template').split('-');
        if (!this._hasControls('headerType')) {
          headerTypeW.parentNode.removeChild(headerTypeW);
        } else {
          var headerOpt = headerTypeW.querySelector('.template-customizer-header-options');
          setTimeout(function () {
            if (templateName.includes('vertical')) {
              headerTypeW.parentNode.removeChild(headerTypeW);
            }
          }, 100);
          this.settings.availableHeaderTypes.forEach(function (header) {
            var headerEl = createOptionElement(header.name, header.title, 'headerRadioIcon', header.image);
            headerOpt.appendChild(headerEl);
          });
          headerOpt.querySelector("input[value=\\"".concat(this.settings.headerType, "\\"]")).setAttribute('checked', 'checked');
          var headerTypeCb = function headerTypeCb(e) {
            _this2.setHeaderType(e.target.value);
          };
          headerOpt.addEventListener('change', headerTypeCb);
          this._listeners.push([headerOpt, 'change', headerTypeCb]);
        }

        // Layout Navbar Options
        var navbarOption = this.container.querySelector('.template-customizer-layoutNavbarOptions');
        if (!this._hasControls('layoutNavbarOptions')) {
          navbarOption.parentNode.removeChild(navbarOption);
        } else {
          setTimeout(function () {
            if (templateName.includes('horizontal')) {
              navbarOption.parentNode.removeChild(navbarOption);
            }
          }, 100);
          var navbarTypeOpt = navbarOption.querySelector('.template-customizer-navbar-options');
          this.settings.availableNavbarOptions.forEach(function (navbarOpt) {
            var navbarEl = createOptionElement(navbarOpt.name, navbarOpt.title, 'navbarOptionRadios', navbarOpt.image);
            navbarTypeOpt.appendChild(navbarEl);
          });
          // check navbar option from settings
          navbarTypeOpt.querySelector("input[value=\\"".concat(this.settings.layoutNavbarOptions, "\\"]")).setAttribute('checked', 'checked');
          var navbarCb = function navbarCb(e) {
            _this2._loading = true;
            _this2._loadingState(true, true);
            _this2.setLayoutNavbarOption(e.target.value, true, function () {
              _this2._loading = false;
              _this2._loadingState(false, true);
            });
          };
          navbarTypeOpt.addEventListener('change', navbarCb);
          this._listeners.push([navbarTypeOpt, 'change', navbarCb]);
        }

        // RTL
        var directionW = this.container.querySelector('.template-customizer-directions');
        // ? Hide RTL control in following 2 case
        if (!this._hasControls('rtl')) {
          directionW.parentNode.removeChild(directionW);
        } else {
          var directionOpt = directionW.querySelector('.template-customizer-directions-options');
          this.settings.availableDirections.forEach(function (dir) {
            var dirEl = createOptionElement(dir.name, dir.title, 'directionRadioIcon', dir.image);
            directionOpt.appendChild(dirEl);
          });
          directionOpt.querySelector("input[value=\\"".concat(this.settings.rtl ? 'rtl' : 'ltr', "\\"]")).setAttribute('checked', 'checked');
          var rtlCb = function rtlCb(e) {
            _this2._setSetting('Lang', _this2.settings.lang);

            // For demo purpose, we will use EN as LTR and AR as RTL Language
            _this2._setSetting('Lang', _this2.settings.lang === 'ar' ? 'en' : 'ar');
            _this2.settings.rtl = e.target.value === 'rtl';

            // Cache the language setting
            var currentLang = _this2._getSetting('Lang');
            var languageDropdown = document.querySelector('.dropdown-language .dropdown-menu');
            if (languageDropdown) {
              var dropdownItem = languageDropdown.querySelector("[data-language=\\"".concat(currentLang, "\\"]"));
              dropdownItem.click();
            }

            // Use querySelector for cleaner and more flexible selection
            _this2._initDirection();
            _this2.setRtl(e.target.value === 'rtl', true, function () {
              _this2._loadingState(false);
            });
          };
          directionOpt.addEventListener('change', rtlCb);
          this._listeners.push([directionOpt, 'change', rtlCb]);
        }
      }
      setTimeout(function () {
        var layoutCustom = _this2.container.querySelector('.template-customizer-layout');
        var layoutTheme = _this2.container.querySelector('.template-customizer-theming');
        var checkSemiDarkWrapper = document.documentElement.getAttribute('data-bs-theme');
        var checkSemiDark = false;
        if (checkSemiDarkWrapper === 'light' && document.querySelector('.layout-menu')) {
          if (document.querySelector('.layout-menu').getAttribute('data-bs-theme') === 'dark') {
            checkSemiDark = true;
          }
          if (checkSemiDark === true) {
            var _semiDarkSwitch = layoutTheme.querySelector('.template-customizer-semi-dark-switch');
            _semiDarkSwitch.setAttribute('checked', 'checked');
          }
        }
        if (document.querySelector('.menu-vertical')) {
          if (!_this2._hasControls('rtl contentLayout layoutCollapsed layoutNavbarOptions', true)) {
            if (layoutCustom) {
              layoutCustom.parentNode.removeChild(layoutCustom);
            }
          }
        } else if (document.querySelector('.menu-horizontal')) {
          if (!_this2._hasControls('rtl contentLayout headerType', true)) {
            if (layoutCustom) {
              layoutCustom.parentNode.removeChild(layoutCustom);
            }
          }
        }
      }, 100);

      // Set language
      this.setLang(this.settings.lang, false, true);

      // Append container
      if (_container === document) {
        if (_container.body) {
          _container.body.appendChild(this.container);
        } else {
          window.addEventListener('DOMContentLoaded', function () {
            return _container.body.appendChild(_this2.container);
          });
        }
      } else {
        _container.appendChild(this.container);
      }
    }
  }, {
    key: "_initDirection",
    value: function _initDirection() {
      if (this._hasControls('rtl')) document.documentElement.setAttribute('dir', this.settings.rtl ? 'rtl' : 'ltr');
    }
  }, {
    key: "_loadingState",
    value: function _loadingState(enable, skins) {
      this.container.classList[enable ? 'add' : 'remove']("template-customizer-loading".concat(skins ? '-theme' : ''));
    }
  }, {
    key: "_getElementFromString",
    value: function _getElementFromString(str) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = str;
      return wrapper.firstChild;
    }

    // Set settings in LocalStorage with layout & key
  }, {
    key: "_setSetting",
    value: function _setSetting(key, val) {
      var layoutName = this._getLayoutName();
      try {
        localStorage.setItem("templateCustomizer-".concat(layoutName, "--").concat(key), String(val));
        this._showResetBtnNotification();
      } catch (e) {
        // Catch Error
      }
    }

    // Set settings in LocalStorage with layout & key
  }, {
    key: "_getSetting",
    value: function _getSetting(key) {
      var result = null;
      var layoutName = this._getLayoutName();
      try {
        result = localStorage.getItem("templateCustomizer-".concat(layoutName, "--").concat(key));
      } catch (e) {
        // Catch error
      }
      return String(result || '');
    }
  }, {
    key: "_showResetBtnNotification",
    value: function _showResetBtnNotification() {
      var _this3 = this;
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      setTimeout(function () {
        var resetBtnAttr = _this3.container.querySelector('.template-customizer-reset-btn .badge');
        if (show) {
          resetBtnAttr.classList.remove('d-none');
        } else {
          resetBtnAttr.classList.add('d-none');
        }
      }, 200);
    }

    // Get layout name to set unique
  }, {
    key: "_getLayoutName",
    value: function _getLayoutName() {
      return document.getElementsByTagName('HTML')[0].getAttribute('data-template');
    }
  }, {
    key: "_removeListeners",
    value: function _removeListeners() {
      for (var i = 0, l = this._listeners.length; i < l; i++) {
        this._listeners[i][0].removeEventListener(this._listeners[i][1], this._listeners[i][2]);
      }
    }
  }, {
    key: "_cleanup",
    value: function _cleanup() {
      this._removeListeners();
      this._listeners = [];
      this._controls = {};
      if (this._updateInterval) {
        clearInterval(this._updateInterval);
        this._updateInterval = null;
      }
    }
  }, {
    key: "_ssr",
    get: function get() {
      return typeof window === 'undefined';
    }

    // Check controls availability
  }, {
    key: "_hasControls",
    value: function _hasControls(controls) {
      var _this4 = this;
      var oneOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return controls.split(' ').reduce(function (result, control) {
        if (_this4.settings.controls.indexOf(control) !== -1) {
          if (oneOf || result !== false) result = true;
        } else if (!oneOf || result !== true) result = false;
        return result;
      }, null);
    }

    // Get the default Skin
  }, {
    key: "_getDefaultSkin",
    value: function _getDefaultSkin(skinId) {
      var skin = typeof skinId === 'string' ? this._getSkinByName(skinId, false) : this.settings.availableSkins[skinId];
      if (!skin) {
        throw new Error("Skin ID \\"".concat(skinId, "\\" not found!"));
      }
      return skin;
    }

    // Get theme by skinId/skinName
  }, {
    key: "_getSkinByName",
    value: function _getSkinByName(skinName) {
      var returnDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var skins = this.settings.availableSkins;
      for (var i = 0, l = skins.length; i < l; i++) {
        if (skins[i].name === skinName) return skins[i];
      }
      return returnDefault ? this.settings.defaultSkin : null;
    }
  }]);
}(); // Colors
TemplateCustomizer.COLORS = [{
  name: 'primary',
  title: 'Primary',
  color: rootStyles.getPropertyValue('--bs-primary').trim()
}, {
  name: 'success',
  title: 'Success',
  color: '#0D9394'
}, {
  name: 'warning',
  title: 'Warning',
  color: '#FFAB1D'
}, {
  name: 'danger',
  title: 'Danger',
  color: '#EB3D63'
}, {
  name: 'info',
  title: 'Info',
  color: '#2092EC'
}];

// Themes
TemplateCustomizer.THEMES = [{
  name: 'light',
  title: 'Light',
  image: '<i class="ri ri-sun-line icon-base mb-0"></i>'
}, {
  name: 'dark',
  title: 'Dark',
  image: '<i class="ri ri-moon-clear-line icon-base mb-0"></i>'
}, {
  name: 'system',
  title: 'System',
  image: '<i class="ri ri-computer-line icon-base mb-0"></i>'
}];

// Skins
TemplateCustomizer.SKINS = [{
  name: 'default',
  title: 'Default',
  image: 'skin-default.svg'
}, {
  name: 'bordered',
  title: 'Bordered',
  image: 'skin-border.svg'
}];

// Layouts
TemplateCustomizer.LAYOUTS = [{
  name: 'expanded',
  title: 'Expanded',
  image: 'layouts-expanded.svg'
}, {
  name: 'collapsed',
  title: 'Collapsed',
  image: 'layouts-collapsed.svg'
}];

// Navbar Options
TemplateCustomizer.NAVBAR_OPTIONS = [{
  name: 'sticky',
  title: 'Sticky',
  image: 'navbar-sticky.svg'
}, {
  name: 'static',
  title: 'Static',
  image: 'navbar-static.svg'
}, {
  name: 'hidden',
  title: 'Hidden',
  image: 'navbar-hidden.svg'
}];

// Header Types
TemplateCustomizer.HEADER_TYPES = [{
  name: 'fixed',
  title: 'Fixed',
  image: 'horizontal-fixed.svg'
}, {
  name: 'static',
  title: 'Static',
  image: 'horizontal-static.svg'
}];

// Content Types
TemplateCustomizer.CONTENT = [{
  name: 'compact',
  title: 'Compact',
  image: 'content-compact.svg'
}, {
  name: 'wide',
  title: 'Wide',
  image: 'content-wide.svg'
}];

// Directions
TemplateCustomizer.DIRECTIONS = [{
  name: 'ltr',
  title: 'Left to Right (En)',
  image: 'direction-ltr.svg'
}, {
  name: 'rtl',
  title: 'Right to Left (Ar)',
  image: 'direction-rtl.svg'
}];

// Theme setting language
TemplateCustomizer.LANGUAGES = {
  en: {
    panel_header: 'Template Customizer',
    panel_sub_header: 'Customize and preview in real time',
    theming_header: 'Theming',
    color_label: 'Primary Color',
    theme_label: 'Theme',
    skin_label: 'Skins',
    semiDark_label: 'Semi Dark',
    layout_header: 'Layout',
    layout_label: 'Menu (Navigation)',
    layout_header_label: 'Header Types',
    content_label: 'Content',
    layout_navbar_label: 'Navbar Type',
    direction_label: 'Direction'
  },
  fr: {
    panel_header: 'Modèle De Personnalisation',
    panel_sub_header: 'Personnalisez et prévisualisez en temps réel',
    theming_header: 'Thématisation',
    color_label: 'Couleur primaire',
    theme_label: 'Thème',
    skin_label: 'Peaux',
    semiDark_label: 'Demi-foncé',
    layout_header: 'Disposition',
    layout_label: 'Menu (Navigation)',
    layout_header_label: "Types d'en-tête",
    content_label: 'Contenu',
    layout_navbar_label: 'Type de barre de navigation',
    direction_label: 'Direction'
  },
  ar: {
    panel_header: 'أداة تخصيص القالب',
    panel_sub_header: 'تخصيص ومعاينة في الوقت الحقيقي',
    theming_header: 'السمات',
    color_label: 'اللون الأساسي',
    theme_label: 'سمة',
    skin_label: 'جلود',
    semiDark_label: 'شبه داكن',
    layout_header: 'تَخطِيط',
    layout_label: 'القائمة (الملاحة)',
    layout_header_label: 'أنواع الرأس',
    content_label: 'محتوى',
    layout_navbar_label: 'نوع شريط التنقل',
    direction_label: 'اتجاه'
  },
  de: {
    panel_header: 'Vorlagen-Anpasser',
    panel_sub_header: 'Anpassen und Vorschau in Echtzeit',
    theming_header: 'Themen',
    color_label: 'Grundfarbe',
    theme_label: 'Thema',
    skin_label: 'Skins',
    semiDark_label: 'Halbdunkel',
    layout_header: 'Layout',
    layout_label: 'Menü (Navigation)',
    layout_header_label: 'Header-Typen',
    content_label: 'Inhalt',
    layout_navbar_label: 'Art der Navigationsleiste',
    direction_label: 'Richtung'
  }
};
window.TemplateCustomizer = TemplateCustomizer;


/**
 * Initialize color picker functionality for template customization
 * Caches DOM elements and handles color picker setup
 */
var initializeColorPicker = function initializeColorPicker() {
  // Cache DOM elements
  var elements = {
    pickerWrapper: document.querySelector('.template-customizer-colors-options input[value="picker"]'),
    pickerEl: document.querySelector('.customizer-nano-picker'),
    pcrButton: document.querySelector('.custom-option-content .pcr-button')
  };

  // Early return if required elements missing
  if (!elements.pickerWrapper || !elements.pickerEl) {
    console.warn('Required color picker elements not found');
    return;
  }

  // Seth the current color based on the checked state of the picker wrapper
  var currentColor = elements.pickerWrapper.getAttribute('checked') === 'checked' ? window.templateCustomizer._getSetting('Color') ? window.templateCustomizer._getSetting('Color') : window.templateCustomizer.settings.defaultPrimaryColor : window.Helpers.getCssVar('gray-900', true);

  // Configure and initialize Pickr color picker
  var picker = new Pickr({
    el: elements.pickerEl,
    theme: 'nano',
    default: currentColor,
    defaultRepresentation: 'HEX',
    comparison: false,
    components: {
      hue: true,
      preview: true,
      interaction: {
        input: true
      }
    }
  });
  // Add color picker icon
  picker._root.button.classList.add('ri', 'ri-palette-line');

  // Handle color changes
  picker.on('change', function (color) {
    var _elements$pcrButton;
    var hexColor = color.toHEXA().toString();
    var rgbaColor = color.toRGBA().toString();

    // Update picker button color if exists
    (_elements$pcrButton = elements.pcrButton) === null || _elements$pcrButton === void 0 || _elements$pcrButton.style.setProperty('--pcr-color', rgbaColor);

    // Update selected option state
    elements.pickerWrapper.checked = true;
    window.Helpers.updateCustomOptionCheck(elements.pickerWrapper);

    // Update theme color settings
    window.templateCustomizer._setSetting('Color', hexColor);
    window.templateCustomizer.setColor(hexColor, true);
  });
};
window.onload = function () {
  initializeColorPicker();
  var pcrButton = document.querySelector('.custom-option-content .pcr-button');
  pcrButton === null || pcrButton === void 0 || pcrButton.style.setProperty('--pcr-color', window.templateCustomizer.settings.defaultPrimaryColor);
};

//# sourceURL=webpack://Materialize/./js/template-customizer.js?`)},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./js/_template-customizer/_template-customizer.scss":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABClJREFUaEPtmY1RFEEQhbsjUCIQIhAiUCNQIxAiECIQIxAiECIAIpAMhAiECIQI2vquZqnZvp6fhb3SK5mqq6Ju92b69bzXf6is+dI1t1+eAfztG5z1BsxsU0S+ici2iPB3vm5E5EpEDlSVv2dZswFIxv8UkZcNy+5EZGcuEHMCOBeR951uvVDVD53vVl+bE8DvDu8Pxtyo6ta/BsByg1R15Bwzqz5/LJgn34CZwfnPInI4BUB6/1hV0cSjVxcAM4PbcBZjL0XklIPN7Is3fLCkdQPpPYw/VNXj5IhPIvJWRIhSl6p60ULWBGBm30Vk123EwRxCuIzWkkjNrCZywith10ewE1Xdq4GoAjCz/RTXW44Ynt+LyBEfT43kYfbj86J3w5Q32DNcRQDpwF+dkQXDMey8xem0L3TEqB4g3PZWad8agBMRgZPeu96D1/C2Zbh3X0p80Op1xxloztN48bMQQNoc7+eLEuAoPSPiIDY4Ooo+E6ixeNXM+D3GERz2U3CIqMstLJUgJQDe+7eq6mub0NYEkLAKwEHkiBQDCZtddZCZ8d6r7JDwFkoARklHRPZUFVDVZWbwGuNrC4EfdOzFrRABh3Wnqhv+d70AEBLGFROPmeHlnM81G69UdSd6IUuM0GgUVn1uqWmg5EmMfBeEyB7Pe3txBkY+rGT8j0J+WXq/BgDkUCaqLgEAnwcRog0veMIqFAAwCy2wnw+bI2GaGboBgF9k5N0o0rUSGUb4eO0BeO9j/GYhkSHMHMTIqwGARX6p6a+nlPBl8kZuXMD9j6pKfF9aZuaFOdJCEL5D4eYb9wCYVCanrBmGyii/tIq+SLj/HQBCaM5bLzwfPqdQ6FpVHyra4IbuVbXaY7dETC2ESPNNWiIOi69CcdgSMXsh4tNSUiklMgwmC0aNd08Y5WAES6HHehM4gu97wyhBgWpgqXsrASglprDy7CwhehMZOSbK6JMSma+Fio1KltCmlBIj7gfZOGx8ppQSXrhzFnOhJ/31BDkjFHRvOd09x0mRBA9SFgxUgHpQg0q0t5ymPMlL+EnldFTfDA0NAmf+OTQ0X0sRouf7NNkYGhrOYNrxtIaGg83MNzVDSe3LXLhP7O/yrCsCz1zlWTpjWkuZAOBpX3yVnLqI1yLCOKU6qMrmP7SSrUEw54XF4WBIK5FxCMOr3lVsfGqNSmPzBXUnJTIX1jyVBq9wO6UObOpgC5GjO98vFKnTdQMZXxEsWZlDiCZMIxAbNxQOqlpVZtobejBaZNoBnRDzMFpkxvTQOD36BlrcySZuI6p1ACB6LU3wWuf5581+oHfD1vi89bz3nFUC8Nm7ZlP3nKkFbM4bWPt/MSFwklprYItwt6cmvpWJ2IVcQBCz6bLysSCv3SaANCiTsnaNRrNRqMXVVT1/BrAqz/buu/Y38Ad3KC5PARej0QAAAABJRU5ErkJggg== */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABClJREFUaEPtmY1RFEEQhbsjUCIQIhAiUCNQIxAiECIQIxAiECIAIpAMhAiECIQI2vquZqnZvp6fhb3SK5mqq6Ju92b69bzXf6is+dI1t1+eAfztG5z1BsxsU0S+ici2iPB3vm5E5EpEDlSVv2dZswFIxv8UkZcNy+5EZGcuEHMCOBeR951uvVDVD53vVl+bE8DvDu8Pxtyo6ta/BsByg1R15Bwzqz5/LJgn34CZwfnPInI4BUB6/1hV0cSjVxcAM4PbcBZjL0XklIPN7Is3fLCkdQPpPYw/VNXj5IhPIvJWRIhSl6p60ULWBGBm30Vk123EwRxCuIzWkkjNrCZywith10ewE1Xdq4GoAjCz/RTXW44Ynt+LyBEfT43kYfbj86J3w5Q32DNcRQDpwF+dkQXDMey8xem0L3TEqB4g3PZWad8agBMRgZPeu96D1/C2Zbh3X0p80Op1xxloztN48bMQQNoc7+eLEuAoPSPiIDY4Ooo+E6ixeNXM+D3GERz2U3CIqMstLJUgJQDe+7eq6mub0NYEkLAKwEHkiBQDCZtddZCZ8d6r7JDwFkoARklHRPZUFVDVZWbwGuNrC4EfdOzFrRABh3Wnqhv+d70AEBLGFROPmeHlnM81G69UdSd6IUuM0GgUVn1uqWmg5EmMfBeEyB7Pe3txBkY+rGT8j0J+WXq/BgDkUCaqLgEAnwcRog0veMIqFAAwCy2wnw+bI2GaGboBgF9k5N0o0rUSGUb4eO0BeO9j/GYhkSHMHMTIqwGARX6p6a+nlPBl8kZuXMD9j6pKfF9aZuaFOdJCEL5D4eYb9wCYVCanrBmGyii/tIq+SLj/HQBCaM5bLzwfPqdQ6FpVHyra4IbuVbXaY7dETC2ESPNNWiIOi69CcdgSMXsh4tNSUiklMgwmC0aNd08Y5WAES6HHehM4gu97wyhBgWpgqXsrASglprDy7CwhehMZOSbK6JMSma+Fio1KltCmlBIj7gfZOGx8ppQSXrhzFnOhJ/31BDkjFHRvOd09x0mRBA9SFgxUgHpQg0q0t5ymPMlL+EnldFTfDA0NAmf+OTQ0X0sRouf7NNkYGhrOYNrxtIaGg83MNzVDSe3LXLhP7O/yrCsCz1zlWTpjWkuZAOBpX3yVnLqI1yLCOKU6qMrmP7SSrUEw54XF4WBIK5FxCMOr3lVsfGqNSmPzBXUnJTIX1jyVBq9wO6UObOpgC5GjO98vFKnTdQMZXxEsWZlDiCZMIxAbNxQOqlpVZtobejBaZNoBnRDzMFpkxvTQOD36BlrcySZuI6p1ACB6LU3wWuf5581+oHfD1vi89bz3nFUC8Nm7ZlP3nKkFbM4bWPt/MSFwklprYItwt6cmvpWJ2IVcQBCz6bLysSCv3SaANCiTsnaNRrNRqMXVVT1/BrAqz/buu/Y38Ad3KC5PARej0QAAAABJRU5ErkJggg=="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\\n* Template Customizer Style\\n**/\\n#template-customizer {\\n  position: fixed;\\n  z-index: 99999999;\\n  display: flex;\\n  flex-direction: column;\\n  block-size: 100%;\\n  -webkit-box-direction: normal;\\n  -webkit-box-orient: vertical;\\n  box-shadow: 0 0.3125rem 1.375rem 0 rgba(34, 48, 62, 0.18);\\n  font-family: \\"Open Sans\\", BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\";\\n  font-size: inherit;\\n  inline-size: 400px;\\n  inset-block-start: 0;\\n  inset-inline-end: 0;\\n  transform: translateX(420px);\\n  transition: transform 0.2s ease-in;\\n  /* Color option styles */\\n  /* Font Icons sizing and alignments */\\n  /* border-color for hr */\\n  /* To update svg image's color */\\n  /* Customizer button */\\n  /* Customizer inner */\\n}\\n[data-bs-theme=dark] #template-customizer {\\n  box-shadow: 0 0.3125rem 1.375rem 0 rgba(20, 20, 29, 0.26);\\n}\\n#template-customizer h5 {\\n  position: relative;\\n  font-size: 11px;\\n}\\n#template-customizer .form-label {\\n  font-size: 0.9375rem;\\n  font-weight: 500;\\n}\\n#template-customizer .template-customizer-colors-options {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  margin: 0;\\n  gap: 0.3rem;\\n}\\n#template-customizer .template-customizer-colors-options .custom-option {\\n  inline-size: 50px;\\n}\\n#template-customizer .template-customizer-colors-options .custom-option .custom-option-content {\\n  padding: 0;\\n  min-block-size: 46px;\\n}\\n#template-customizer .template-customizer-colors-options .custom-option .custom-option-content .pcr-button {\\n  padding: 0.625rem;\\n  block-size: 30px;\\n  inline-size: 30px;\\n}\\n#template-customizer .template-customizer-colors-options .custom-option .custom-option-content .pcr-button::before, #template-customizer .template-customizer-colors-options .custom-option .custom-option-content .pcr-button::after {\\n  border-radius: 0.5rem;\\n}\\n#template-customizer .template-customizer-colors-options .custom-option .custom-option-content .pcr-button:focus {\\n  box-shadow: none;\\n}\\n#template-customizer .template-customizer-colors-options .custom-option-body {\\n  border-radius: 0.5rem;\\n  block-size: 30px;\\n  inline-size: 30px;\\n}\\n#template-customizer .custom-option-icon {\\n  padding: 0;\\n}\\n#template-customizer .custom-option-icon .custom-option-content {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  min-block-size: 50px;\\n}\\n#template-customizer hr {\\n  border-color: var(--bs-border-color);\\n}\\n#template-customizer .custom-option {\\n  border-width: 2px;\\n  margin: 0;\\n}\\n#template-customizer .custom-option.custom-option-image .custom-option-content .custom-option-body svg {\\n  inline-size: 100%;\\n}\\n#template-customizer.template-customizer-open {\\n  transform: none;\\n  transition-delay: 0.1s;\\n}\\n#template-customizer.template-customizer-open .template-customizer-theme .custom-option.checked {\\n  background-color: rgba(var(--bs-primary-rgb), 0.08);\\n}\\n#template-customizer.template-customizer-open .template-customizer-theme .custom-option.checked *,\\n#template-customizer.template-customizer-open .template-customizer-theme .custom-option.checked *::before,\\n#template-customizer.template-customizer-open .template-customizer-theme .custom-option.checked *::after {\\n  color: var(--bs-primary);\\n}\\n#template-customizer.template-customizer-open .custom-option.checked {\\n  border-width: 2px;\\n  color: var(--bs-primary);\\n}\\n#template-customizer.template-customizer-open .custom-option.checked .custom-option-content {\\n  border: none;\\n}\\n#template-customizer .template-customizer-header a:hover,\\n#template-customizer .template-customizer-header a:hover .icon-base {\\n  color: inherit !important;\\n}\\n#template-customizer .template-customizer-open-btn {\\n  position: absolute;\\n  z-index: -1;\\n  display: block;\\n  background: var(--bs-primary);\\n  block-size: 38px;\\n  border-end-start-radius: 50%;\\n  border-start-start-radius: 50%;\\n  box-shadow: 0 0.125rem 0.25rem 0 rgba(var(--bs-primary-rgb), 0.4);\\n  color: #fff;\\n  font-size: 18px;\\n  inline-size: 38px;\\n  inset-block-start: 180px;\\n  inset-inline-start: 0;\\n  line-height: 38px;\\n  opacity: 1;\\n  text-align: center;\\n  transform: translateX(-58px);\\n  transition: all 0.1s linear 0.2s;\\n  /* Customizer Hidden */\\n}\\n#template-customizer .template-customizer-open-btn::before {\\n  position: absolute;\\n  display: block;\\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n  background-size: 100% 100%;\\n  block-size: 20px;\\n  content: \\"\\";\\n  inline-size: 20px;\\n  inset-block-start: 50%;\\n  inset-inline-start: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n:dir(rtl) #template-customizer .template-customizer-open-btn::before {\\n  margin-inline-start: 2px;\\n  transform: translate(50%, -50%);\\n}\\n.customizer-hide #template-customizer .template-customizer-open-btn {\\n  display: none;\\n}\\n:dir(rtl) #template-customizer .template-customizer-open-btn {\\n  transform: translateX(58px);\\n}\\n#template-customizer.template-customizer-open .template-customizer-open-btn {\\n  opacity: 0;\\n  transform: none;\\n  transition-delay: 0s;\\n}\\n#template-customizer .template-customizer-inner {\\n  position: relative;\\n  overflow: auto;\\n  flex: 0 1 auto;\\n  -webkit-box-flex: 0;\\n  opacity: 1;\\n  transition: opacity 0.2s;\\n}\\n\\n@media (max-width: 1200px) {\\n  #template-customizer {\\n    display: none;\\n    visibility: hidden;\\n  }\\n}\\n.layout-menu-100vh #template-customizer {\\n  block-size: 100dvh;\\n}\\n\\n/* RTL */\\n:dir(rtl) #template-customizer:not(.template-customizer-open) {\\n  transform: translateX(-420px);\\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://Materialize/./js/_template-customizer/_template-customizer.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js`)},"./node_modules/css-loader/dist/runtime/api.js":function(module){eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

//# sourceURL=webpack://Materialize/./node_modules/css-loader/dist/runtime/api.js?`)},"./node_modules/css-loader/dist/runtime/getUrl.js":function(module){eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }
  return url;
};

//# sourceURL=webpack://Materialize/./node_modules/css-loader/dist/runtime/getUrl.js?`)},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":function(module){eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://Materialize/./node_modules/css-loader/dist/runtime/noSourceMaps.js?`)},"./js/_template-customizer/_template-customizer.html":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div id=\\"template-customizer\\" class=\\"card rounded-0\\"> <a href=\\"javascript:void(0)\\" class=\\"template-customizer-open-btn\\" tabindex=\\"-1\\"></a> <div class=\\"p-6 m-0 lh-sm border-bottom template-customizer-header position-relative py-4\\"> <h6 class=\\"template-customizer-t-panel_header mb-0\\"></h6> <p class=\\"template-customizer-t-panel_sub_header mb-0 small\\"></p> <div class=\\"d-flex align-items-center gap-2 position-absolute end-0 top-0 mt-6 me-5\\"> <a href=\\"javascript:void(0)\\" class=\\"template-customizer-reset-btn text-heading\\" data-bs-toggle=\\"tooltip\\" data-bs-placement=\\"bottom\\" title=\\"Reset Customizer\\"> <i class=\\"icon-base ri ri-refresh-line\\"></i><span class=\\"badge rounded-pill bg-danger badge-dot badge-notifications d-none\\"></span> </a> <a href=\\"javascript:void(0)\\" class=\\"template-customizer-close-btn fw-light text-heading\\" tabindex=\\"-1\\"> <i class=\\"icon-base ri ri-close-line icon-lg\\"></i> </a> </div> </div> <div class=\\"template-customizer-inner pt-5\\"> <div class=\\"template-customizer-theming\\"> <h5 class=\\"m-0 px-6 pb-6\\"> <span class=\\"template-customizer-t-theming_header bg-label-primary rounded-1 py-1 px-3 small\\"></span> </h5> <div class=\\"m-0 px-6 pb-6 template-customizer-color w-100\\"> <label for=\\"customizerColor\\" class=\\"form-label d-block template-customizer-t-color_label mb-2\\"></label> <div class=\\"row template-customizer-colors-options\\"></div> </div> <div class=\\"m-0 px-6 pb-6 template-customizer-theme w-100\\"> <label for=\\"customizerTheme\\" class=\\"form-label d-block template-customizer-t-theme_label mb-2\\"></label> <div class=\\"row px-1 template-customizer-themes-options\\"></div> </div> <div class=\\"m-0 px-6 pb-6 template-customizer-skins w-100\\"> <label for=\\"customizerSkin\\" class=\\"form-label template-customizer-t-skin_label mb-2\\"></label> <div class=\\"row px-1 template-customizer-skins-options\\"></div> </div> <div class=\\"m-0 px-6 template-customizer-semiDark w-100 d-flex justify-content-between pe-12\\"> <span class=\\"form-label template-customizer-t-semiDark_label\\"></span> <label class=\\"switch template-customizer-t-semiDark_label\\"> <input type=\\"checkbox\\" class=\\"template-customizer-semi-dark-switch switch-input\\"/> <span class=\\"switch-toggle-slider\\"> <span class=\\"switch-on\\"></span> <span class=\\"switch-off\\"></span> </span> </label> </div> <hr class=\\"m-0 px-6 my-6\\"/> </div> <div class=\\"template-customizer-layout\\"> <h5 class=\\"m-0 px-6 pb-6\\"> <span class=\\"template-customizer-t-layout_header bg-label-primary rounded-2 py-1 px-3 small\\"></span> </h5> <div class=\\"m-0 px-6 pb-6 d-block template-customizer-layouts\\"> <label for=\\"customizerStyle\\" class=\\"form-label d-block template-customizer-t-layout_label mb-2\\"></label> <div class=\\"row px-1 template-customizer-layouts-options\\"></div> </div> <div class=\\"m-0 px-6 pb-6 template-customizer-headerOptions w-100\\"> <label for=\\"customizerHeader\\" class=\\"form-label template-customizer-t-layout_header_label mb-2\\"></label> <div class=\\"row px-1 template-customizer-header-options\\"></div> </div> <div class=\\"m-0 px-6 pb-6 template-customizer-layoutNavbarOptions w-100\\"> <label for=\\"customizerNavbar\\" class=\\"form-label template-customizer-t-layout_navbar_label mb-2\\"></label> <div class=\\"row px-1 template-customizer-navbar-options\\"></div> </div> <div class=\\"m-0 px-6 pb-6 template-customizer-content w-100\\"> <label for=\\"customizerContent\\" class=\\"form-label template-customizer-t-content_label mb-2\\"></label> <div class=\\"row px-1 template-customizer-content-options\\"></div> </div> <div class=\\"m-0 px-6 pb-6 template-customizer-directions w-100\\"> <label for=\\"customizerDirection\\" class=\\"form-label template-customizer-t-direction_label mb-2\\"></label> <div class=\\"row px-1 template-customizer-directions-options\\"></div> </div> </div> </div> </div> ";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

//# sourceURL=webpack://Materialize/./js/_template-customizer/_template-customizer.html?`)},"./js/_template-customizer/_template-customizer.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_customizer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./_template-customizer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./js/_template-customizer/_template-customizer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_customizer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_customizer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_customizer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_customizer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://Materialize/./js/_template-customizer/_template-customizer.scss?`)},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(module){eval(`

var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://Materialize/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)},"./node_modules/style-loader/dist/runtime/insertBySelector.js":function(module){eval(`

var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

//# sourceURL=webpack://Materialize/./node_modules/style-loader/dist/runtime/insertBySelector.js?`)},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":function(module){eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

//# sourceURL=webpack://Materialize/./node_modules/style-loader/dist/runtime/insertStyleElement.js?`)},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":function(module,__unused_webpack_exports,__webpack_require__){eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://Materialize/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":function(module){eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

//# sourceURL=webpack://Materialize/./node_modules/style-loader/dist/runtime/styleDomAPI.js?`)},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":function(module){eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

//# sourceURL=webpack://Materialize/./node_modules/style-loader/dist/runtime/styleTagTransform.js?`)},"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABClJREFUaEPtmY1RFEEQhbsjUCIQIhAiUCNQIxAiECIQIxAiECIAIpAMhAiECIQI2vquZqnZvp6fhb3SK5mqq6Ju92b69bzXf6is+dI1t1+eAfztG5z1BsxsU0S+ici2iPB3vm5E5EpEDlSVv2dZswFIxv8UkZcNy+5EZGcuEHMCOBeR951uvVDVD53vVl+bE8DvDu8Pxtyo6ta/BsByg1R15Bwzqz5/LJgn34CZwfnPInI4BUB6/1hV0cSjVxcAM4PbcBZjL0XklIPN7Is3fLCkdQPpPYw/VNXj5IhPIvJWRIhSl6p60ULWBGBm30Vk123EwRxCuIzWkkjNrCZywith10ewE1Xdq4GoAjCz/RTXW44Ynt+LyBEfT43kYfbj86J3w5Q32DNcRQDpwF+dkQXDMey8xem0L3TEqB4g3PZWad8agBMRgZPeu96D1/C2Zbh3X0p80Op1xxloztN48bMQQNoc7+eLEuAoPSPiIDY4Ooo+E6ixeNXM+D3GERz2U3CIqMstLJUgJQDe+7eq6mub0NYEkLAKwEHkiBQDCZtddZCZ8d6r7JDwFkoARklHRPZUFVDVZWbwGuNrC4EfdOzFrRABh3Wnqhv+d70AEBLGFROPmeHlnM81G69UdSd6IUuM0GgUVn1uqWmg5EmMfBeEyB7Pe3txBkY+rGT8j0J+WXq/BgDkUCaqLgEAnwcRog0veMIqFAAwCy2wnw+bI2GaGboBgF9k5N0o0rUSGUb4eO0BeO9j/GYhkSHMHMTIqwGARX6p6a+nlPBl8kZuXMD9j6pKfF9aZuaFOdJCEL5D4eYb9wCYVCanrBmGyii/tIq+SLj/HQBCaM5bLzwfPqdQ6FpVHyra4IbuVbXaY7dETC2ESPNNWiIOi69CcdgSMXsh4tNSUiklMgwmC0aNd08Y5WAES6HHehM4gu97wyhBgWpgqXsrASglprDy7CwhehMZOSbK6JMSma+Fio1KltCmlBIj7gfZOGx8ppQSXrhzFnOhJ/31BDkjFHRvOd09x0mRBA9SFgxUgHpQg0q0t5ymPMlL+EnldFTfDA0NAmf+OTQ0X0sRouf7NNkYGhrOYNrxtIaGg83MNzVDSe3LXLhP7O/yrCsCz1zlWTpjWkuZAOBpX3yVnLqI1yLCOKU6qMrmP7SSrUEw54XF4WBIK5FxCMOr3lVsfGqNSmPzBXUnJTIX1jyVBq9wO6UObOpgC5GjO98vFKnTdQMZXxEsWZlDiCZMIxAbNxQOqlpVZtobejBaZNoBnRDzMFpkxvTQOD36BlrcySZuI6p1ACB6LU3wWuf5581+oHfD1vi89bz3nFUC8Nm7ZlP3nKkFbM4bWPt/MSFwklprYItwt6cmvpWJ2IVcQBCz6bLysSCv3SaANCiTsnaNRrNRqMXVVT1/BrAqz/buu/Y38Ad3KC5PARej0QAAAABJRU5ErkJggg==":function(module){eval(`module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABClJREFUaEPtmY1RFEEQhbsjUCIQIhAiUCNQIxAiECIQIxAiECIAIpAMhAiECIQI2vquZqnZvp6fhb3SK5mqq6Ju92b69bzXf6is+dI1t1+eAfztG5z1BsxsU0S+ici2iPB3vm5E5EpEDlSVv2dZswFIxv8UkZcNy+5EZGcuEHMCOBeR951uvVDVD53vVl+bE8DvDu8Pxtyo6ta/BsByg1R15Bwzqz5/LJgn34CZwfnPInI4BUB6/1hV0cSjVxcAM4PbcBZjL0XklIPN7Is3fLCkdQPpPYw/VNXj5IhPIvJWRIhSl6p60ULWBGBm30Vk123EwRxCuIzWkkjNrCZywith10ewE1Xdq4GoAjCz/RTXW44Ynt+LyBEfT43kYfbj86J3w5Q32DNcRQDpwF+dkQXDMey8xem0L3TEqB4g3PZWad8agBMRgZPeu96D1/C2Zbh3X0p80Op1xxloztN48bMQQNoc7+eLEuAoPSPiIDY4Ooo+E6ixeNXM+D3GERz2U3CIqMstLJUgJQDe+7eq6mub0NYEkLAKwEHkiBQDCZtddZCZ8d6r7JDwFkoARklHRPZUFVDVZWbwGuNrC4EfdOzFrRABh3Wnqhv+d70AEBLGFROPmeHlnM81G69UdSd6IUuM0GgUVn1uqWmg5EmMfBeEyB7Pe3txBkY+rGT8j0J+WXq/BgDkUCaqLgEAnwcRog0veMIqFAAwCy2wnw+bI2GaGboBgF9k5N0o0rUSGUb4eO0BeO9j/GYhkSHMHMTIqwGARX6p6a+nlPBl8kZuXMD9j6pKfF9aZuaFOdJCEL5D4eYb9wCYVCanrBmGyii/tIq+SLj/HQBCaM5bLzwfPqdQ6FpVHyra4IbuVbXaY7dETC2ESPNNWiIOi69CcdgSMXsh4tNSUiklMgwmC0aNd08Y5WAES6HHehM4gu97wyhBgWpgqXsrASglprDy7CwhehMZOSbK6JMSma+Fio1KltCmlBIj7gfZOGx8ppQSXrhzFnOhJ/31BDkjFHRvOd09x0mRBA9SFgxUgHpQg0q0t5ymPMlL+EnldFTfDA0NAmf+OTQ0X0sRouf7NNkYGhrOYNrxtIaGg83MNzVDSe3LXLhP7O/yrCsCz1zlWTpjWkuZAOBpX3yVnLqI1yLCOKU6qMrmP7SSrUEw54XF4WBIK5FxCMOr3lVsfGqNSmPzBXUnJTIX1jyVBq9wO6UObOpgC5GjO98vFKnTdQMZXxEsWZlDiCZMIxAbNxQOqlpVZtobejBaZNoBnRDzMFpkxvTQOD36BlrcySZuI6p1ACB6LU3wWuf5581+oHfD1vi89bz3nFUC8Nm7ZlP3nKkFbM4bWPt/MSFwklprYItwt6cmvpWJ2IVcQBCz6bLysSCv3SaANCiTsnaNRrNRqMXVVT1/BrAqz/buu/Y38Ad3KC5PARej0QAAAABJRU5ErkJggg==";

//# sourceURL=webpack://Materialize/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABClJREFUaEPtmY1RFEEQhbsjUCIQIhAiUCNQIxAiECIQIxAiECIAIpAMhAiECIQI2vquZqnZvp6fhb3SK5mqq6Ju92b69bzXf6is+dI1t1+eAfztG5z1BsxsU0S+ici2iPB3vm5E5EpEDlSVv2dZswFIxv8UkZcNy+5EZGcuEHMCOBeR951uvVDVD53vVl+bE8DvDu8Pxtyo6ta/BsByg1R15Bwzqz5/LJgn34CZwfnPInI4BUB6/1hV0cSjVxcAM4PbcBZjL0XklIPN7Is3fLCkdQPpPYw/VNXj5IhPIvJWRIhSl6p60ULWBGBm30Vk123EwRxCuIzWkkjNrCZywith10ewE1Xdq4GoAjCz/RTXW44Ynt+LyBEfT43kYfbj86J3w5Q32DNcRQDpwF+dkQXDMey8xem0L3TEqB4g3PZWad8agBMRgZPeu96D1/C2Zbh3X0p80Op1xxloztN48bMQQNoc7+eLEuAoPSPiIDY4Ooo+E6ixeNXM+D3GERz2U3CIqMstLJUgJQDe+7eq6mub0NYEkLAKwEHkiBQDCZtddZCZ8d6r7JDwFkoARklHRPZUFVDVZWbwGuNrC4EfdOzFrRABh3Wnqhv+d70AEBLGFROPmeHlnM81G69UdSd6IUuM0GgUVn1uqWmg5EmMfBeEyB7Pe3txBkY+rGT8j0J+WXq/BgDkUCaqLgEAnwcRog0veMIqFAAwCy2wnw+bI2GaGboBgF9k5N0o0rUSGUb4eO0BeO9j/GYhkSHMHMTIqwGARX6p6a+nlPBl8kZuXMD9j6pKfF9aZuaFOdJCEL5D4eYb9wCYVCanrBmGyii/tIq+SLj/HQBCaM5bLzwfPqdQ6FpVHyra4IbuVbXaY7dETC2ESPNNWiIOi69CcdgSMXsh4tNSUiklMgwmC0aNd08Y5WAES6HHehM4gu97wyhBgWpgqXsrASglprDy7CwhehMZOSbK6JMSma+Fio1KltCmlBIj7gfZOGx8ppQSXrhzFnOhJ/31BDkjFHRvOd09x0mRBA9SFgxUgHpQg0q0t5ymPMlL+EnldFTfDA0NAmf+OTQ0X0sRouf7NNkYGhrOYNrxtIaGg83MNzVDSe3LXLhP7O/yrCsCz1zlWTpjWkuZAOBpX3yVnLqI1yLCOKU6qMrmP7SSrUEw54XF4WBIK5FxCMOr3lVsfGqNSmPzBXUnJTIX1jyVBq9wO6UObOpgC5GjO98vFKnTdQMZXxEsWZlDiCZMIxAbNxQOqlpVZtobejBaZNoBnRDzMFpkxvTQOD36BlrcySZuI6p1ACB6LU3wWuf5581+oHfD1vi89bz3nFUC8Nm7ZlP3nKkFbM4bWPt/MSFwklprYItwt6cmvpWJ2IVcQBCz6bLysSCv3SaANCiTsnaNRrNRqMXVVT1/BrAqz/buu/Y38Ad3KC5PARej0QAAAABJRU5ErkJggg==?`)}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(t!==void 0)return t.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href,__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__("./js/template-customizer.js");return __webpack_exports__})()}))});export default i();
