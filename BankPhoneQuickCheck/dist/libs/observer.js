'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by johnny on 12/01/2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _index = require('./../stores/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
  function Observer() {
    var _this = this;

    _classCallCheck(this, Observer);

    this.notifyQueue = 0;
    this.notifyDelayTime = 2; //ms
    this.listensers = new Map();
    Object.keys(_index2.default).forEach(function (key) {
      _index2.default[key].__addListener__(_this.notify.bind(_this));
    });
  }

  _createClass(Observer, [{
    key: 'notify',
    value: function notify() {
      var _this2 = this;

      this.notifyQueue += 1;
      setTimeout(function () {
        _this2.notifyQueue -= 1;
        if (_this2.notifyQueue === 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this2.listensers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref = _step.value;

              var _ref2 = _slicedToArray(_ref, 2);

              var targetPage = _ref2[0];
              var selector = _ref2[1];

              /*const newData = */selector(_index2.default);
              // targetPage.setData(newData)
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, this.notifyDelayTime);
    }
  }, {
    key: 'observe',
    value: function observe(targetPage, selector) {
      // const initialState = selector(stores)
      // targetPage.setData(initialState)
      this.listensers.set(targetPage, selector);
    }
  }, {
    key: 'unobserve',
    value: function unobserve(target) {
      this.listensers.delete(target);
    }
  }]);

  return Observer;
}();

exports.default = new Observer();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmVyLmpzIl0sIm5hbWVzIjpbIk9ic2VydmVyIiwibm90aWZ5UXVldWUiLCJub3RpZnlEZWxheVRpbWUiLCJsaXN0ZW5zZXJzIiwiTWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJfX2FkZExpc3RlbmVyX18iLCJub3RpZnkiLCJiaW5kIiwic2V0VGltZW91dCIsInRhcmdldFBhZ2UiLCJzZWxlY3RvciIsInNldCIsInRhcmdldCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cWpCQUFBOzs7O0FBSUE7Ozs7Ozs7O0lBRU1BLFE7QUFDSixzQkFBYztBQUFBOztBQUFBOztBQUNaLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLENBQXZCLENBRlksQ0FFYTtBQUN6QixTQUFLQyxVQUFMLEdBQWtCLElBQUlDLEdBQUosRUFBbEI7QUFDQUMsV0FBT0MsSUFBUCxrQkFBb0JDLE9BQXBCLENBQTRCLGVBQU87QUFDakMsc0JBQU9DLEdBQVAsRUFBWUMsZUFBWixDQUE0QixNQUFLQyxNQUFMLENBQVlDLElBQVosT0FBNUI7QUFDRCxLQUZEO0FBR0Q7Ozs7NkJBRVE7QUFBQTs7QUFDUCxXQUFLVixXQUFMLElBQW9CLENBQXBCO0FBQ0FXLGlCQUFXLFlBQU07QUFDZixlQUFLWCxXQUFMLElBQW9CLENBQXBCO0FBQ0EsWUFBSSxPQUFLQSxXQUFMLEtBQXFCLENBQXpCLEVBQTRCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQzFCLGlDQUFtQyxPQUFLRSxVQUF4Qyw4SEFBb0Q7QUFBQTs7QUFBQTs7QUFBQSxrQkFBMUNVLFVBQTBDO0FBQUEsa0JBQTlCQyxRQUE4Qjs7QUFDbEQsa0NBQW9CQTtBQUNwQjtBQUNEO0FBSnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLM0I7QUFDRixPQVJELEVBUUcsS0FBS1osZUFSUjtBQVNEOzs7NEJBRU9XLFUsRUFBWUMsUSxFQUFVO0FBQzVCO0FBQ0E7QUFDQSxXQUFLWCxVQUFMLENBQWdCWSxHQUFoQixDQUFvQkYsVUFBcEIsRUFBZ0NDLFFBQWhDO0FBQ0Q7Ozs4QkFFU0UsTSxFQUFRO0FBQ2hCLFdBQUtiLFVBQUwsQ0FBZ0JjLE1BQWhCLENBQXVCRCxNQUF2QjtBQUNEOzs7Ozs7a0JBR1ksSUFBSWhCLFFBQUosRSIsImZpbGUiOiJvYnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb2hubnkgb24gMTIvMDEvMjAxOC5cbiAqL1xuXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL3N0b3Jlcy9pbmRleCdcblxuY2xhc3MgT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5vdGlmeVF1ZXVlID0gMFxuICAgIHRoaXMubm90aWZ5RGVsYXlUaW1lID0gMiAvL21zXG4gICAgdGhpcy5saXN0ZW5zZXJzID0gbmV3IE1hcCgpXG4gICAgT2JqZWN0LmtleXMoc3RvcmVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzdG9yZXNba2V5XS5fX2FkZExpc3RlbmVyX18odGhpcy5ub3RpZnkuYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG5cbiAgbm90aWZ5KCkge1xuICAgIHRoaXMubm90aWZ5UXVldWUgKz0gMVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlRdWV1ZSAtPSAxXG4gICAgICBpZiAodGhpcy5ub3RpZnlRdWV1ZSA9PT0gMCkge1xuICAgICAgICBmb3IgKGxldCBbdGFyZ2V0UGFnZSwgc2VsZWN0b3JdIG9mIHRoaXMubGlzdGVuc2Vycykge1xuICAgICAgICAgIC8qY29uc3QgbmV3RGF0YSA9ICovc2VsZWN0b3Ioc3RvcmVzKVxuICAgICAgICAgIC8vIHRhcmdldFBhZ2Uuc2V0RGF0YShuZXdEYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcy5ub3RpZnlEZWxheVRpbWUpXG4gIH1cblxuICBvYnNlcnZlKHRhcmdldFBhZ2UsIHNlbGVjdG9yKSB7XG4gICAgLy8gY29uc3QgaW5pdGlhbFN0YXRlID0gc2VsZWN0b3Ioc3RvcmVzKVxuICAgIC8vIHRhcmdldFBhZ2Uuc2V0RGF0YShpbml0aWFsU3RhdGUpXG4gICAgdGhpcy5saXN0ZW5zZXJzLnNldCh0YXJnZXRQYWdlLCBzZWxlY3RvcilcbiAgfVxuXG4gIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICB0aGlzLmxpc3RlbnNlcnMuZGVsZXRlKHRhcmdldClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2ZXIoKVxuIl19