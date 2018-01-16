'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _starredStore = require('./starredStore.js');

var _starredStore2 = _interopRequireDefault(_starredStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var observerMap = function observerMap(map) {
  "use strict";

  var res = {};
  Object.keys(map).forEach(function (key) {
    Object.defineProperty(res, key, {
      enumerable: true,
      value: Object.assign(map[key].__data__, {
        '__addListener__': function __addListener__(target) {
          return map[key].addListener(target);
        }
      })
    });
  });
  return res;
};

// used by lib/observer
/**
 * Created by johnny on 12/01/2018.
 */

exports.default = observerMap({
  starredItem: _starredStore2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmVyTWFwIiwibWFwIiwicmVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsImFzc2lnbiIsIl9fZGF0YV9fIiwidGFyZ2V0IiwiYWRkTGlzdGVuZXIiLCJzdGFycmVkSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDM0I7O0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0FDLFNBQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsZUFBTztBQUM5QkYsV0FBT0csY0FBUCxDQUFzQkosR0FBdEIsRUFBMkJLLEdBQTNCLEVBQWdDO0FBQzlCQyxrQkFBWSxJQURrQjtBQUU5QkMsYUFBT04sT0FBT08sTUFBUCxDQUFjVCxJQUFJTSxHQUFKLEVBQVNJLFFBQXZCLEVBQWlDO0FBQ3RDLDJCQUFtQix5QkFBQ0MsTUFBRDtBQUFBLGlCQUFZWCxJQUFJTSxHQUFKLEVBQVNNLFdBQVQsQ0FBcUJELE1BQXJCLENBQVo7QUFBQTtBQURtQixPQUFqQztBQUZ1QixLQUFoQztBQU1ELEdBUEQ7QUFRQSxTQUFPVixHQUFQO0FBQ0QsQ0FaRDs7QUFjQTtBQXBCQTs7OztrQkFxQmVGLFlBQVk7QUFDekJjO0FBRHlCLENBQVosQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb2hubnkgb24gMTIvMDEvMjAxOC5cbiAqL1xuXG5pbXBvcnQgc3RhcnJlZFN0b3JlIGZyb20gJy4vc3RhcnJlZFN0b3JlJ1xuXG5jb25zdCBvYnNlcnZlck1hcCA9IChtYXApID0+IHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGxldCByZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcywga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IE9iamVjdC5hc3NpZ24obWFwW2tleV0uX19kYXRhX18sIHtcbiAgICAgICAgJ19fYWRkTGlzdGVuZXJfXyc6ICh0YXJnZXQpID0+IG1hcFtrZXldLmFkZExpc3RlbmVyKHRhcmdldClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIHJlcztcbn1cblxuLy8gdXNlZCBieSBsaWIvb2JzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyTWFwKHtcbiAgc3RhcnJlZEl0ZW06IHN0YXJyZWRTdG9yZVxufSlcbiJdfQ==