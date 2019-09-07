import { Model } from '@vuex-orm/core'

export default class Comment extends Model {
  static entity = 'comments'

  static fields() {
    return {
      id: this.increment(),
      body: this.attr(null),
      commentable_id: this.attr(null),
      commentable_type: this.attr(null),
      // relationships
      commentable: this.morphTo('commentable_id', 'commentable_type'),
    }
  }
}