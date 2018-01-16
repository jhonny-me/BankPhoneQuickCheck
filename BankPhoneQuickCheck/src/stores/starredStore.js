/**
 * Created by johnny on 15/01/2018.
 */
import Store from './Store'

class StarredStore extends Store {
  constructor () {
    super()
    this.defineProperty({
      list: []
    })
  }

  star (item) {
    const index = this.list.findIndex(element => {
      return element.id === item.id
    })
    if (index === -1) {
      this.list.push(item)
      this.list = this.list
    }else {
      this.list.splice(index, 1)
      this.list = this.list
    }
  }
}

export default new StarredStore()
