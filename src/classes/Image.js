import { Model } from '@vuex-orm/core'

export default class Image extends Model {
  static entity = 'images'

  static fields() {
    return {
      id: this.increment(),
      url: this.attr(null),
      imageable_id: this.attr(null),
      imageable_type: this.attr(null),
      // relationships
      imageable: this.morphTo('imageable_id', 'imageable_type'),
    }
  }
}