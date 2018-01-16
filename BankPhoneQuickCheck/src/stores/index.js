/**
 * Created by johnny on 12/01/2018.
 */

import starredStore from './starredStore'

const observerMap = (map) => {
  "use strict";
  let res = {};
  Object.keys(map).forEach(key => {
    Object.defineProperty(res, key, {
      enumerable: true,
      value: Object.assign(map[key].__data__, {
        '__addListener__': (target) => map[key].addListener(target)
      })
    })
  })
  return res;
}

// used by lib/observer
export default observerMap({
  starredItem: starredStore
})
