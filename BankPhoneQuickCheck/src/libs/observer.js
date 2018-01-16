/**
 * Created by johnny on 12/01/2018.
 */

import stores from '../stores/index'

class Observer {
  constructor() {
    this.notifyQueue = 0
    this.notifyDelayTime = 2 //ms
    this.listensers = new Map()
    Object.keys(stores).forEach(key => {
      stores[key].__addListener__(this.notify.bind(this))
    })
  }

  notify() {
    this.notifyQueue += 1
    setTimeout(() => {
      this.notifyQueue -= 1
      if (this.notifyQueue === 0) {
        for (let [targetPage, selector] of this.listensers) {
          /*const newData = */selector(stores)
          // targetPage.setData(newData)
        }
      }
    }, this.notifyDelayTime)
  }

  observe(targetPage, selector) {
    // const initialState = selector(stores)
    // targetPage.setData(initialState)
    this.listensers.set(targetPage, selector)
  }

  unobserve(target) {
    this.listensers.delete(target)
  }
}

export default new Observer()
