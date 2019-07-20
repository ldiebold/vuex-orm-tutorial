import { Model } from '@vuex-orm/core'
import User from './User'
import Item from './Item'

export default class List extends Model {
  static entity = 'lists'

  static fields() {
    return {
      id: this.increment(null),
      body: this.attr(''),
      title: this.attr(''),
      user_id: this.attr(null),
      // relationships
      user: this.belongsTo(User, 'user_id'),
      items: this.hasMany(Item, 'list_id')
    }
  }
}