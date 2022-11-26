"use strict";

var _react = _interopRequireWildcard(require("react"));
require("./css/bootstrap-select.min.css");
var _excluded = ["error", "disabled", "showSearch", "showAction", "showTick", "isMultiSelect", "selectStyle", "actionBtnStyle", "menuSize", "className", "defaultOptions", "options", "placeholder", "showCountOn", "onChange", "onClose"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BootstrapSelect = function BootstrapSelect(_ref) {
  var _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$showSearch = _ref.showSearch,
    showSearch = _ref$showSearch === void 0 ? false : _ref$showSearch,
    _ref$showAction = _ref.showAction,
    showAction = _ref$showAction === void 0 ? false : _ref$showAction,
    _ref$showTick = _ref.showTick,
    showTick = _ref$showTick === void 0 ? false : _ref$showTick,
    _ref$isMultiSelect = _ref.isMultiSelect,
    isMultiSelect = _ref$isMultiSelect === void 0 ? false : _ref$isMultiSelect,
    _ref$selectStyle = _ref.selectStyle,
    selectStyle = _ref$selectStyle === void 0 ? 'btn-light' : _ref$selectStyle,
    _ref$actionBtnStyle = _ref.actionBtnStyle,
    actionBtnStyle = _ref$actionBtnStyle === void 0 ? 'btn-outline-dark' : _ref$actionBtnStyle,
    _ref$menuSize = _ref.menuSize,
    menuSize = _ref$menuSize === void 0 ? 'auto' : _ref$menuSize,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$defaultOptions = _ref.defaultOptions,
    defaultOptions = _ref$defaultOptions === void 0 ? [] : _ref$defaultOptions,
    options = _ref.options,
    placeholder = _ref.placeholder,
    showCountOn = _ref.showCountOn,
    onChange = _ref.onChange,
    onClose = _ref.onClose,
    props = _objectWithoutProperties(_ref, _excluded);
  if (defaultOptions.length) {
    options.forEach(function (optItem) {
      optItem.isSelected = defaultOptions.indexOf(optItem.labelKey) !== -1 ? true : false;
    });
  }
  var selectEl = _react["default"].useRef();
  var _useState = (0, _react.useState)(options),
    _useState2 = _slicedToArray(_useState, 2),
    optionsList = _useState2[0],
    setOptionsList = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    menuVisible = _useState4[0],
    setMenuVisible = _useState4[1];
  var _useState5 = (0, _react.useState)('hide'),
    _useState6 = _slicedToArray(_useState5, 2),
    showDropdown = _useState6[0],
    setShowDropdown = _useState6[1];
  var _useState7 = (0, _react.useState)('auto'),
    _useState8 = _slicedToArray(_useState7, 2),
    menuHeight = _useState8[0],
    setMenuHeight = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    beforeOpenVal = _useState12[0],
    setBeforeOpenVal = _useState12[1];
  var btnPlaceHolder = placeholder && placeholder !== null ? placeholder : 'No option selected';
  var prevOptions = (0, _react.useRef)();
  var prevDefaultOptions = (0, _react.useRef)();
  var initialState = {
    value: _toConsumableArray(options.filter(function (e) {
      return e.isSelected;
    }).map(function (e) {
      return e.value;
    })),
    labelKey: _toConsumableArray(options.filter(function (e) {
      return e.isSelected;
    }).map(function (e) {
      return e.labelKey;
    }))
  };
  var _useState13 = (0, _react.useState)(initialState.value.length > 0 ? initialState.value : []),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedValue = _useState14[0],
    setSelectedValue = _useState14[1];
  var _useState15 = (0, _react.useState)(initialState.labelKey.length > 0 ? initialState.labelKey : []),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedKey = _useState16[0],
    setSelectedKey = _useState16[1];

  // Update options list on change option
  (0, _react.useEffect)(function () {
    if (JSON.stringify(prevOptions.current) !== JSON.stringify(options) || JSON.stringify(prevDefaultOptions.current) !== JSON.stringify(defaultOptions)) {
      if (defaultOptions.length) {
        options.forEach(function (optItem) {
          optItem.isSelected = defaultOptions.indexOf(optItem.labelKey) !== -1 ? true : false;
        });
      }
      prevOptions.current = options;
      prevDefaultOptions.current = defaultOptions;
      setSelectedValue(_toConsumableArray(options.filter(function (e) {
        return e.isSelected;
      }).map(function (e) {
        return e.value;
      })));
      setSelectedKey(_toConsumableArray(options.filter(function (e) {
        return e.isSelected;
      }).map(function (e) {
        return e.labelKey;
      })));
      setOptionsList(options);
    }
  }, [options, defaultOptions]);

  // Hide menu items
  var hideMenu = function hideMenu() {
    if (JSON.stringify(beforeOpenVal) !== JSON.stringify(selectedValue)) options.length > 0 && onClose && onClose({
      el: selectEl.current,
      selectedValue: selectedValue,
      selectedKey: selectedKey
    });
    setMenuVisible(false);
    setShowDropdown('hide');
    setOptionsList(options);
    setSearch("");
  };

  // Execute callback function on change option
  (0, _react.useEffect)(function () {
    onChange && onChange({
      el: selectEl.current,
      selectedValue: selectedValue,
      selectedKey: selectedKey
    });
    !isMultiSelect && menuVisible && hideMenu();
  }, [selectedValue, selectedKey]);

  // Set dropdown menu height
  var setOptPosNHeight = function setOptPosNHeight() {
    if (optionsList.length) {
      var liListHeight = 0;
      var bsFunctionsHeight = 0;
      var currentEl = selectEl.current;
      var dropdown = currentEl.querySelector('.dropdown-menu:not(.inner)');
      var winInnerHeight = window.innerHeight;
      var dropDownInfo = currentEl.getBoundingClientRect();
      var dropDownBottom = winInnerHeight - dropDownInfo.bottom;
      var dropdownClone = dropdown.cloneNode(true);
      dropdownClone.style.visibility = "hidden";
      dropdownClone.classList.add("show");
      dropdownClone.classList.remove("hide");
      document.body.appendChild(dropdownClone);
      bsFunctionsHeight += showSearch ? dropdownClone.querySelector('.bs-searchbox').offsetHeight : 0;
      bsFunctionsHeight += isMultiSelect && showAction ? dropdownClone.querySelector('.bs-actionsbox').offsetHeight : 0;
      var liArry = dropdownClone.querySelector('.dropdown-menu.inner').children;
      var liHeight = liArry[0].offsetHeight;
      var liTotalHeight = liArry.length * liHeight;
      if (menuSize) {
        if (dropDownInfo.top > 0 && dropDownBottom > 0) {
          if (typeof menuSize === 'number') {
            liListHeight = (liArry.length > menuSize ? liHeight * menuSize : liTotalHeight) + 'px';
          } else {
            var menuDrawPos = dropDownInfo.top > dropDownBottom ? dropDownInfo.top : winInnerHeight - dropDownInfo.bottom;
            var menuDrawSpace = menuDrawPos - bsFunctionsHeight - 23 - 2; //23: Horizontal scroll bar height approx., 2: Fix decimal number variation

            liListHeight = menuDrawSpace < liTotalHeight ? menuDrawSpace : liTotalHeight;
          }
          setMenuHeight(liListHeight);
        }
      }
      dropDownInfo.top > dropDownBottom && liTotalHeight + bsFunctionsHeight > dropDownBottom ? currentEl.classList.add("dropup") : currentEl.classList.remove("dropup");
      document.body.removeChild(dropdownClone);
    }
  };

  // Handle event on button click to show/hide menu
  var handleBtnClick = function handleBtnClick(e) {
    setOptPosNHeight();
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      var selectedOptions = getSelectedVal();
      if (JSON.stringify(beforeOpenVal) !== JSON.stringify(selectedOptions.currentValue)) setBeforeOpenVal(selectedOptions.currentValue);
    }
  };
  (0, _react.useEffect)(function () {
    setShowDropdown(menuVisible ? 'show' : 'hide');
  }, [menuVisible]);

  // Get all selected value
  var getSelectedVal = function getSelectedVal() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var selectedOptions = {
      currentValue: [],
      currentKey: []
    };
    optionsList.forEach(function (option, idx) {
      if (index === idx) {
        if (selectedKey.indexOf(option.labelKey) === -1) {
          selectedOptions.currentValue !== undefined ? selectedOptions.currentValue.push(option.value) : selectedOptions.currentValue = [option.value];
          selectedOptions.currentKey !== undefined ? selectedOptions.currentKey.push(option.labelKey) : selectedOptions.currentKey = [option.labelKey];
        }
      } else {
        if (selectedKey.indexOf(option.labelKey) !== -1) {
          selectedOptions.currentValue !== undefined ? selectedOptions.currentValue.push(option.value) : selectedOptions.currentValue = [option.value];
          selectedOptions.currentKey !== undefined ? selectedOptions.currentKey.push(option.labelKey) : selectedOptions.currentKey = [option.labelKey];
        }
      }
    });
    return selectedOptions;
  };

  // Handle event on select on deselect option from dropdown
  var handleOptionClick = function handleOptionClick(option, index) {
    var currentKey = option.labelKey;
    var currentValue = option.value;
    if (isMultiSelect) {
      if (_typeof(selectedValue) === "object") {
        var selectedOptions = getSelectedVal(index);
        setSelectedValue(selectedOptions.currentValue);
        setSelectedKey(selectedOptions.currentKey);
      }
    } else {
      setSelectedValue([currentValue]);
      setSelectedKey([currentKey]);
    }
  };

  // Handle search
  var handleSearch = function handleSearch(e) {
    var searchTerm = e.target.value;
    var filteredOptions = [];
    filteredOptions = options.filter(function (opt) {
      return opt.value.toLowerCase().includes(e.target.value.trim().toLowerCase());
    });
    setOptionsList(filteredOptions);
    setSearch(searchTerm);
  };

  // Handle select all & deselect all
  var handleSelectAll = function handleSelectAll() {
    var currentValue = [];
    var currentKey = [];
    optionsList.forEach(function (option) {
      if (!option.isDisabled) {
        currentValue.push(option.value);
        currentKey.push(option.labelKey);
      }
      ;
    });
    setSelectedValue(currentValue);
    setSelectedKey(currentKey);
  };
  var handleDeselectAll = function handleDeselectAll() {
    setSelectedValue([]);
    setSelectedKey([]);
  };

  // Handle event on click outside of dropdown
  var handleClickOutside = (0, _react.useCallback)(function (e) {
    if (menuVisible && e.target.closest(".dropdown") !== selectEl.current) {
      hideMenu();
    }
  }, [selectEl, menuVisible, showDropdown, options, search, selectedValue, selectedKey]);
  (0, _react.useEffect)(function () {
    document.addEventListener("click", handleClickOutside);
    return function () {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Handle window events
  (0, _react.useEffect)(function () {
    // Handle event on window resize
    var handleResize = function handleResize() {
      menuVisible && setOptPosNHeight();
    };
    window.addEventListener('resize', handleResize);

    // Handle event on window scroll
    var handleScroll = function handleScroll() {
      menuVisible && setOptPosNHeight();
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: selectEl,
    className: "".concat(showTick ? 'show-tick ' : '').concat(showSearch ? 'show-search ' : '').concat(disabled ? 'disabled ' : '', "dropdown hk--custom--select ").concat(className)
  }, props), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    disabled: disabled,
    className: "btn dropdown-toggle ".concat(selectStyle, " ").concat(disabled ? 'disabled' : '', " ").concat(selectedValue && selectedValue.length === 0 ? 'bs-placeholder' : ''),
    "aria-expanded": menuVisible,
    title: selectedValue,
    onClick: function onClick(e) {
      return handleBtnClick(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-option"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-option-inner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-option-inner-inner"
  }, isMultiSelect === true ? selectedValue && selectedValue.length > 0 ? showCountOn && showCountOn < selectedValue.length ? selectedValue.length + " items selected" : selectedValue.join(', ') : btnPlaceHolder : selectedValue && selectedValue.length > 0 ? selectedValue : btnPlaceHolder)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-menu ".concat(showDropdown)
  }, options.length > 0 && showSearch && /*#__PURE__*/_react["default"].createElement("div", {
    className: "bs-box bs-searchbox bg-light border-bottom border-primary"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    type: "search",
    autoComplete: "off",
    role: "combobox",
    "aria-label": "Search",
    placeholder: "Search",
    value: search,
    "aria-autocomplete": "list",
    onChange: function onChange(e) {
      return handleSearch(e);
    }
  })), isMultiSelect && showAction && optionsList.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "bs-box bs-actionsbox"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "btn-group btn-group-sm btn-block text-nowrap"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    disabled: optionsList.length === 0 && true,
    className: "btn actions-btn bs-select-all ".concat(actionBtnStyle, " ").concat(optionsList.length === 0 ? 'disabled' : ''),
    onClick: function onClick(e) {
      return handleSelectAll(e);
    }
  }, "Select All"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    disabled: optionsList.length === 0 && true,
    className: "btn actions-btn bs-deselect-all ".concat(actionBtnStyle, " ").concat(optionsList.length === 0 ? 'disabled' : ''),
    onClick: function onClick(e) {
      return handleDeselectAll(e);
    }
  }, "Deselect All"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "inner show",
    role: "listbox",
    style: {
      'maxHeight': menuHeight,
      'overflowY': 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dropdown-menu inner show",
    role: "presentation"
  }, optionsList.length > 0 ? optionsList.map(function (option, idx) {
    var classList = option.isDisabled ? ' disabled' : selectedValue.indexOf(option.value) !== -1 ? ' selected active' : '';
    var optClass = option.className ? option.className + '' : '';
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: "option_".concat(idx),
      "data-value": option.value,
      className: "".concat(optClass + classList)
    }, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      role: "option",
      style: option.style,
      onClick: function onClick() {
        return handleOptionClick(option, idx);
      },
      className: "dropdown-item".concat(classList)
    }, option.icon && /*#__PURE__*/_react["default"].createElement("span", {
      className: "mr-2 hkoption-icon ".concat(option.icon)
    }), showTick && selectedValue.indexOf(option.value) !== -1 && /*#__PURE__*/_react["default"].createElement("span", {
      className: "hkicon-checkmark check-mark"
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text"
    }, option.value)));
  }) : /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-item disabled"
  }, options.length > 0 && showSearch && selectEl.current !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "No result match ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-italic font-weight-bold"
  }, "'", selectEl.current.querySelector('[type = "search"]').value, "'")) : 'No option to select'))))));
};
module.exports = BootstrapSelect;
// Developed by Hardik Kondhiya <sonihardik90@gmail.com>