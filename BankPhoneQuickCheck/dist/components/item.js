'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _starredStore = require('./../stores/starredStore.js');

var _starredStore2 = _interopRequireDefault(_starredStore);

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
        _starredStore2.default.star(this.value);
      },
      tapCopy: function tapCopy() {
        console.log('copy');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Item;
}(_wepy2.default.component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwidmFsdWUiLCJtZXRob2RzIiwidGFwU3RhciIsInN0YXIiLCJ0YXBDb3B5IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQURELEssUUFHUkMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0c7QUFDVCwrQkFBWUMsSUFBWixDQUFpQixLQUFLSCxLQUF0QjtBQUNELE9BSE87QUFJUkksYUFKUSxxQkFJRztBQUNUQyxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRDtBQU5PLEs7Ozs7RUFKc0IsZUFBS0MsUzs7a0JBQWxCVCxJIiwiZmlsZSI6Iml0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHN0YXJyZWRJdGVtIGZyb20gJy4uL3N0b3Jlcy9zdGFycmVkU3RvcmUnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHZhbHVlOiB7fVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwU3RhciAoKSB7XG4gICAgICAgIHN0YXJyZWRJdGVtLnN0YXIodGhpcy52YWx1ZSlcbiAgICAgIH0sXG4gICAgICB0YXBDb3B5ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvcHknKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19