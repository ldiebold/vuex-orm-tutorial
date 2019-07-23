import { Model } from '@vuex-orm/core'
import List from './List'

export default class Item extends Model {
  static entity = 'items'

  static $create(form) {
    return axios.post('/api/items', form)
    .then(response => {
      Item.insert(response.data)
      return response
    })
  }

  get $update() {
    return (form) => {
      return axios.patch('/api/items', form)
      .then(response => {
        Item.update({ data: response.data, where: response.id })
        return response
      })
    }
  }

  static fields() {
    return {
      id: this.increment(),
      body: this.attr(''),
      list_id: this.attr(null),
      // relationships
      list: this.belongsTo(List, 'list_id')
    }
  }
}