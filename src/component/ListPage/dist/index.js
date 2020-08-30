"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var Page_1 = require("@/layout/Page");
var TypeManageTitle_1 = require("../TypeManageTitle");
;
/**
 * @name ListPage 数据列表页面
 * 其实很多list页面都是通用的，也可以封装通用组件提高效率
 * 这里利用class组件，通过props解决（也可以使用高阶组件）
 */
var ListPage = /** @class */ (function (_super) {
    __extends(ListPage, _super);
    function ListPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TableRenderKey = function (row) { return row._id; };
        return _this;
    }
    ListPage.prototype.render = function () {
        var props = this.props;
        return (react_1["default"].createElement(Page_1.Page, null,
            react_1["default"].createElement(TypeManageTitle_1["default"], { add: props.add, init: props.init }),
            react_1["default"].createElement(antd_1.Table, { className: 'table', pagination: false, dataSource: props.list, columns: props.columns, rowKey: this.TableRenderKey })));
    };
    ;
    return ListPage;
}(react_1["default"].PureComponent));
;
exports["default"] = ListPage;
