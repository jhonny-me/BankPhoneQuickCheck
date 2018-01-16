'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Store2 = require('./Store.js');

var _Store3 = _interopRequireDefault(_Store2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by johnny on 15/01/2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StarredStore = function (_Store) {
  _inherits(StarredStore, _Store);

  function StarredStore() {
    _classCallCheck(this, StarredStore);

    var _this = _possibleConstructorReturn(this, (StarredStore.__proto__ || Object.getPrototypeOf(StarredStore)).call(this));

    _this.defineProperty({
      list: []
    });
    return _this;
  }

  _createClass(StarredStore, [{
    key: 'star',
    value: function star(item) {
      var index = this.list.findIndex(function (element) {
        return element.id === item.id;
      });
      if (index === -1) {
        this.list.push(item);
        this.list = this.list;
      } else {
        this.list.splice(index, 1).starred = false;
        this.list = this.list;
      }
    }
  }]);

  return StarredStore;
}(_Store3.default);

exports.default = new StarredStore();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJyZWRTdG9yZS5qcyJdLCJuYW1lcyI6WyJTdGFycmVkU3RvcmUiLCJkZWZpbmVQcm9wZXJ0eSIsImxpc3QiLCJpdGVtIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwiaWQiLCJwdXNoIiwic3BsaWNlIiwic3RhcnJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7OzsrZUFIQTs7Ozs7SUFLTUEsWTs7O0FBQ0osMEJBQWU7QUFBQTs7QUFBQTs7QUFFYixVQUFLQyxjQUFMLENBQW9CO0FBQ2xCQyxZQUFNO0FBRFksS0FBcEI7QUFGYTtBQUtkOzs7O3lCQUVLQyxJLEVBQU07QUFDVixVQUFNQyxRQUFRLEtBQUtGLElBQUwsQ0FBVUcsU0FBVixDQUFvQixtQkFBVztBQUMzQyxlQUFPQyxRQUFRQyxFQUFSLEtBQWVKLEtBQUtJLEVBQTNCO0FBQ0QsT0FGYSxDQUFkO0FBR0EsVUFBSUgsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsYUFBS0YsSUFBTCxDQUFVTSxJQUFWLENBQWVMLElBQWY7QUFDQSxhQUFLRCxJQUFMLEdBQVksS0FBS0EsSUFBakI7QUFDRCxPQUhELE1BR007QUFDSixhQUFLQSxJQUFMLENBQVVPLE1BQVYsQ0FBaUJMLEtBQWpCLEVBQXdCLENBQXhCLEVBQTJCTSxPQUEzQixHQUFxQyxLQUFyQztBQUNBLGFBQUtSLElBQUwsR0FBWSxLQUFLQSxJQUFqQjtBQUNEO0FBQ0Y7Ozs7OztrQkFHWSxJQUFJRixZQUFKLEUiLCJmaWxlIjoic3RhcnJlZFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGpvaG5ueSBvbiAxNS8wMS8yMDE4LlxuICovXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9TdG9yZSdcblxuY2xhc3MgU3RhcnJlZFN0b3JlIGV4dGVuZHMgU3RvcmUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuZGVmaW5lUHJvcGVydHkoe1xuICAgICAgbGlzdDogW11cbiAgICB9KVxuICB9XG5cbiAgc3RhciAoaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0LmZpbmRJbmRleChlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LmlkID09PSBpdGVtLmlkXG4gICAgfSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3QucHVzaChpdGVtKVxuICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0XG4gICAgfWVsc2Uge1xuICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSkuc3RhcnJlZCA9IGZhbHNlXG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3RcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0YXJyZWRTdG9yZSgpXG4iXX0=