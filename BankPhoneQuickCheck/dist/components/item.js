'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_wepy$component) {
  _inherits(Item, _wepy$component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      value: {}
    }, _this.methods = {
      tapStar: function tapStar() {
        console.log('stars');
      },
      tapCopy: function tapCopy() {
        console.log('copy');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Item;
}(_wepy2.default.component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwidmFsdWUiLCJtZXRob2RzIiwidGFwU3RhciIsImNvbnNvbGUiLCJsb2ciLCJ0YXBDb3B5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQURELEssUUFHUkMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0c7QUFDVEMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsT0FITztBQUlSQyxhQUpRLHFCQUlHO0FBQ1RGLGdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEO0FBTk8sSzs7OztFQUpzQixlQUFLRSxTOztrQkFBbEJSLEkiLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICB2YWx1ZToge31cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcFN0YXIgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnMnKVxuICAgICAgfSxcbiAgICAgIHRhcENvcHkgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29weScpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=