"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ReactColor = tslib_1.__importStar(require("react-color"));
var antd_1 = require("antd");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var tinycolor2_1 = tslib_1.__importDefault(require("tinycolor2"));
var Colorpicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, onChangeComplete = _a.onChangeComplete, onColorResult = _a.onColorResult, _b = _a.popup, popup = _b === void 0 ? false : _b, _c = _a.blockStyles, blockStyles = _c === void 0 ? {} : _c, _d = _a.popoverProps, popoverProps = _d === void 0 ? {} : _d, _e = _a.picker, picker = _e === void 0 ? 'SketchPicker' : _e, props = tslib_1.__rest(_a, ["value", "onChange", "onChangeComplete", "onColorResult", "popup", "blockStyles", "popoverProps", "picker"]);
    var formatColor = function (color) {
        return color !== undefined && typeof color !== 'string'
            ? (0, tinycolor2_1["default"])('hsl' in color
                ? color['hsl']
                : 'hsv' in color
                    ? color['hsv']
                    : 'rgb' in color
                        ? color['rgb']
                        : 'hex' in color
                            ? color['hex']
                            : color)
            : (0, tinycolor2_1["default"])(color);
    };
    var prepareValue = function (value) {
        var decimalToHex = function (alpha) {
            return alpha === 0 ? '00' : Math.round(255 * alpha).toString(16);
        };
        var formatted = formatColor(value);
        return "".concat(formatted.toHexString()).concat(decimalToHex(formatted.getAlpha()));
    };
    var triggerOnChange = function (color) {
        var colorValue = onColorResult ? onColorResult(color) : color;
        onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
    };
    var triggerOnChangeComplete = function (color) {
        var colorValue = onColorResult ? onColorResult(color) : color;
        onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(colorValue);
    };
    var getBackgroundBlockColor = function (color) {
        var _a, _b, _c, _d;
        var formatted = formatColor(color);
        var rgba = formatted.toRgb();
        return color
            ? "rgba(\n        ".concat((_a = rgba === null || rgba === void 0 ? void 0 : rgba.r) !== null && _a !== void 0 ? _a : 0, ", ").concat((_b = rgba === null || rgba === void 0 ? void 0 : rgba.g) !== null && _b !== void 0 ? _b : 0, ", ").concat((_c = rgba === null || rgba === void 0 ? void 0 : rgba.b) !== null && _c !== void 0 ? _c : 0, ", ").concat((_d = rgba === null || rgba === void 0 ? void 0 : rgba.a) !== null && _d !== void 0 ? _d : 100, "\n      )")
            : '';
    };
    var blStyles = Object.assign({}, {
        width: '50px',
        height: '20px',
        display: 'inline-flex',
        border: '2px solid #fff',
        boxShadow: '0 0 0 1px #ccc'
    }, blockStyles, { background: getBackgroundBlockColor(value) });
    var fixReactColorStyles = {
        MaterialPicker: {
            "default": {
                material: {
                    boxSizing: 'content-box'
                }
            }
        }
    };
    if (popup) {
        fixReactColorStyles['SliderPicker'] = {
            "default": {
                hue: {
                    minWidth: '300px'
                }
            }
        };
    }
    var Picker = getPicker(picker);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, popup ? (react_1["default"].createElement(antd_1.Popover, tslib_1.__assign({ trigger: 'click' }, popoverProps, { content: react_1["default"].createElement(Picker, tslib_1.__assign({ color: prepareValue(value), onChange: triggerOnChange, onChangeComplete: triggerOnChangeComplete, styles: fixReactColorStyles[picker] || undefined }, props)) }),
        react_1["default"].createElement("div", { style: blStyles }))) : (react_1["default"].createElement(Picker, tslib_1.__assign({ color: prepareValue(value), onChange: triggerOnChange, onChangeComplete: triggerOnChangeComplete, styles: fixReactColorStyles[picker] || undefined }, props)))));
};
var getPicker = function (pickerType) {
    switch (pickerType) {
        case 'BlockPicker':
            return ReactColor.BlockPicker;
        case 'ChromePicker':
            return ReactColor.ChromePicker;
        case 'CirclePicker':
            return ReactColor.CirclePicker;
        case 'CompactPicker':
            return ReactColor.CompactPicker;
        case 'GithubPicker':
            return ReactColor.GithubPicker;
        case 'GooglePicker':
            return ReactColor.GooglePicker;
        case 'HuePicker':
            return ReactColor.HuePicker;
        case 'MaterialPicker':
            return ReactColor.MaterialPicker;
        case 'PhotoshopPicker':
            return ReactColor.PhotoshopPicker;
        case 'SliderPicker':
            return ReactColor.SliderPicker;
        case 'SwatchesPicker':
            return ReactColor.SwatchesPicker;
        case 'TwitterPicker':
            return ReactColor.TwitterPicker;
    }
    return ReactColor.SketchPicker;
};
Colorpicker.propTypes = {
    popup: prop_types_1["default"].bool,
    value: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].object]),
    onChange: prop_types_1["default"].func,
    onChangeComplete: prop_types_1["default"].func,
    onColorResult: prop_types_1["default"].func,
    blockStyles: prop_types_1["default"].object,
    popoverProps: prop_types_1["default"].object,
    picker: prop_types_1["default"].oneOf([
        'BlockPicker',
        'ChromePicker',
        'CirclePicker',
        'CompactPicker',
        'GithubPicker',
        'GooglePicker',
        'HuePicker',
        'MaterialPicker',
        'PhotoshopPicker',
        'SketchPicker',
        'SliderPicker',
        'SwatchesPicker',
        'TwitterPicker',
    ])
};
exports["default"] = Colorpicker;
