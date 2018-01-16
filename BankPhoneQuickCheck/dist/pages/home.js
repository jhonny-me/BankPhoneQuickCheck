'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _item = require('./../components/item.js');

var _item2 = _interopRequireDefault(_item);

var _data = require('./../constants/data.js');

var _data2 = _interopRequireDefault(_data);

var _observer = require('./../libs/observer.js');

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '银行人工电话速查'
    }, _this.$repeat = { "dataList": { "com": "item", "props": "value" } }, _this.$props = { "item": { "xmlns:v-bind": { "value": "", "for": "dataList", "item": "item", "index": "index", "key": "index" }, "v-bind:value.once": { "value": "item", "type": "item", "for": "dataList", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      item: _item2.default
    }, _this.data = {
      dataList: (0, _data2.default)()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      _observer2.default.observe(this, function (stores) {
        var newList = (0, _data2.default)();
        var starredItems = stores.starredItem.list.map(function (item) {
          item.starred = true;
          return item;
        });
        stores.starredItem.list.forEach(function (item) {
          var index = newList.findIndex(function (element) {
            return element.id === item.id;
          });
          if (index !== -1) {
            newList.splice(index, 1);
          }
        });
        newList = starredItems.concat(newList);
        _this2.dataList = newList;
        _this2.$apply();
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpdGVtIiwiZGF0YSIsImRhdGFMaXN0Iiwib2JzZXJ2ZSIsInN0b3JlcyIsIm5ld0xpc3QiLCJzdGFycmVkSXRlbXMiLCJzdGFycmVkSXRlbSIsImxpc3QiLCJtYXAiLCJzdGFycmVkIiwiZm9yRWFjaCIsImluZGV4IiwiZmluZEluZGV4IiwiZWxlbWVudCIsImlkIiwic3BsaWNlIiwiY29uY2F0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsT0FBdEIsRUFBWixFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYscUJBQW9CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUE5RyxFQUFSLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLOzs7Ozs2QkFHRTtBQUFBOztBQUNQLHlCQUFTQyxPQUFULENBQWlCLElBQWpCLEVBQXVCLFVBQUNDLE1BQUQsRUFBWTtBQUNqQyxZQUFJQyxVQUFVLHFCQUFkO0FBQ0EsWUFBSUMsZUFBZUYsT0FBT0csV0FBUCxDQUFtQkMsSUFBbkIsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUFRO0FBQ3JEVCxlQUFLVSxPQUFMLEdBQWUsSUFBZjtBQUNBLGlCQUFPVixJQUFQO0FBQ0QsU0FIa0IsQ0FBbkI7QUFJQUksZUFBT0csV0FBUCxDQUFtQkMsSUFBbkIsQ0FBd0JHLE9BQXhCLENBQWdDLGdCQUFRO0FBQ3RDLGNBQU1DLFFBQVFQLFFBQVFRLFNBQVIsQ0FBa0IsbUJBQVc7QUFBRSxtQkFBT0MsUUFBUUMsRUFBUixLQUFlZixLQUFLZSxFQUEzQjtBQUErQixXQUE5RCxDQUFkO0FBQ0EsY0FBSUgsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEJQLG9CQUFRVyxNQUFSLENBQWVKLEtBQWYsRUFBc0IsQ0FBdEI7QUFDRDtBQUNGLFNBTEQ7QUFNQVAsa0JBQVVDLGFBQWFXLE1BQWIsQ0FBb0JaLE9BQXBCLENBQVY7QUFDQSxlQUFLSCxRQUFMLEdBQWdCRyxPQUFoQjtBQUNBLGVBQUthLE1BQUw7QUFDRCxPQWZEO0FBZ0JEOzs7O0VBOUIrQixlQUFLQyxJOztrQkFBbEIxQixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9pdGVtJ1xuICBpbXBvcnQgZ2V0RGF0YSBmcm9tICcuLi9jb25zdGFudHMvZGF0YSdcbiAgaW1wb3J0IG9ic2VydmVyIGZyb20gJy4uL2xpYnMvb2JzZXJ2ZXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mTtuihjOS6uuW3peeUteivnemAn+afpSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge1wiZGF0YUxpc3RcIjp7XCJjb21cIjpcIml0ZW1cIixcInByb3BzXCI6XCJ2YWx1ZVwifX07XHJcbiRwcm9wcyA9IHtcIml0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImRhdGFMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6dmFsdWUub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImRhdGFMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGl0ZW06IEl0ZW1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGRhdGFMaXN0OiBnZXREYXRhKClcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCAoc3RvcmVzKSA9PiB7XG4gICAgICAgIHZhciBuZXdMaXN0ID0gZ2V0RGF0YSgpXG4gICAgICAgIHZhciBzdGFycmVkSXRlbXMgPSBzdG9yZXMuc3RhcnJlZEl0ZW0ubGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5zdGFycmVkID0gdHJ1ZVxuICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH0pXG4gICAgICAgIHN0b3Jlcy5zdGFycmVkSXRlbS5saXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBuZXdMaXN0LmZpbmRJbmRleChlbGVtZW50ID0+IHsgcmV0dXJuIGVsZW1lbnQuaWQgPT09IGl0ZW0uaWQgfSlcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIG5ld0xpc3QgPSBzdGFycmVkSXRlbXMuY29uY2F0KG5ld0xpc3QpXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBuZXdMaXN0XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=