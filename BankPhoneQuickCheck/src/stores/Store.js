/**
 * Created by johnny on 12/01/2018.
 */
export default class Store {
  constructor () {
    this.__data__ = {}
    this.listener = null
  }

  defineProperty (stateMap) {
    this.__data__ = stateMap
    Object.keys(stateMap).forEach(key => {
      Object.defineProperty(this, key, {
        get: () => {
          return this.__data__[key]
        },
        set: (value) => {
          this.__data__[key] = value
          if (this.listener) this.listener()
        }
      })
    })
  }

  addListener(listener) {
    this.listener = listener
  }
}
