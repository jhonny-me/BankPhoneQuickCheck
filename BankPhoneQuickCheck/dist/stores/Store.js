"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by johnny on 12/01/2018.
 */
var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this.__data__ = {};
    this.listener = null;
  }

  _createClass(Store, [{
    key: "defineProperty",
    value: function defineProperty(stateMap) {
      var _this = this;

      this.__data__ = stateMap;
      Object.keys(stateMap).forEach(function (key) {
        Object.defineProperty(_this, key, {
          get: function get() {
            return _this.__data__[key];
          },
          set: function set(value) {
            _this.__data__[key] = value;
            if (_this.listener) _this.listener();
          }
        });
      });
    }
  }, {
    key: "addListener",
    value: function addListener(listener) {
      this.listener = listener;
    }
  }]);

  return Store;
}();

exports.default = Store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiX19kYXRhX18iLCJsaXN0ZW5lciIsInN0YXRlTWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImdldCIsInNldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdxQkEsSztBQUNuQixtQkFBZTtBQUFBOztBQUNiLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7Ozs7bUNBRWVDLFEsRUFBVTtBQUFBOztBQUN4QixXQUFLRixRQUFMLEdBQWdCRSxRQUFoQjtBQUNBQyxhQUFPQyxJQUFQLENBQVlGLFFBQVosRUFBc0JHLE9BQXRCLENBQThCLGVBQU87QUFDbkNGLGVBQU9HLGNBQVAsUUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CQyxlQUFLLGVBQU07QUFDVCxtQkFBTyxNQUFLUixRQUFMLENBQWNPLEdBQWQsQ0FBUDtBQUNELFdBSDhCO0FBSS9CRSxlQUFLLGFBQUNDLEtBQUQsRUFBVztBQUNkLGtCQUFLVixRQUFMLENBQWNPLEdBQWQsSUFBcUJHLEtBQXJCO0FBQ0EsZ0JBQUksTUFBS1QsUUFBVCxFQUFtQixNQUFLQSxRQUFMO0FBQ3BCO0FBUDhCLFNBQWpDO0FBU0QsT0FWRDtBQVdEOzs7Z0NBRVdBLFEsRUFBVTtBQUNwQixXQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7Ozs7a0JBdkJrQkYsSyIsImZpbGUiOiJTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb2hubnkgb24gMTIvMDEvMjAxOC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fX2RhdGFfXyA9IHt9XG4gICAgdGhpcy5saXN0ZW5lciA9IG51bGxcbiAgfVxuXG4gIGRlZmluZVByb3BlcnR5IChzdGF0ZU1hcCkge1xuICAgIHRoaXMuX19kYXRhX18gPSBzdGF0ZU1hcFxuICAgIE9iamVjdC5rZXlzKHN0YXRlTWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9fZGF0YV9fW2tleV1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLl9fZGF0YV9fW2tleV0gPSB2YWx1ZVxuICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyKSB0aGlzLmxpc3RlbmVyKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXJcbiAgfVxufVxuIl19