var i=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var o=i((exports,module)=>{(function(t,n){if(typeof exports=="object"&&typeof module=="object")module.exports=n();else if(typeof define=="function"&&define.amd)define([],n);else{var e=n();for(var r in e)(typeof exports=="object"?exports:t)[r]=e[r]}})(self,(function(){return(function(){var __webpack_modules__={"./libs/notyf/notyf.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notyf: function() { return /* reexport safe */ notyf__WEBPACK_IMPORTED_MODULE_0__.Notyf; }
/* harmony export */ });
/* harmony import */ var notyf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notyf */ "./node_modules/notyf/notyf.es.js");

try {
  window.Notyf = notyf__WEBPACK_IMPORTED_MODULE_0__.Notyf;
} catch (e) {}


//# sourceURL=webpack://Materialize/./libs/notyf/notyf.js?`)},"./node_modules/notyf/notyf.es.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_OPTIONS: function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   Notyf: function() { return /* binding */ Notyf; },
/* harmony export */   NotyfArray: function() { return /* binding */ NotyfArray; },
/* harmony export */   NotyfArrayEvent: function() { return /* binding */ NotyfArrayEvent; },
/* harmony export */   NotyfEvent: function() { return /* binding */ NotyfEvent; },
/* harmony export */   NotyfNotification: function() { return /* binding */ NotyfNotification; },
/* harmony export */   NotyfView: function() { return /* binding */ NotyfView; }
/* harmony export */ });
/*! *****************************************************************************\r
Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.\r
***************************************************************************** */\r
\r
var __assign = function() {\r
    __assign = Object.assign || function __assign(t) {\r
        for (var s, i = 1, n = arguments.length; i < n; i++) {\r
            s = arguments[i];\r
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
        }\r
        return t;\r
    };\r
    return __assign.apply(this, arguments);\r
};

var NotyfNotification = /** @class */ (function () {\r
    function NotyfNotification(options) {\r
        this.options = options;\r
        this.listeners = {};\r
    }\r
    NotyfNotification.prototype.on = function (eventType, cb) {\r
        var callbacks = this.listeners[eventType] || [];\r
        this.listeners[eventType] = callbacks.concat([cb]);\r
    };\r
    NotyfNotification.prototype.triggerEvent = function (eventType, event) {\r
        var _this = this;\r
        var callbacks = this.listeners[eventType] || [];\r
        callbacks.forEach(function (cb) { return cb({ target: _this, event: event }); });\r
    };\r
    return NotyfNotification;\r
}());\r
var NotyfArrayEvent;\r
(function (NotyfArrayEvent) {\r
    NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";\r
    NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";\r
})(NotyfArrayEvent || (NotyfArrayEvent = {}));\r
var NotyfArray = /** @class */ (function () {\r
    function NotyfArray() {\r
        this.notifications = [];\r
    }\r
    NotyfArray.prototype.push = function (elem) {\r
        this.notifications.push(elem);\r
        this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);\r
    };\r
    NotyfArray.prototype.splice = function (index, num) {\r
        var elem = this.notifications.splice(index, num)[0];\r
        this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);\r
        return elem;\r
    };\r
    NotyfArray.prototype.indexOf = function (elem) {\r
        return this.notifications.indexOf(elem);\r
    };\r
    NotyfArray.prototype.onUpdate = function (fn) {\r
        this.updateFn = fn;\r
    };\r
    return NotyfArray;\r
}());

var NotyfEvent;\r
(function (NotyfEvent) {\r
    NotyfEvent["Dismiss"] = "dismiss";\r
    NotyfEvent["Click"] = "click";\r
})(NotyfEvent || (NotyfEvent = {}));\r
var DEFAULT_OPTIONS = {\r
    types: [\r
        {\r
            type: 'success',\r
            className: 'notyf__toast--success',\r
            backgroundColor: '#3dc763',\r
            icon: {\r
                className: 'notyf__icon--success',\r
                tagName: 'i',\r
            },\r
        },\r
        {\r
            type: 'error',\r
            className: 'notyf__toast--error',\r
            backgroundColor: '#ed3d3d',\r
            icon: {\r
                className: 'notyf__icon--error',\r
                tagName: 'i',\r
            },\r
        },\r
    ],\r
    duration: 2000,\r
    ripple: true,\r
    position: {\r
        x: 'right',\r
        y: 'bottom',\r
    },\r
    dismissible: false,\r
};

var NotyfView = /** @class */ (function () {\r
    function NotyfView() {\r
        this.notifications = [];\r
        this.events = {};\r
        this.X_POSITION_FLEX_MAP = {\r
            left: 'flex-start',\r
            center: 'center',\r
            right: 'flex-end',\r
        };\r
        this.Y_POSITION_FLEX_MAP = {\r
            top: 'flex-start',\r
            center: 'center',\r
            bottom: 'flex-end',\r
        };\r
        // Creates the main notifications container\r
        var docFrag = document.createDocumentFragment();\r
        var notyfContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf' });\r
        docFrag.appendChild(notyfContainer);\r
        document.body.appendChild(docFrag);\r
        this.container = notyfContainer;\r
        // Identifies the main animation end event\r
        this.animationEndEventName = this._getAnimationEndEventName();\r
        this._createA11yContainer();\r
    }\r
    NotyfView.prototype.on = function (event, cb) {\r
        var _a;\r
        this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));\r
    };\r
    NotyfView.prototype.update = function (notification, type) {\r
        if (type === NotyfArrayEvent.Add) {\r
            this.addNotification(notification);\r
        }\r
        else if (type === NotyfArrayEvent.Remove) {\r
            this.removeNotification(notification);\r
        }\r
    };\r
    NotyfView.prototype.removeNotification = function (notification) {\r
        var _this = this;\r
        var renderedNotification = this._popRenderedNotification(notification);\r
        var node;\r
        if (!renderedNotification) {\r
            return;\r
        }\r
        node = renderedNotification.node;\r
        node.classList.add('notyf__toast--disappear');\r
        var handleEvent;\r
        node.addEventListener(this.animationEndEventName, (handleEvent = function (event) {\r
            if (event.target === node) {\r
                node.removeEventListener(_this.animationEndEventName, handleEvent);\r
                _this.container.removeChild(node);\r
            }\r
        }));\r
    };\r
    NotyfView.prototype.addNotification = function (notification) {\r
        var node = this._renderNotification(notification);\r
        this.notifications.push({ notification: notification, node: node });\r
        // For a11y purposes, we still want to announce that there's a notification in the screen\r
        // even if it comes with no message.\r
        this._announce(notification.options.message || 'Notification');\r
    };\r
    NotyfView.prototype._renderNotification = function (notification) {\r
        var _a;\r
        var card = this._buildNotificationCard(notification);\r
        var className = notification.options.className;\r
        if (className) {\r
            (_a = card.classList).add.apply(_a, className.split(' '));\r
        }\r
        this.container.appendChild(card);\r
        return card;\r
    };\r
    NotyfView.prototype._popRenderedNotification = function (notification) {\r
        var idx = -1;\r
        for (var i = 0; i < this.notifications.length && idx < 0; i++) {\r
            if (this.notifications[i].notification === notification) {\r
                idx = i;\r
            }\r
        }\r
        if (idx !== -1) {\r
            return this.notifications.splice(idx, 1)[0];\r
        }\r
        return;\r
    };\r
    NotyfView.prototype.getXPosition = function (options) {\r
        var _a;\r
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || 'right';\r
    };\r
    NotyfView.prototype.getYPosition = function (options) {\r
        var _a;\r
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || 'bottom';\r
    };\r
    NotyfView.prototype.adjustContainerAlignment = function (options) {\r
        var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];\r
        var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];\r
        var style = this.container.style;\r
        style.setProperty('justify-content', justify);\r
        style.setProperty('align-items', align);\r
    };\r
    NotyfView.prototype._buildNotificationCard = function (notification) {\r
        var _this = this;\r
        var options = notification.options;\r
        var iconOpts = options.icon;\r
        // Adjust container according to position (e.g. top-left, bottom-center, etc)\r
        this.adjustContainerAlignment(options);\r
        // Create elements\r
        var notificationElem = this._createHTMLElement({ tagName: 'div', className: 'notyf__toast' });\r
        var ripple = this._createHTMLElement({ tagName: 'div', className: 'notyf__ripple' });\r
        var wrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__wrapper' });\r
        var message = this._createHTMLElement({ tagName: 'div', className: 'notyf__message' });\r
        message.innerHTML = options.message || '';\r
        var mainColor = options.background || options.backgroundColor;\r
        // Build the icon and append it to the card\r
        if (iconOpts) {\r
            var iconContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf__icon' });\r
            if (typeof iconOpts === 'string' || iconOpts instanceof String)\r
                iconContainer.innerHTML = new String(iconOpts).valueOf();\r
            if (typeof iconOpts === 'object') {\r
                var _a = iconOpts.tagName, tagName = _a === void 0 ? 'i' : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;\r
                var iconElement = this._createHTMLElement({ tagName: tagName, className: className_1, text: text });\r
                if (color)\r
                    iconElement.style.color = color;\r
                iconContainer.appendChild(iconElement);\r
            }\r
            wrapper.appendChild(iconContainer);\r
        }\r
        wrapper.appendChild(message);\r
        notificationElem.appendChild(wrapper);\r
        // Add ripple if applicable, else just paint the full toast\r
        if (mainColor) {\r
            if (options.ripple) {\r
                ripple.style.background = mainColor;\r
                notificationElem.appendChild(ripple);\r
            }\r
            else {\r
                notificationElem.style.background = mainColor;\r
            }\r
        }\r
        // Add dismiss button\r
        if (options.dismissible) {\r
            var dismissWrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__dismiss' });\r
            var dismissButton = this._createHTMLElement({\r
                tagName: 'button',\r
                className: 'notyf__dismiss-btn',\r
            });\r
            dismissWrapper.appendChild(dismissButton);\r
            wrapper.appendChild(dismissWrapper);\r
            notificationElem.classList.add("notyf__toast--dismissible");\r
            dismissButton.addEventListener('click', function (event) {\r
                var _a, _b;\r
                (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event });\r
                event.stopPropagation();\r
            });\r
        }\r
        notificationElem.addEventListener('click', function (event) { var _a, _b; return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event }); });\r
        // Adjust margins depending on whether its an upper or lower notification\r
        var className = this.getYPosition(options) === 'top' ? 'upper' : 'lower';\r
        notificationElem.classList.add("notyf__toast--" + className);\r
        return notificationElem;\r
    };\r
    NotyfView.prototype._createHTMLElement = function (_a) {\r
        var tagName = _a.tagName, className = _a.className, text = _a.text;\r
        var elem = document.createElement(tagName);\r
        if (className) {\r
            elem.className = className;\r
        }\r
        elem.textContent = text || null;\r
        return elem;\r
    };\r
    /**\r
     * Creates an invisible container which will announce the notyfs to\r
     * screen readers\r
     */\r
    NotyfView.prototype._createA11yContainer = function () {\r
        var a11yContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf-announcer' });\r
        a11yContainer.setAttribute('aria-atomic', 'true');\r
        a11yContainer.setAttribute('aria-live', 'polite');\r
        // Set the a11y container to be visible hidden. Can't use display: none as\r
        // screen readers won't read it.\r
        a11yContainer.style.border = '0';\r
        a11yContainer.style.clip = 'rect(0 0 0 0)';\r
        a11yContainer.style.height = '1px';\r
        a11yContainer.style.margin = '-1px';\r
        a11yContainer.style.overflow = 'hidden';\r
        a11yContainer.style.padding = '0';\r
        a11yContainer.style.position = 'absolute';\r
        a11yContainer.style.width = '1px';\r
        a11yContainer.style.outline = '0';\r
        document.body.appendChild(a11yContainer);\r
        this.a11yContainer = a11yContainer;\r
    };\r
    /**\r
     * Announces a message to screenreaders.\r
     */\r
    NotyfView.prototype._announce = function (message) {\r
        var _this = this;\r
        this.a11yContainer.textContent = '';\r
        // This 100ms timeout is necessary for some browser + screen-reader combinations:\r
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.\r
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a\r
        //   second time without clearing and then using a non-zero delay.\r
        // (using JAWS 17 at time of this writing).\r
        // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts\r
        setTimeout(function () {\r
            _this.a11yContainer.textContent = message;\r
        }, 100);\r
    };\r
    /**\r
     * Determine which animationend event is supported\r
     */\r
    NotyfView.prototype._getAnimationEndEventName = function () {\r
        var el = document.createElement('_fake');\r
        var transitions = {\r
            MozTransition: 'animationend',\r
            OTransition: 'oAnimationEnd',\r
            WebkitTransition: 'webkitAnimationEnd',\r
            transition: 'animationend',\r
        };\r
        var t;\r
        for (t in transitions) {\r
            if (el.style[t] !== undefined) {\r
                return transitions[t];\r
            }\r
        }\r
        // No supported animation end event. Using "animationend" as a fallback\r
        return 'animationend';\r
    };\r
    return NotyfView;\r
}());

