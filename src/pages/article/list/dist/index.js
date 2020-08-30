"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ListPage_1 = require("@/component/ListPage");
var react_router_dom_1 = require("react-router-dom");
var TableBtn_1 = require("@/layout/TableBtn");
var Article = function () {
    var list = react_1.useState([])[0];
    var nav = react_router_dom_1.useNavigate();
    var skipDetails = react_1.useCallback(function (r) {
        nav('/article/articleDetails', {
            state: { _id: r === null || r === void 0 ? void 0 : r._id }
        });
    }, [nav]);
    var init = react_1.useCallback(function () {
    }, []);
    var columns = react_1.useMemo(function () { return [
        {
            title: '文章ID',
            dataIndex: '_id',
            key: '_id'
        },
        {
            title: '文章名称',
            dataIndex: 'name',
            align: 'center',
            key: 'name'
        },
        {
            title: '操作',
            align: 'center',
            render: function (r) { return (react_1["default"].createElement(TableBtn_1.TableBtnLayout, null,
                react_1["default"].createElement(TableBtn_1.TableBtn, null, "\u7F16\u8F91"),
                react_1["default"].createElement(TableBtn_1.TableBtn, null, "\u5220\u9664"))); }
        }
    ]; }, []);
    return (react_1["default"].createElement(ListPage_1["default"], { init: init, list: list, columns: columns, add: skipDetails }));
};
exports["default"] = Article;
