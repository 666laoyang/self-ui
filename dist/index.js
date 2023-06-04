(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('classnames')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', 'classnames'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["violet-design2"] = {}, global.jsxRuntime, global.classNames));
})(this, (function (exports, jsxRuntime, classNames) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    /**
     * >按钮用于开始一个即时操作。
     *
     * ### 何时使用
     * 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
     * 在violet-design我们提供了6种按钮
     *
     * - 默认按钮：用于没有主次之分的一组行动点。
     * - 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
     * - 危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。
     * - 链接按钮：一般用于链接，即导航至某位置。
     * - 图标按钮：可以通过Icon组件，为按钮提供各式各样的图标选择。
     * - 虚线按钮：常用于添加操作。
     *
     *
     * 除了默认Mid Button尺寸，还提供了两种尺寸可供自由组合
     * - Large Button
     * - Samll Button
     *
     * 所有按钮都提供了disabled属性，用于行动点不可用的时候，一般需要文案解释。
     *
     */
    var Button = function (props) {
        var _a;
        var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, children = props.children, href = props.href, restProps = __rest(props, ["btnType", "className", "disabled", "size", "children", "href"]);
        var cls = classNames__default["default"]('violetButton', className, (_a = {},
            _a["violetButton--".concat(btnType)] = btnType,
            _a["violetButton--".concat(size)] = size !== 'mid',
            _a['violetButton--disabled'] = disabled,
            _a));
        if (btnType === 'link' && href) {
            return (jsxRuntime.jsx("a", __assign({ className: cls, href: !disabled ? href : 'javascript:void(0)' }, restProps, { children: children })));
        }
        else {
            return (jsxRuntime.jsx("button", __assign({ className: cls, disabled: disabled }, restProps, { children: children })));
        }
    };
    Button.defaultProps = {
        disabled: false,
        btnType: 'default',
    };

    exports.Button = Button;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
