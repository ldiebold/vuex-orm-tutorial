import { Model } from '@vuex-orm/core'
import List from './List'

export default class Item extends Model {
  static entity = 'items'

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