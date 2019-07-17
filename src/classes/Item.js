import { Model } from '@vuex-orm/core'

export default class Item extends Model {
  static entity = 'items'

  static fields() {
    return {
      id: this.attr(null),
      body: this.attr(''),
    }
  }
}