/**\r
 * Main controller class. Defines the main Notyf API.\r
 */\r
var Notyf = /** @class */ (function () {\r
    function Notyf(opts) {\r
        var _this = this;\r
        this.dismiss = this._removeNotification;\r
        this.notifications = new NotyfArray();\r
        this.view = new NotyfView();\r
        var types = this.registerTypes(opts);\r
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);\r
        this.options.types = types;\r
        this.notifications.onUpdate(function (elem, type) { return _this.view.update(elem, type); });\r
        this.view.on(NotyfEvent.Dismiss, function (_a) {\r
            var target = _a.target, event = _a.event;\r
            _this._removeNotification(target);\r
            // tslint:disable-next-line: no-string-literal\r
            target['triggerEvent'](NotyfEvent.Dismiss, event);\r
        });\r
        // tslint:disable-next-line: no-string-literal\r
        this.view.on(NotyfEvent.Click, function (_a) {\r
            var target = _a.target, event = _a.event;\r
            return target['triggerEvent'](NotyfEvent.Click, event);\r
        });\r
    }\r
    Notyf.prototype.error = function (payload) {\r
        var options = this.normalizeOptions('error', payload);\r
        return this.open(options);\r
    };\r
    Notyf.prototype.success = function (payload) {\r
        var options = this.normalizeOptions('success', payload);\r
        return this.open(options);\r
    };\r
    Notyf.prototype.open = function (options) {\r
        var defaultOpts = this.options.types.find(function (_a) {\r
            var type = _a.type;\r
            return type === options.type;\r
        }) || {};\r
        var config = __assign(__assign({}, defaultOpts), options);\r
        this.assignProps(['ripple', 'position', 'dismissible'], config);\r
        var notification = new NotyfNotification(config);\r
        this._pushNotification(notification);\r
        return notification;\r
    };\r
    Notyf.prototype.dismissAll = function () {\r
        while (this.notifications.splice(0, 1))\r
            ;\r
    };\r
    /**\r
     * Assigns properties to a config object based on two rules:\r
     * 1. If the config object already sets that prop, leave it as so\r
     * 2. Otherwise, use the default prop from the global options\r
     *\r
     * It's intended to build the final config object to open a notification. e.g. if\r
     * 'dismissible' is not set, then use the value from the global config.\r
     *\r
     * @param props - properties to be assigned to the config object\r
     * @param config - object whose properties need to be set\r
     */\r
    Notyf.prototype.assignProps = function (props, config) {\r
        var _this = this;\r
        props.forEach(function (prop) {\r
            // intentional double equality to check for both null and undefined\r
            config[prop] = config[prop] == null ? _this.options[prop] : config[prop];\r
        });\r
    };\r
    Notyf.prototype._pushNotification = function (notification) {\r
        var _this = this;\r
        this.notifications.push(notification);\r
        var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;\r
        if (duration) {\r
            setTimeout(function () { return _this._removeNotification(notification); }, duration);\r
        }\r
    };\r
    Notyf.prototype._removeNotification = function (notification) {\r
        var index = this.notifications.indexOf(notification);\r
        if (index !== -1) {\r
            this.notifications.splice(index, 1);\r
        }\r
    };\r
    Notyf.prototype.normalizeOptions = function (type, payload) {\r
        var options = { type: type };\r
        if (typeof payload === 'string') {\r
            options.message = payload;\r
        }\r
        else if (typeof payload === 'object') {\r
            options = __assign(__assign({}, options), payload);\r
        }\r
        return options;\r
    };\r
    Notyf.prototype.registerTypes = function (opts) {\r
        var incomingTypes = ((opts && opts.types) || []).slice();\r
        var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {\r
            // find if there's a default type within the user input's types, if so, it means the user\r
            // wants to change some of the default settings\r
            var userTypeIdx = -1;\r
            incomingTypes.forEach(function (t, idx) {\r
                if (t.type === defaultType.type)\r
                    userTypeIdx = idx;\r
            });\r
            var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};\r
            return __assign(__assign({}, defaultType), userType);\r
        });\r
        return finalDefaultTypes.concat(incomingTypes);\r
    };\r
    return Notyf;\r
}());




//# sourceURL=webpack://Materialize/./node_modules/notyf/notyf.es.js?`)}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(n!==void 0)return n.exports;var e=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](e,e.exports,__webpack_require__),e.exports}__webpack_require__.d=function(t,n){for(var e in n)__webpack_require__.o(n,e)&&!__webpack_require__.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./libs/notyf/notyf.js");return __webpack_exports__})()}))});export default o();
